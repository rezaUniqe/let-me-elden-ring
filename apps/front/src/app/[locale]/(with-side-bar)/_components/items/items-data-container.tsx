"use client";
import { useEffect } from "react";
import ItemGalleryGrid from "@/app/[locale]/(with-side-bar)/_components/item-gallery-grid";
import { useAllItemsQuery } from "@/hooks/queries/use-all-items-query";
import { ApiFilter } from "../../../../../../@types/api-filter";

const ItemsDataContainer = ({
  currentPage,
  limit,
  name,
  setTotalPages,
}: ApiFilter) => {
  const { data: { data: items, total } = { data: [] } } = useAllItemsQuery({
    variables: {
      page: currentPage,
      limit,
      name: !name ? undefined : name,
    },
  });

  useEffect(() => {
    if (total) setTotalPages(total);
  }, [total, setTotalPages]);

  return <ItemGalleryGrid items={items} />;
};

export default ItemsDataContainer;
