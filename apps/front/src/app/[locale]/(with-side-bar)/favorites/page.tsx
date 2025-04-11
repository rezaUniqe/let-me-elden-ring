"use client";
import ItemGalleryGrid from "@/app/[locale]/(with-side-bar)/_components/item-gallery-grid";
import { useAppStore } from "@/providers/store-provider";

const FavoritesPage = () => {
  const items = useAppStore((state) => state.favoriteItems);
  return (
    <div className="container mx-auto px-4 py-8">
      <ItemGalleryGrid items={items} />
    </div>
  );
};

export default FavoritesPage;
