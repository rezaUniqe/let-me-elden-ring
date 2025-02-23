import { createQuery } from "react-query-kit";
import { networkClient } from "@/lib/axios";
import { ApiEndpoints } from "@/config/api-endpoints";

export const getUserInfoQuery = createQuery({
  queryKey: ["user-info"],
  fetcher: async () => {
    const { data } = await networkClient.get(
      ApiEndpoints.getUserInfo("3o2ku9do9n50919"),
    );
    return data;
  },
});
