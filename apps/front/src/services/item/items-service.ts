import { ItemResponse } from "@/model/api/item/item-schema";
import { ArmorItemsResponse } from "@/model/api/item/armor-schema";
import { PaginationParams } from "../../../@types/pagination";

export interface ItemsService {
  getAllItems(params: PaginationParams): Promise<ItemResponse>;
  getAllArmors(): Promise<ArmorItemsResponse>;
}
