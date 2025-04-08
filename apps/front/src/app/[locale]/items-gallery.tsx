"use client";

import { useAllItemsQuery } from "@/hooks/queries/use-get-all-books-query";
import ItemGalleryList from "@/app/[locale]/_components/item-gallery-list";
import { PaginationComponent } from "@workspace/ui/components/dynamic-pagination";

export default function ItemGalleryContainer() {
  const { data: { data: items, count } = { data: [] } } = useAllItemsQuery();

  return (
    <div className="container mx-auto py-8 px-4">
      <ItemGalleryList items={items} />
      {count && (
        <PaginationComponent
          currentPage={1}
          totalPages={count}
          onPageChange={() => {}}
        />
      )}
    </div>
  );
}
