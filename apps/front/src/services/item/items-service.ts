import {ItemResponse} from "@/model/api/item/item-schema";
import {ArmorItemsResponse} from "@/model/api/item/armor-schema";

export interface ItemsService {
    getAllItems(): Promise<ItemResponse>;
    getAllArmors(): Promise<ArmorItemsResponse>;
}