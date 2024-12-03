import { create } from "zustand";
import { FiltersStateInterface } from "@/utils/Interfaces";
import { CartStateInterface } from "@/utils/Interfaces";
import { CardStateInterface } from "@/utils/Interfaces";

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
  currentItem: null,

  setCardState: (value) =>
    set(() => ({
      cardState: value,
    })),
  setCurrentItem: (item) =>
    set((state) => ({
      currentItem: item,
    })),
}));
