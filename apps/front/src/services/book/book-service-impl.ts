import {CreateBookRequestBody} from "@/model/api/book/create-book-schema";
import {UpdateBookSchema} from "@/model/api/book/update-book-schema";
import {Book} from "@/model/book";
import {BookService} from "@/services/book/book-service";
import {networkClient} from "@/lib/axios";
import {ApiEndpoints} from "@/config/api-endpoints";

export class BookServiceImpl implements BookService {
    async createBook(book: CreateBookRequestBody): Promise<Book> {
        const res = await networkClient.post(ApiEndpoints.getAllBooks, book)
        return res.data
    }

    async updateBook(book: UpdateBookSchema): Promise<Book> {
        const res = await networkClient.put(ApiEndpoints.updateBook(book.id), book)
        return res.data
    }


    async deleteBook(id: number): Promise<void> {
        await networkClient.delete(ApiEndpoints.deleteBook(id))
    }

    async getBook(id: number): Promise<Book> {
        const res=await networkClient.get(ApiEndpoints.getBook(id))
        return res.data
    }

    async getBooks(): Promise<Book[]> {
        const res = await networkClient.get(ApiEndpoints.getAllBooks)
        return res.data
    }
}

