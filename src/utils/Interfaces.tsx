import { FilterType } from "./Types";
import { CartItemType } from "./Types";
import { Item } from "@/classes/ItemClass";
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
  currentItem: Item;
  setCurrentItem: (item: Item) => void;
  setCardState: (value: boolean) => void;
}
