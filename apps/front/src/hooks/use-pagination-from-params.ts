import { parseAsInteger, useQueryState } from "nuqs";

export function usePaginationFromParams() {
  const [currentPage, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1),
  );
  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsInteger.withDefault(6),
  );
  return {
    currentPage,
    gotoPage: setPage,
    limit,
    setLimit,
  };
}
