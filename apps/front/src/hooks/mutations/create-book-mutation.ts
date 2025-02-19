import {createMutation} from "react-query-kit";
import {reactQueryKeys} from "@/config/react-query-keys";
import {CreateBookRequestBody} from "@/model/api/book/create-book-schema";
import {bookService} from "@/services";
import {Book} from "@/model/book";

export const createBookMutation = createMutation<Book, CreateBookRequestBody>({
    mutationKey: reactQueryKeys.mutations.createBookMutation,
    mutationFn: async (book: CreateBookRequestBody) => {
        return await bookService.createBook(book)
    }
})