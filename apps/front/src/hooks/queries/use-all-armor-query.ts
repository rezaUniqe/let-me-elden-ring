import { createSuspenseQuery } from "react-query-kit";
import { reactQueryKeys } from "@/config/react-query-keys";
import { itemsService } from "@/services";
import { ArmorItemsResponse } from "@/model/schema/item/armor-schema";
import { PaginationParams } from "../../../@types/pagination";

export const useAllArmorQuery = createSuspenseQuery<
  ArmorItemsResponse,
  PaginationParams & { name?: string }
>({
  queryKey: reactQueryKeys.queries.getAllArmors,
  fetcher: async (params) => {
    return await itemsService.getAllArmors(params);
  },
});
