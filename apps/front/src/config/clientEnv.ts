import {z} from "zod";
import {env} from "next-runtime-env";

const clientEnvSchema=z.object({
    NEXT_PUBLIC_BASE_URL:z.string()
})


export const clientEnv=clientEnvSchema.parse({
    clientEnvSchema:env("NEXT_PUBLIC_BASE_URL")
})