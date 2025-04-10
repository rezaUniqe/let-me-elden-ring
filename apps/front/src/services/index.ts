import { ItemsServiceImpl } from "@/services/item/items-service-impl";
import { AuthServiceImpl } from "@/services/auth/auth-service-impl";

export const itemsService = new ItemsServiceImpl();
export const authService = new AuthServiceImpl();
