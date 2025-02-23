"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Book } from "@/model/book";
import { Button } from "@workspace/ui/components/button";
import { Edit, TrashIcon } from "lucide-react";

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    header: "Title",
    id: "image-title",
    cell: ({ row }) => {
      return (
        <div className={"flex   flex-row gap-3 items-center"}>
          <div className={"w-[35px] relative h-[35px]"}>
            <Image
              fill
              className={"rounded"}
              src={row.original.coverImage}
              alt={"book image"}
            />
          </div>
          <p>{row.original.title}</p>
        </div>
      );
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
    id: "action",
    header: "",
    cell: () => {
      return (
        <div className={"flex flex-row gap-1 w-fit"}>
          <Button variant={"ghost"}>
            <Edit />
          </Button>
          <Button variant={"ghost"}>
            <TrashIcon color={"red"} />
          </Button>
        </div>
      );
    },
  },
];
