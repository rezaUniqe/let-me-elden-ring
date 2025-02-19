import {Book} from "@/model/book";
import {CreateBookRequestBody} from "@/model/api/book/create-book-schema";
import {UpdateBookSchema} from "@/model/api/book/update-book-schema";

export interface BookService{
    getBooks():Promise<Book[]>;
    createBook(book:CreateBookRequestBody):Promise<Book>;
    updateBook(book:UpdateBookSchema):Promise<Book>;
    deleteBook(id:number):Promise<void>;
    getBook(id:number):Promise<Book>;


}