import { FilterType } from "./Types";
import { CartItemType } from "./Types";
import { Item } from "@/classes/ItemClass";
import { CardView } from "./Types";
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
  cartItems: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  getItemCount: () => number;
}

export interface CardStateInterface {
  cardState: boolean;
  currentItem: Item;
  setCurrentItem: (item: Item) => void;
  setCardState: (value: boolean) => void;
}

export interface CardViewInterface {
  cardViewState: CardView;
  setCardView: (view: CardView) => void;
}
