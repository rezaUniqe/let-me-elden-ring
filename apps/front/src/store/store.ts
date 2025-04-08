import { createStore } from "zustand";
import { ArmorItem } from "@/model/api/item/armor-schema";

interface StoreState {
  favoriteArmors: ArmorItem[];
}

interface Actions {
  addFavoriteArmor: (armor: ArmorItem) => void;
  removeFavoriteArmor: (armor: ArmorItem) => void;
}

export type AppStore = StoreState & Actions;

export const defaultInitState: StoreState = {
  favoriteArmors: []
}

export function createAppStore(initState: StoreState = defaultInitState) {
  return createStore<AppStore>()((set) => ({
    ...initState,
    addFavoriteArmor: (armor) =>
      set((state) => ({
        ...state,
        favoriteArmors: [...state.favoriteArmors, armor],
      })),
    removeFavoriteArmor: (armor) =>
      set((state) => ({
        ...state,
        favoriteArmors: state.favoriteArmors.filter((a) => a.id !== armor.id),
      })),
  }));
}
