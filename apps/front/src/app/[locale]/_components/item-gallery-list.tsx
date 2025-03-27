import React from 'react';
import ItemCard from "@/components/item-card";
import {Item} from "@/model/api/item/item-schema";


interface ItemGalleryListProps {
    items: Item[]
}

const ItemGalleryList = ({items}: ItemGalleryListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items?.map((item) => (
                <ItemCard key={item.id} image={item.image} description={item.effect} title={item.name}
                          isFav={false}/>
            ))}
        </div>
    );
};

export default ItemGalleryList;