import {ItemsService} from "@/services/item/items-service";

import {networkClient} from "@/lib/axios";
import {ItemResponseSchema} from "@/model/api/item/item-schema";
import {ApiEndpoints} from "@/config/api-endpoints";

export class ItemsServiceImpl implements ItemsService {
    async getAllItems(): Promise<ItemResponseSchema> {
        const response = await networkClient.get<ItemResponseSchema>(ApiEndpoints.getALlItems)
        return response.data;
    }
}
