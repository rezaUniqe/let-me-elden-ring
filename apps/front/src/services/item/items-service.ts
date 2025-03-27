import {ItemResponseSchema} from "@/model/api/item/item-schema";

export interface ItemsService {
    getAllItems(): Promise<ItemResponseSchema>;
}