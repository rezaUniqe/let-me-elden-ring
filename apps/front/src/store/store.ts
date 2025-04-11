import { createStore } from "zustand";
import { Item } from "@/model/schema/item/item-schema";
import { persist } from "zustand/middleware";

interface StoreState {
  favoriteItems: Item[];
}

interface Actions {
  addFavorite: (item: Item) => void;
  removeFavorite: (item: Item) => void;
  isItemFavorite: (item: Item) => boolean;
}

export type AppStore = StoreState & Actions;

export const defaultInitState: StoreState = {
  favoriteItems: [],
};

export function createAppStore(initState: StoreState = defaultInitState) {
  return createStore<AppStore>()(
    persist(
      (set, getState) => ({
        ...initState,
        addFavorite: (item) =>
          set((state) => ({
            ...state,
            favoriteItems: Array.from(new Set([...state.favoriteItems, item])),
          })),
        removeFavorite: (item) =>
          set((state) => ({
            ...state,
            favoriteItems: state.favoriteItems.filter((a) => a.id !== item.id),
          })),
        isItemFavorite: (item) =>
          getState().favoriteItems.some(
            (existedItem) => item.id === existedItem.id,
          ),
      }),
      {
        name: "food-storage",
      },
    ),
  );
}
