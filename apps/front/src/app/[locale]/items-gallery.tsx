"use client"

import {useAllItemsQuery} from "@/hooks/queries/use-get-all-books-query"
import ItemGalleryList from "@/app/[locale]/_components/item-gallery-list";

export default function ItemGalleryContainer() {
    const {
        data: {data: items} = {data: []},
    } = useAllItemsQuery()

    return (
        <div className="container mx-auto py-8 px-4">
            <ItemGalleryList items={items}/>
        </div>
    )
}

