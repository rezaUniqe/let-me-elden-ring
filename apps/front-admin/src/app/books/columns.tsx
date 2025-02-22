"use client";

import {ColumnDef} from "@tanstack/react-table";
import Image from "next/image";
import {Book} from "@/model/book";
import {Button} from "@workspace/ui/components/button";
import {Delete, DeleteIcon, Edit, TrashIcon} from "lucide-react";


export const columns: ColumnDef<Book>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        header: "Title",
        id:"image-title",
        cell: ({row}) => {
            return <div className={"flex flex-row gap-3 items-center"}>
                <Image width={35} height={35} className={"rounded"} src={row.original.coverImage} alt={"book image"}/>
                <p>
                    {row.original.title}
                </p>
            </div>
        },
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "author",
        header: "Author",
    },
    {
        id:"action",
        header: "",
        cell: () => {
            return <div className={"flex flex-row w-fit"}>
                <Button>
                    <Edit/>
                </Button>
                <Button>
                    <TrashIcon color={"red"}/>
                </Button>
            </div>
        }
    },
];
