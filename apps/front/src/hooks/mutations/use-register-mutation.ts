import { createMutation } from "react-query-kit";
import {reactQueryKeys} from "@/config/react-query-keys";
import {networkClient} from "@/lib/axios";
import {ApiEndpoints} from "@/config/api-endpoints";
import {RegisterRequestBody} from "@/model/api/post-request-bodies/register";
export const useRegisterMutation = createMutation<void,RegisterRequestBody>({
  mutationKey:reactQueryKeys.mutations.register,
  mutationFn:(data)=>{
   return networkClient.post(ApiEndpoints.register,data)
  }
})