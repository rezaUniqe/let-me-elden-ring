import { ItemsService } from "@/services/item/items-service";

import { networkClient } from "@/lib/axios";
import {
  ItemResponse,
  itemResponseSchema,
} from "@/model/schema/item/item-schema";
import { ApiEndpoints } from "@/config/api-endpoints";
import {
  ArmorItemsResponse,
  armorResponseSchema,
} from "@/model/schema/item/armor-schema";
import { PaginationParams } from "../../../@types/pagination";
import {
  ShieldItemsResponse,
  shieldResponseSchema,
} from "@/model/schema/item/shield-schema";

export class ItemsServiceImpl implements ItemsService {
  async getAllArmors(params: PaginationParams): Promise<ArmorItemsResponse> {
    const response = await networkClient.get<ArmorItemsResponse>(
      ApiEndpoints.getAllArmors,
      { params: JSON.parse(JSON.stringify(params)) },
    );
    return armorResponseSchema.parse(response.data);
  }

  async getAllItems(params: PaginationParams): Promise<ItemResponse> {
    const response = await networkClient.get<ItemResponse>(
      ApiEndpoints.getAllItems,
      { params: JSON.parse(JSON.stringify(params)) },
    );
    return itemResponseSchema.parse(response.data);
  }

  async getAllShields(params: PaginationParams): Promise<ShieldItemsResponse> {
    const response = await networkClient.get<ItemResponse>(
      ApiEndpoints.getAllShields,
      { params: JSON.parse(JSON.stringify(params)) },
    );
    return shieldResponseSchema.parse(response.data);
  }
}
