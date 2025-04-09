// components/ItemsDataContainer.tsx
"use client";
import React, { useEffect } from "react";
import { useAllItemsQuery } from "@/hooks/queries/use-get-all-books-query";
import ItemGalleryGrid from "@/app/[locale]/_components/item-gallery-grid";

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
