import { createQuery } from "react-query-kit";
import { reactQueryKeys } from "@/config/react-query-keys";
import { itemsService } from "@/services";
import { ShieldItemsResponse } from "@/model/schema/item/shield-schema";
import { PaginationParams } from "../../../@types/pagination";

export const useAllShieldQuery = createQuery<
  ShieldItemsResponse,
  PaginationParams & { name?: string }
>({
  queryKey: reactQueryKeys.queries.getAllShields,
  fetcher: async (params) => {
    return await itemsService.getAllShields(params);
  },
});
