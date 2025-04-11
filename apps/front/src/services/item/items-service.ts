import { ItemResponse } from "@/model/schema/item/item-schema";
import { ArmorItemsResponse } from "@/model/schema/item/armor-schema";
import { PaginationParams } from "../../../@types/pagination";

export interface ItemsService {
  getAllItems(params: PaginationParams): Promise<ItemResponse>;
  getAllArmors(): Promise<ArmorItemsResponse>;
}
