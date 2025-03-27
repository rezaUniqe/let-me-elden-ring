import {createSuspenseQuery} from "react-query-kit";
import {reactQueryKeys} from "@/config/react-query-keys";
import {itemsService} from "@/services";
import {ItemResponse} from "@/model/api/item/item-schema";

export const useAllItemsQuery = createSuspenseQuery<ItemResponse, void>({
    queryKey: reactQueryKeys.queries.getAllItems,
    fetcher: async () => {
        return await itemsService.getAllItems()
    }
})