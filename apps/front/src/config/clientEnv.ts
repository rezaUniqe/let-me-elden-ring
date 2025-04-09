import { z } from "zod";
import { env } from "next-runtime-env";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_API_URL: env("NEXT_PUBLIC_API_URL"),
});
