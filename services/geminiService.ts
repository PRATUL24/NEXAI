import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const SYSTEM_INSTRUCTION = `
You are NEXAI ASSISTANT, the advanced AI support agent for NEXAI Home Appliances.
Your goal is to assist customers with product information, pricing, and support.
Maintain a futuristic, helpful, and polite tone. Short, concise answers are preferred.

Here is our product catalog and pricing:
${PRODUCTS.map(p => `- ${p.name} (${p.category}): ₹${p.price.toLocaleString()}. Features: ${p.features.join(', ')}.`).join('\n')}

Key Policies:
- 2-year warranty on all products.
- Free service and maintenance for the first 1.5 years.
- 24/7 Support via this chat.
- All products are AI-assisted for energy efficiency.

If a user asks about a product not listed, politely inform them we currently specialize in the listed appliances.
`;

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text ?? "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently recalibrating my neural network. Please try again momentarily.";
  }
};

export const generateProductImage = async (productName: string, category: string, description: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `Futuristic product photography of ${productName}, a high-tech ${category}. 
    ${description}.
    Style: Sleek, matte black and metallic silver finish with glowing cyan LED accents. 
    Setting: Dark moody studio lighting, reflection on black glass floor, cinematic 8k resolution, minimalist, hyper-realistic. 
    No text overlays.`;

    // Using gemini-2.5-flash-image for generation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
    });

    // Iterate through parts to find the image data
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation error:", error);
    return null;
  }
};