import { ItemResponse } from "@/model/schema/item/item-schema";
import { ArmorItemsResponse } from "@/model/schema/item/armor-schema";
import { PaginationParams } from "../../../@types/pagination";
import { ShieldItemsResponse } from "@/model/schema/item/shield-schema";

export interface ItemsService {
  getAllItems(params: PaginationParams): Promise<ItemResponse>;
  getAllArmors(params: PaginationParams): Promise<ArmorItemsResponse>;
  getAllShields(params: PaginationParams): Promise<ShieldItemsResponse>;
}
