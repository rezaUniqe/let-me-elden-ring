import { createStore } from "zustand";
import {Item} from "@/model/api/item/item-schema";

interface StoreState {
  favoriteItems: Item[];
}

interface Actions {
  addFavorite: (item: Item) => void;
  removeFavorite: (item: Item) => void;
}

export type AppStore = StoreState & Actions;

export const defaultInitState: StoreState = {
  favoriteItems: [],
};

export function createAppStore(initState: StoreState = defaultInitState) {
  return createStore<AppStore>()((set) => ({
    ...initState,
    addFavorite: (item) =>
      set((state) => ({
        ...state,
        favoriteItems: [...state.favoriteItems, item],
      })),
    removeFavorite: (item) =>
      set((state) => ({
        ...state,
        favoriteItems: state.favoriteItems.filter((a) => a.id !== item.id),
      })),
  }));
}
