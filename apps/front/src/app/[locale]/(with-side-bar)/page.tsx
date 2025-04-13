"use client";
import { Suspense, useState } from "react";
import ItemGridShimmer from "@/components/item-grid-shimmer";
import ItemsSearchBar from "@/app/[locale]/(with-side-bar)/_components/items-search-bar";
import PaginationWrapper from "@/components/pagination-wrapper";
import { useItemsState } from "@/hooks/use-items-managment";
import ItemsDataContainer from "@/app/[locale]/(with-side-bar)/_components/items/items-data-container";
import ItemTypeSelect from "@/app/[locale]/(with-side-bar)/_components/item-type-select";
import ArmorDataContainer from "@/app/[locale]/(with-side-bar)/_components/armors/armors-data-container";
import ShieldsDataContainer from "./_components/shields/shields-data-container";

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

  const [itemType, setItemType] = useState("items");

  return (
    <div className="container flex flex-col gap-6 px-6 pb-6 mx-auto">
      <div className={"flex flex-row justify-between gap-5 items-center"}>
        <ItemTypeSelect onSelect={setItemType} className="w-[120px]" />
        <ItemsSearchBar
          value={searchValue}
          onValueChange={setSearchValue}
          className="w-[250px]"
        />
      </div>

      <Suspense fallback={<ItemGridShimmer />}>
        {itemType === "items" ? (
          <ItemsDataContainer
            currentPage={currentPage}
            limit={limit}
            name={debouncedName}
            setTotalPages={setTotalPages}
          />
        ) : itemType === "shields" ? (
          <ShieldsDataContainer
            currentPage={currentPage}
            limit={limit}
            name={debouncedName}
            setTotalPages={setTotalPages}
          />
        ) : (
          <ArmorDataContainer
            currentPage={currentPage}
            limit={limit}
            name={debouncedName}
            setTotalPages={setTotalPages}
          />
        )}
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
