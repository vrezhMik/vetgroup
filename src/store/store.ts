import { create } from "zustand";
import { FiltersStateInterface } from "@/utils/Interfaces";
import { CartStateInterface } from "@/utils/Interfaces";
import { CardStateInterface } from "@/utils/Interfaces";
import { CardViewInterface } from "@/utils/Interfaces";
import { UserMenuStateInterface } from "@/utils/Interfaces";
import { CurrentUserStateInterface } from "@/utils/Interfaces";
import { CardView } from "@/utils/Types";
import { UserMenu } from "@/utils/Types";
import { LoginStateInterface } from "@/utils/Interfaces";
import { ProductsStateInterface } from "@/utils/Interfaces";

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
  cartTotal: 0,

  addItem: (item) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.getId() === item.getId()
      );

      let updatedCartItems;
      if (existingItemIndex !== -1) {
        updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].setQty(item.getQty());
      } else {
        updatedCartItems = [...state.cartItems, item];
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return {
        cartItems: updatedCartItems,
        cartTotal: updatedCartItems.reduce(
          (total, cartItem) => total + cartItem.getPrice() * cartItem.getQty(),
          0
        ),
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const itemToRemove = state.cartItems.find((item) => item.getId() === id);
      if (!itemToRemove) {
        return state;
      }

      const updatedCartItems = state.cartItems.filter(
        (item) => item.getId() !== id
      );
      const itemPrice = itemToRemove.getPrice() * itemToRemove.getQty();

      // ✅ Save the updated cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return {
        cartItems: updatedCartItems,
        cartTotal: state.cartTotal - itemPrice,
      };
    }),

  getItemCount: () => get().cartItems.length,

  cleanCart: () =>
    set(() => {
      localStorage.removeItem("cartItems");
      return {
        cartItems: [],
      };
    }),
}));

export const useCard = create<CardStateInterface>((set) => ({
  cardState: false,
  currentItem: null,

  setCardState: (value) =>
    set(() => ({
      cardState: value,
    })),
  setCurrentItem: (item) =>
    set(() => ({
      currentItem: item,
    })),
}));

export const useCardView = create<CardViewInterface>((set) => ({
  cardViewState: CardView.List,
  setCardView: (value) =>
    set(() => ({
      cardViewState: value,
    })),
}));

export const useUserPageMenu = create<UserMenuStateInterface>((set) => ({
  activeState: UserMenu.History,
  setActiveState: (value) =>
    set(() => ({
      activeState: value,
    })),
}));

export const useCurrentUser = create<CurrentUserStateInterface>((set) => ({
  user_data: {
    documentId: "",
    first_name: "",
    last_name: "",
    company: "",
  },
  set_current_user: (user) =>
    set(() => ({
      user_data: user,
    })),
}));

export const logInState = create<LoginStateInterface>((set) => ({
  is_logged_in: false,
  set_logged_in_status: (status) =>
    set(() => ({
      is_logged_in: status,
    })),
}));

export const productsStore = create<ProductsStateInterface>((set) => ({
  products: [],
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  add_product: (product) => set({ products: product }),
}));
