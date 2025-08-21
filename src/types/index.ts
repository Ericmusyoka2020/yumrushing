export interface MenuItem {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  category: string;
  image: string;
  available: boolean;
  allergens?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderForm {
  tableNumber: string;
  customerName: string;
  notes: string;
}

export type Language = 'en' | 'he' | 'ar' | 'ru' | 'yi' | 'am' | 'fr' | 'es' | 'de';
export type Theme = 'light' | 'dark';