import {createQuery} from "react-query-kit";
import {reactQueryKeys} from "@/config/react-query-keys";
import {Book} from "@/model/book";
import {bookService} from "@/services";

export const useGetAllBooksQuery=createQuery<Book[],void>({
    queryKey:reactQueryKeys.queries.getAllBooks,
    fetcher:async()=>{
        return await bookService.getBooks()
    }
})