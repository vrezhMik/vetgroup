import { create } from "zustand";
import { FiltersStateInterface } from "@/utils/Interfaces";

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
