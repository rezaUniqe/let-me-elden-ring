"use client";
import { Suspense } from "react";
import ItemGalleryShimmer from "./_components/item-gallery-shimmer";
import ItemsSearchBar from "./_components/items-search-bar";
import PaginationWrapper from "@/components/pagination-wrapper";
import { useItemsState } from "@/hooks/use-items-managment";
import ItemsDataContainer from "./_components/items-data-container";

export default function Page() {
  const {
    searchValue,
    setSearchValue,
    debouncedName,
    currentPage,
    totalPages,
    limit,
    gotoPage,
    setTotalPages,
  } = useItemsState();

  return (
    <div className="container flex flex-col gap-6 px-6 pb-6 mx-auto">
      <ItemsSearchBar
        value={searchValue}
        onValueChange={setSearchValue}
        className="w-[300px]"
      />

      <Suspense fallback={<ItemGalleryShimmer />}>
        <ItemsDataContainer
          currentPage={currentPage}
          limit={limit}
          name={debouncedName}
          setTotalPages={setTotalPages}
        />
      </Suspense>

      {totalPages && (
        <PaginationWrapper
          currentPage={currentPage}
          totalItems={totalPages}
          pageLimit={limit}
          onPageChange={gotoPage}
        />
      )}
    </div>
  );
}
