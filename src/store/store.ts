import { create } from "zustand";
import { FiltersStateInterface } from "@/utils/Interfaces";
import { CartStateInterface } from "@/utils/Interfaces";
import { CardStateInterface } from "@/utils/Interfaces";
import { Item } from "@/classes/ItemClass";

export const useFilters = create<FiltersStateInterface>((set) => ({
  filters: [],
  addFilter: (filter) =>
    set((state) => ({
      filters: [...state.filters, filter],
    })),
  removeFilter: (id) =>
    set((state) => ({
      filters: state.filters.filter((filter) => filter.id !== id),
    })),
}));

export const useCart = create<CartStateInterface>((set, get) => ({
  cartItems: [],
  addItem: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  getItemCount: () => get().cartItems.length,
}));

export const useCard = create<CardStateInterface>((set) => ({
  cardState: false,
  currentItem: new Item({
    id: "",
    name: "",
    description: "",
    weight: 0,
    price: 0,
    image: "",
    qty: 0,
    salePrcentage: 0,
    saledPrice: 0,
  }),

  setCardState: (value) =>
    set(() => ({
      cardState: value,
    })),
  setCurrentItem: (item) =>
    set((state) => ({
      currentItem: item,
    })),
}));
