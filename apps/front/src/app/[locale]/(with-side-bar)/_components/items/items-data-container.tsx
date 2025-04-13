"use client";
import { useEffect } from "react";
import ItemGalleryGrid from "@/app/[locale]/(with-side-bar)/_components/item-gallery-grid";
import { useAllItemsQuery } from "@/hooks/queries/use-all-items-query";

interface ItemsDataContainerProps {
  currentPage: number;
  limit: number;
  name?: string;
  setTotalPages: (total: number) => void;
}

const ItemsDataContainer = ({
  currentPage,
  limit,
  name,
  setTotalPages,
}: ItemsDataContainerProps) => {
  const { data: { data: items, total } = { data: [] } } = useAllItemsQuery({
    variables: {
      page: currentPage,
      limit,
      name: name ?? undefined,
    },
  });

  useEffect(() => {
    if (total) setTotalPages(total);
  }, [total, setTotalPages]);

  return <ItemGalleryGrid items={items} />;
};

export default ItemsDataContainer;
