import React from "react";
import ItemCard from "@/components/item-card";
import { Item } from "@/model/api/item/item-schema";
import { useAppStore } from "@/providers/store-provider";

interface ItemGalleryListProps {
  items: Item[];
}

const ItemGalleryList = ({ items }: ItemGalleryListProps) => {
  const addToFavItems = useAppStore((state) => state.addFavorite);
  const removeFromFavItems = useAppStore((state) => state.removeFavorite);
  const favItems = useAppStore((state) => state.favoriteItems);
  console.log(favItems)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items?.map((item) => (
        <ItemCard
          onFavoriteButtonPressed={(isFavorite) => {
              if(!isFavorite){
                addToFavItems(item)
              }else {
                removeFromFavItems(item)
              }
          }}
          key={item.id}
          image={item.image}
          description={item.effect}
          title={item.name}
        />
      ))}
    </div>
  );
};

export default ItemGalleryList;
