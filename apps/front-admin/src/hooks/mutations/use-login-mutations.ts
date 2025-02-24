import { createMutation } from "react-query-kit";
import { mutationsKey } from "@/config/constant";
import {
  LoginRequestParams,
  loginRequestParamsSchema,
} from "@/components/modals/api/request-bodies";
import { networkClient } from "@/lib/axios";
import { ApiEndpoints } from "@/config/api-endpoints";
import { globalStore } from "@/store/auth.store";

export const useLoginMutations = createMutation<void, LoginRequestParams>({
  mutationKey: mutationsKey.signInKey,
  mutationFn: async (variables) => {
    const bodyParams = loginRequestParamsSchema.parse(variables);
    const response = await networkClient.post(ApiEndpoints.signIn, bodyParams);
    globalStore.setState((state) => ({
      ...state,
      user: {
        userId: response.data.record.id,
        userName: response.data.record.name,
        token: response.data.token,
      },
    }));
  },
});
