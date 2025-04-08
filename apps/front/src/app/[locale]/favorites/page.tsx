"use client";
import ItemGalleryList from "@/app/[locale]/_components/item-gallery-list";
import { useAppStore } from "@/providers/store-provider";

const FavoritesPage = () => {
  const items = useAppStore((state) => state.favoriteItems);
  return (
    <div className="container mx-auto px-4 py-8">
      <ItemGalleryList items={items} />
    </div>
  );
};

export default FavoritesPage;
