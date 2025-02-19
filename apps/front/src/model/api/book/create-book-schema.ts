import {z} from "zod";

export const createBookSchema = z.object({
    title: z.string(),
    description: z.string(),
    genre: z.string(),
    coverImage: z.string(),
    publicationYear: z.number(),
})

export type CreateBookRequestBody = z.infer<typeof createBookSchema>