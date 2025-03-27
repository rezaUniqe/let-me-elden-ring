"use client"

import {useAllItemsQuery} from "@/hooks/queries/use-get-all-books-query"
import ItemCard from "@/components/item-card";

export default function ItemGallery() {
    const {
        data: {data: items} = {data: []},
    } = useAllItemsQuery() || {}

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items?.map((item) => (
                    <ItemCard key={item.id} image={item.image} description={item.effect} title={item.name}
                              isFavorite={false}/>
                ))}
            </div>
        </div>
    )
}

