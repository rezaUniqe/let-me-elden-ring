"use client";

import { createContext, type ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createAppStore, type AppStore } from "@/store/store";
export type StoreApi = ReturnType<typeof createAppStore>

export const storeContext = createContext<StoreApi | undefined>(undefined);

export interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<StoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createAppStore({favoriteArmors: []});
  }

  return (
      <storeContext.Provider value={storeRef.current}>
        {children}
      </storeContext.Provider>
  );
};

export const useAppStore = <T,>(
    selector: (store: AppStore) => T,
): T => {
  const storeFromContext = useContext(storeContext)

  if (!storeFromContext) {
    throw new Error(`useAppStore must be used within StoreProvider`)
  }

  return useStore(storeFromContext, selector)
}