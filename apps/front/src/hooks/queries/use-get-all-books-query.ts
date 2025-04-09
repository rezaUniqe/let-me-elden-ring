import { createSuspenseQuery } from "react-query-kit";
import { reactQueryKeys } from "@/config/react-query-keys";
import { itemsService } from "@/services";
import { ItemResponse } from "@/model/api/item/item-schema";
import { type PaginationParams } from "../../../@types/pagination";

export const useAllItemsQuery = createSuspenseQuery<
  ItemResponse,
  PaginationParams & { name?: string }
>({
  queryKey: reactQueryKeys.queries.getAllItems,
  fetcher: async (params) => {
    return await itemsService.getAllItems(params);
  },
});
