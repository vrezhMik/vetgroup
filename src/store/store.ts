import { create } from "zustand";
import { FiltersStateInterface } from "@/utils/Interfaces";
import { CartStateInterface } from "@/utils/Interfaces";

export const useFilters = create<FiltersStateInterface>((set) => ({
  filters: [],
  addFilter: (filter) =>
    set((state) => ({
      filters: [...state.filters, filter],
    })),
  removeFilter: (id: string) =>
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
  removeItem: (id: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  getItemCount: () => get().cartItems.length,
}));
