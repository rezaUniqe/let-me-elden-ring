import { createSuspenseQuery } from "react-query-kit";
import { reactQueryKeys } from "@/config/react-query-keys";
import { itemsService } from "@/services";
import { ArmorItemsResponse } from "@/model/schema/item/armor-schema";

export const useAllArmorQuery = createSuspenseQuery<ArmorItemsResponse, void>({
  queryKey: reactQueryKeys.queries.getAllArmors,
  fetcher: async () => {
    return await itemsService.getAllArmors();
  },
});
