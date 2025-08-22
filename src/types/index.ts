export interface MenuItem {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  category: string;
  image: string;
  available: boolean;
  allergens?: string[];
  options?: MenuItemOption[];
  preparationTime?: number;
}

export interface MenuItemOption {
  id: string;
  name: Record<string, string>;
  type: 'single' | 'multiple';
  required: boolean;
  choices: OptionChoice[];
}

export interface OptionChoice {
  id: string;
  name: Record<string, string>;
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedOptions?: Record<string, string[]>;
  specialInstructions?: string;
}

export interface OrderForm {
  tableNumber: string;
  customerName: string;
  notes: string;
}

export type Language = 'en' | 'he' | 'ar' | 'ru' | 'yi' | 'am' | 'fr' | 'es' | 'de';
export type Theme = 'light' | 'dark';