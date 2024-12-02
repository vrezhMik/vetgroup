import { FilterType } from "./Types";
import { CartItemType } from "./Types";
export interface ImagePropsInterface {
  url: string;
  alt: string;
}

export interface ProductPropsInterface {
  data: CartItemType;
}

export interface FiltersStateInterface {
  filters: FilterType[];
  addFilter: (filter: FilterType) => void;
  removeFilter: (id: string) => void;
}
export interface CartStateInterface {
  cartItems: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
  getItemCount: () => number;
}

export interface CardStateInterface {
  cardState: boolean;
  setCardState: (value: boolean) => void;
}
