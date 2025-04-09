import { parseAsInteger, useQueryState } from "nuqs";
import { useCallback } from "react";

export function usePaginationFromParams() {
  const [currentPage, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1),
  );
  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsInteger.withDefault(6),
  );

  const gotoPage = useCallback(
    (page: number) => {
      setPage(page);
    },
    [setPage],
  );
  return {
    currentPage,
    gotoPage: gotoPage,
    limit,
    setLimit,
  };
}
