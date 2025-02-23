import { createMutation } from "react-query-kit";
import { mutationsKey } from "@/config/constant";

export const useSignUpMutations = createMutation({
  mutationKey: mutationsKey.signUpKey,
  mutationFn: () => {},
});
