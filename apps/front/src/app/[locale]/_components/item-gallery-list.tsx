import React from "react";
import ItemCard from "@/components/item-card";
import { Item } from "@/model/api/item/item-schema";
import { useAppStore } from "@/providers/store-provider";
import { placeholderImageUrls } from "@/config/constants";

interface ItemGalleryListProps {
  items: Item[];
}

const ItemGalleryList = ({ items }: ItemGalleryListProps) => {
  const addToFavItems = useAppStore((state) => state.addFavorite);
  const removeFromFavItems = useAppStore((state) => state.removeFavorite);
  const isItemFavorite = useAppStore((state) => state.isItemFavorite);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items?.map((item) => (
        <ItemCard
          onFavoriteButtonPressed={(isFavorite) => {
            if (!isFavorite) {
              addToFavItems(item);
            } else {
              removeFromFavItems(item);
            }
          }}
          key={item.id}
          image={item.image ?? placeholderImageUrls.cardItemImage}
          description={item.effect ?? ""}
          title={item.name}
          isFav={isItemFavorite(item)}
        />
      ))}
    </div>
  );
};

export default ItemGalleryList;
