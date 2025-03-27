import {ItemsService} from "@/services/item/items-service";

import {networkClient} from "@/lib/axios";
import {ItemResponse, itemResponseSchema} from "@/model/api/item/item-schema";
import {ApiEndpoints} from "@/config/api-endpoints";
import {ArmorItemsResponse, armorResponseSchema} from "@/model/api/item/armor-schema";

export class ItemsServiceImpl implements ItemsService {
   async getAllArmors(): Promise<ArmorItemsResponse> {
       const response = await networkClient.get<ArmorItemsResponse>(ApiEndpoints.getAllArmors)
       return armorResponseSchema.parse(response.data);
   }
    async getAllItems(): Promise<ItemResponse> {
        const response = await networkClient.get<ItemResponse>(ApiEndpoints.getAllItems)
        return itemResponseSchema.parse(response.data);
    }
}
