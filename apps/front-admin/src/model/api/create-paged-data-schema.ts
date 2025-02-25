import { z, ZodType } from "zod";

export function createPagedDataSchema<T>(schema: ZodType<T>) {
  return z.object({
    items: schema.array(),
    page: z.number().default(1),
    perPage: z.number().default(6),
    totalPages: z.number(),
    totalItems: z.number(),
  });
}
export type PagedApiData<T> = z.infer<
  ReturnType<typeof createPagedDataSchema<T>>
>;
