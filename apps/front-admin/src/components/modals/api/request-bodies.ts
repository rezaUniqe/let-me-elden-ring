import { z } from "zod";

export const loginRequestParamsSchema = z.object({
  identity: z.string().email(),
  password: z.string(),
});

export type LoginRequestParams = z.infer<typeof loginRequestParamsSchema>;
