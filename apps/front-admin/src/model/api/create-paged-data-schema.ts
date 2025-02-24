import { z, ZodType } from "zod";

export const createPagedDataSchema = <T>(schema: ZodType<T>) =>
  z.object({
    items: schema.array(),
    page: z.number().default(1),
    perPage: z.number().default(6),
    totalPages: z.number(),
  });
