import { FilterType } from "./Types";

export interface ImagePropsInterface {
  url: string;
  alt: string;
}

export interface ProductPropsInterface {
  data: {
    name: string;
    weight: number;
    price: number;
    image: string;
    qty: number;
    sale: number;
  };
}

export interface FiltersStateInterface {
  filters: FilterType[];
  addFilter: (filter: FilterType) => void;
  removeFilter: (id: string) => void;
}
