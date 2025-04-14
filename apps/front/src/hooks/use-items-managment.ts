import { useCallback, useState } from "react";
import { useQueryState, parseAsString } from "nuqs";
import { usePaginationFromParams } from "@/hooks/use-pagination-from-params";
import { useDebouncedInput } from "@/hooks/use-debounced-input";

export const useItemsApiFiltersWithPagination = () => {
  const [inputValue, setInputValue] = useQueryState(
    "name",
    parseAsString.withDefault(""),
  );

  const { gotoPage, currentPage, limit } = usePaginationFromParams();
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const setPageToFirstPage = useCallback(() => {
    gotoPage(1);
  }, [gotoPage]);

  const debouncedName = useDebouncedInput({
    valueToDebounce: inputValue,
    onAboutToDebounce: setPageToFirstPage,
  });

  return {
    // Search
    searchValue: inputValue,
    setSearchValue: setInputValue,
    debouncedName,

    // Pagination
    currentPage,
    totalPages,
    limit,
    gotoPage,
    setTotalPages,
  };
};
