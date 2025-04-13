import React from "react";
import ItemCard from "@/components/item-card";
import { useAppStore } from "@/providers/store-provider";
import { placeholderImageUrls } from "@/config/constants";
import { Item } from "@/model/schema/item/item-schema";

interface ItemGalleryListProps {
  items: {
    id: string;
    description: string;
    name: string;
    image?: string | null;
    effect?: string | null;
  }[];
}

const ItemGalleryGrid = ({ items }: ItemGalleryListProps) => {
  const addToFavItems = useAppStore((state) => state.addFavorite);
  const removeFromFavItems = useAppStore((state) => state.removeFavorite);
  const isItemFavorite = useAppStore((state) => state.isItemFavorite);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items?.map((item) => (
        <ItemCard
          onFavoriteButtonPressed={(isFavorite) => {
            if (!isFavorite) {
              addToFavItems(item as Item);
            } else {
              removeFromFavItems(item as Item);
            }
          }}
          key={item.id}
          image={item.image ?? placeholderImageUrls.cardItemImage}
          description={item.effect ?? ""}
          title={item.name}
          isFav={isItemFavorite(item as Item)}
        />
      ))}
    </div>
  );
};

export default ItemGalleryGrid;
