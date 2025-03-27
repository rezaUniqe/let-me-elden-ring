import {z} from "zod";

export const itemSchema = z.object({
    id: z.string(),
    description: z.string(),
    name: z.string(),
    image: z.string(),
    type: z.string(),
    effect: z.string(),
})

export const itemResponseSchema = z.object({
    success: z.boolean(),
    count: z.number(),
    data: z.array(itemSchema),
});


export type ItemResponseSchema=z.output<typeof itemResponseSchema>