import { createSuspenseQuery } from "react-query-kit";
import { ApiEndpoints } from "@/config/api-endpoints";
import { networkClient } from "@/lib/axios";
import { RawPagedBooks } from "@/model/api/books/get-all-books";
import { PagedData } from "@/model/paged-data";
import { Book } from "@/model/book";
import { bookMapper, pagedDataConvertor } from "@/model/convertors/convert";
import { createPagedDataSchema } from "@/model/api/create-paged-data-schema";
import { bookSchema } from "@/model/api/books/raw-book";

export const useGetAllBooksQuery = createSuspenseQuery<PagedData<Book>>({
  queryKey: ["get-all-books"],
  fetcher: async () => {
    const response = await networkClient.get<RawPagedBooks>(
      ApiEndpoints.getAllBooks,
    );
    const parsedRes = createPagedDataSchema(bookSchema).parse(response.data);
    return pagedDataConvertor(bookMapper, parsedRes);
  },
});
