"use client";
import { Suspense, useState } from "react";
import PaginationWrapper from "@/components/pagination-wrapper";
import { useItemsApiFiltersWithPagination } from "@/hooks/use-items-managment";
import ItemTypeSelect from "@/app/[locale]/(with-side-bar)/_components/item-type-select";
import ItemsGridByTypeContainer from "@/app/[locale]/(with-side-bar)/_components/items-grid-by-type-container";
import ItemsSearchBar from "@/app/[locale]/(with-side-bar)/_components/items-search-bar";
import ItemGridShimmer from "@/components/item-grid-shimmer";

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
  } = useItemsApiFiltersWithPagination();

  const [itemType, setItemType] = useState("items");

  return (
    <div className="container flex flex-col gap-6 px-6 pb-6 mx-auto">
      <div className={"flex flex-row justify-between gap-5 items-center"}>
        <ItemTypeSelect
          onSelect={async (type) => {
            gotoPage(1);
            await setSearchValue(null);
            setItemType(type);
          }}
          className="w-[120px]"
        />
        <ItemsSearchBar
          value={searchValue}
          onValueChange={setSearchValue}
          className="w-[250px]"
        />
      </div>

      <Suspense fallback={<ItemGridShimmer />}>
        <ItemsGridByTypeContainer
          type={itemType}
          setTotalPages={setTotalPages}
          currentPage={currentPage}
          limit={limit}
          name={debouncedName}
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
