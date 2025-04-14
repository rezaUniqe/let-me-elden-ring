"use client";
import { useEffect, useMemo } from "react";
import ItemGalleryGrid from "@/app/[locale]/(with-side-bar)/_components/item-gallery-grid";
import { useAllArmorQuery } from "@/hooks/queries/use-all-armor-query";
import { ApiFilter } from "../../../../../../@types/api-filter";

const ArmorDataContainer = ({
  currentPage,
  limit,
  name,
  setTotalPages,
}: ApiFilter) => {
  const { data: { data: items, total } = { data: [] } } = useAllArmorQuery({
    variables: {
      page: currentPage,
      limit,
      name: !name ? undefined : name,
    },
  });
  useEffect(() => {
    if (total) setTotalPages(total);
  }, [total, setTotalPages]);

  const mappedItems = useMemo(() => {
    return items.map((item) => ({
      ...item,
      effect: item.description ?? "",
    }));
  }, [items]);

  return <ItemGalleryGrid items={mappedItems} />;
};

export default ArmorDataContainer;
