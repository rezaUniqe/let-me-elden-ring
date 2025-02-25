import { z } from "zod";

export const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  coverImage: z.string().url(),
  genre: z.string(),
  author: z.string(),
  publicationYear: z.number(),
});

export type RawBook = z.infer<typeof bookSchema>;
