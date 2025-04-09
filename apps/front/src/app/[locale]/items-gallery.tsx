"use client";

import { useAllItemsQuery } from "@/hooks/queries/use-get-all-books-query";
import ItemGalleryList from "@/app/[locale]/_components/item-gallery-list";
import { PaginationComponent } from "@workspace/ui/components/dynamic-pagination";
import { usePagination } from "@/hooks/use-pagination";

export default function ItemGalleryContainer() {
  const { gotoPage, currentPage, limit } = usePagination();

  const { data: { data: items, total } = { data: [] } } = useAllItemsQuery({
    variables: {
      page: currentPage,
      limit,
    },
  });
  return (
    <div className="container grid gap-12 mx-auto py-8 px-4">
      <ItemGalleryList items={items} />
      {total && (
        <PaginationComponent
          currentPage={currentPage}
          totalItems={total}
          pageLimit={limit}
          onPageChange={gotoPage}
        />
      )}
    </div>
  );
}
