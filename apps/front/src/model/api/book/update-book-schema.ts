import {z} from "zod";

export const updateBookSchema = z.object({
    id: z.number(),
    title: z.string().optional(),
    description: z.string().optional(),
    genre: z.string().optional(),
    coverImage: z.string().optional(),
    publicationYear: z.number().optional(),
})

export type UpdateBookSchema = z.infer<typeof updateBookSchema>