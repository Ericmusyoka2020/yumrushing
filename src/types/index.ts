export interface MenuItem {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
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
  price: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedOptions?: Record<string, string[]>;
  specialInstructions?: string;
}

export interface OrderForm {
  tableNumber: string;
  customerName: string;
  phoneNumber: string;
  email?: string;
  notes: string;
  orderType: 'cart' | 'quick';
  estimatedTime?: number;
}

export interface QuickOrderItem {
  itemName: string;
  quantity: number;
  specifications: string;
  estimatedPrice: number;
}

export type Language = 'en' | 'he' | 'ar' | 'ru' | 'yi' | 'am' | 'fr' | 'es' | 'de';
export type Theme = 'light' | 'dark';