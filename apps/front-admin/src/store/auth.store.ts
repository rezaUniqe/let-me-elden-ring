import { create } from "zustand/react";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  token: string;
  userId: string;
  userName: string;
};

type State = {
  user: User | null;
};

type Action = {
  updateUser: (user: User) => void;
  removeUser: () => void;
};

export const globalStore = create<State & Action>()(
  persist(
    (set) => ({
      user: null,
      updateUser: (user) => {
        set((state) => {
          return {
            ...state,
            user: user,
          };
        });
      },
      removeUser: () => {
        set((state) => {
          return {
            ...state,
            user: null,
          };
        });
      },
    }),
    {
      name: "global-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
