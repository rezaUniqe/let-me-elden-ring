"use client"

import { useState } from "react"
import Image from "next/image"
import { PlusCircle } from "lucide-react"
import { Button } from "@workspace/ui/components/button";
import {Book} from "@/model/book";


const books: Book[] = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        coverImage: "/placeholder.svg?height=400&width=300",
        description:
            "A classic of modern American literature, dealing with serious issues of racial inequality and injustice.",
        publicationYear: 1960,
        genre: "Southern Gothic, Bildungsroman",
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        coverImage: "/placeholder.svg?height=400&width=300",
        description:
            "A dystopian novel set in a totalitarian society, exploring themes of government surveillance and control.",
        publicationYear: 1949,
        genre: "Dystopian, Political fiction",
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        coverImage: "/placeholder.svg?height=400&width=300",
        description: "A romantic novel of manners, following the character development of Elizabeth Bennet.",
        publicationYear: 1813,
        genre: "Classic Regency novel",
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        coverImage: "/placeholder.svg?height=400&width=300",
        description: "A novel depicting the lavish lifestyle of the Roaring Twenties and the American Dream.",
        publicationYear: 1925,
        genre: "Tragedy",
    },
    {
        id: 5,
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        coverImage: "/placeholder.svg?height=400&width=300",
        description: "A landmark of magical realism, telling the multi-generational story of the Buendía family.",
        publicationYear: 1967,
        genre: "Magical Realism",
    },
    {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        coverImage: "/placeholder.svg?height=400&width=300",
        description: "A controversial novel known for its themes of teenage angst and alienation.",
        publicationYear: 1951,
        genre: "Coming-of-age fiction",
    },
]

export default function BooksGrid() {
    const [shelfBooks, setShelfBooks] = useState<number[]>([])
    const addToShelf = (bookId: number) => {
        setShelfBooks((prev) => {
            if (prev.includes(bookId)) {
                return prev.filter((id) => id !== bookId)
            } else {
                return [...prev, bookId]
            }
        })
    }


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={book.coverImage || "/placeholder.svg"}
                            alt={`Cover of ${book.title}`}
                            width={300}
                            height={400}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                            <p className="text-gray-600 mb-2">{book.author}</p>
                            <p className="text-gray-700 text-sm mb-4">{book.description}</p>
                            <div className="flex justify-between">
                                <Button
                                    onClick={() => addToShelf(book.id)}
                                    variant={shelfBooks.includes(book.id) ? "secondary" : "default"}
                                >
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    {shelfBooks.includes(book.id) ? "Remove from Shelf" : "Add to Shelf"}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

