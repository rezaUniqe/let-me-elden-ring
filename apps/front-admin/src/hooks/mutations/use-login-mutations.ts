import { createMutation } from "react-query-kit";
import { mutationsKey } from "@/config/constant";
import {
  LoginRequestParams,
  loginRequestParamsSchema,
} from "@/components/modals/api/request-bodies";
import { networkClient } from "@/lib/axios";
import { ApiEndpoints } from "@/config/api-endpoints";

export const useLoginMutations = createMutation<void, LoginRequestParams>({
  mutationKey: mutationsKey.signInKey,
  mutationFn: async (variables) => {
    const bodyParams = loginRequestParamsSchema.parse(variables);
    await networkClient.post(ApiEndpoints.signIn, bodyParams);
  },
});
