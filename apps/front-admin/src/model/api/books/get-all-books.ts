import { z } from "zod";
import { bookSchema } from "@/model/api/books/raw-book";
import { createPagedDataSchema } from "@/model/api/create-paged-data-schema";

export const booksWithPaginationSchema = createPagedDataSchema(bookSchema);
export type RawPagedBooks = z.infer<typeof booksWithPaginationSchema>;
