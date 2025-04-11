import { createMutation } from "react-query-kit";
import { reactQueryKeys } from "@/config/react-query-keys";
import { networkClient } from "@/lib/axios";
import { ApiEndpoints } from "@/config/api-endpoints";
import { LoginRequestBody } from "@/model/api/post-request-bodies/login";

export const useLoginMutation = createMutation<void, LoginRequestBody>({
  mutationKey: reactQueryKeys.mutations.login,
  mutationFn: (data) => {
    return networkClient.post(ApiEndpoints.login, data);
  },
});
