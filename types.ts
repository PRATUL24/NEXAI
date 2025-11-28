export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Pricing {
  WASHING_MACHINE = 35999,
  AIR_PURIFIER = 32999,
  VACUUM_ROBOT = 28999,
  AIR_CONDITIONER = 37999,
  REFRIGERATOR = 99999,
  HOME_ASSISTANCE = 10000
}