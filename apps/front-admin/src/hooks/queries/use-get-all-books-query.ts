import { createSuspenseQuery } from "react-query-kit";
import { ApiEndpoints } from "@/config/api-endpoints";
import { networkClient } from "@/lib/axios";
import { RawPagedBooks } from "@/model/api/books/get-all-books";
import { PagedData } from "@/model/paged-data";
import { Book } from "@/model/book";

export const useGetAllBooksQuery = createSuspenseQuery<PagedData<Book>>({
  queryKey: ["get-all-books"],
  fetcher: async () => {
    const response = await networkClient.get<RawPagedBooks>(
      ApiEndpoints.getAllBooks,
    );
    return response.data.items.map((rawBook) => {
      return {
        id: rawBook.id,
        genre: rawBook.genre,
        coverImage: rawBook.coverImage,
        title: rawBook.title,
        author: rawBook.author,
        description: rawBook.description,
        publicationYear: rawBook.publicationYear,
      };
    });
  },
});
