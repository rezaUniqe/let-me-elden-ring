import { create } from "zustand/react";

type AuthStore = {
  token: string;
  userId: string;
  userName: string;
};