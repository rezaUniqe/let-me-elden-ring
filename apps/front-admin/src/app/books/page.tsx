import { BooksTable } from "@/app/books/data-table";
import { columns } from "@/app/books/columns";
import { Button } from "@workspace/ui/components/button";
import { Book } from "@/model/book";
import dynamic from "next/dynamic";
const AddBookModal = dynamic(
  () => import("@/components/modals/add-book-modal"),
);
async function getData(): Promise<Book[]> {
  return [
    {
      id: 1,
      genre: "",
      publicationYear: 1998,
      coverImage: "/book.jpg",
      title: "The Great Adventure",
      description: "An epic journey through uncharted lands.",
      author: "John Doe",
    },
    {
      id: 2,
      genre: "",
      publicationYear: 1998,
      coverImage: "/book.jpg",
      title: "The Great Adventure",
      description: "An epic journey through uncharted lands.",
      author: "John Doe",
    },
    {
      id: 3,
      genre: "",
      publicationYear: 1998,
      coverImage: "/book.jpg",
      title: "The Great Adventure",
      description: "An epic journey through uncharted lands.",
      author: "John Doe",
    },
    {
      id: 4,
      genre: "",
      publicationYear: 1998,
      coverImage: "/book.jpg",
      title: "The Great Adventure",
      description: "An epic journey through uncharted lands.",
      author: "John Doe",
    },
    {
      id: 5,
      genre: "",
      publicationYear: 1998,
      coverImage: "/book.jpg",
      title: "The Great Adventure",
      description: "An epic journey through uncharted lands.",
      author: "John Doe",
    },
    {
      id: 6,
      genre: "",
      publicationYear: 1998,
      coverImage: "/book.jpg",
      title: "The Great Adventure",
      description: "An epic journey through uncharted lands.",
      author: "John Doe",
    },
    {
      id: 7,
      genre: "",
      publicationYear: 1998,
      coverImage: "/book.jpg",
      title: "The Great Adventure",
      description: "An epic journey through uncharted lands.",
      author: "John Doe",
    },
  ];
}
export default async function Home() {
  const data = await getData();

  return (
    <div className={"pt-[80px] px-6 flex flex-col"}>
      <div className={"w-full max-w-[1200px] mx-auto flex flex-col gap-6"}>
        <div className={"w-full h-[40px] flex"}>
          <AddBookModal>
            <Button className={"ml-auto"}>Add Book</Button>
          </AddBookModal>
        </div>
        <BooksTable data={data} columns={columns} />
      </div>
    </div>
  );
}
