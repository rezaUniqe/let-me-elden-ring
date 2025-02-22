import {BooksTable} from "@/app/books/data-table";
import {columns} from "@/app/books/columns";
import {Button} from "@workspace/ui/components/button";

async function getData(): Promise<any[]> {
    return [
        {
            "id": "1",
            "coverImage": "/book.jpg",
            "title": "The Great Adventure",
            "description": "An epic journey through uncharted lands.",
            "author": "John Doe"
        },
        {
            "id": "1",
            "coverImage": "/book.jpg",
            "title": "Mystery of the Lost Island",
            "description": "A thrilling tale of discovery and danger.",
            "author": "Jane Smith"
        },
        {
            "id": "1",
            "coverImage": "/book.jpg",
            "title": "The Hidden Secrets",
            "description": "Unveiling the truth behind ancient mysteries.",
            "author": "Robert Brown"
        },
        {
            "id": "1",
            "coverImage": "/book.jpg",
            "title": "Beyond the Stars",
            "description": "A sci-fi adventure exploring the cosmos.",
            "author": "Emily White"
        },
        {
            "id": "1",
            "coverImage": "/book.jpg",
            "title": "Legends of the Forgotten Realm",
            "description": "A fantasy tale of magic and heroism.",
            "author": "Michael Green"
        }
    ]
}
export default async function Home() {


    const data = await getData();

    return (
        <div className={"pt-[80px] px-6 flex flex-col"}>
            <div className={"w-full max-w-[1200px] mx-auto flex flex-col gap-6"}>
                <div className={"w-full h-[40px] flex"}>
                    <Button className={"ml-auto"}>Add Book</Button>
                </div>
                <BooksTable data={data} columns={columns}/>
            </div>

        </div>
    );
}
