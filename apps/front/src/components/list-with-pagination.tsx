import PaginationWrapper from "@/components/pagination-wrapper";
import { ReactNode } from "react";

interface ListWithPaginationProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number | null;
  limit: number;
  gotoPage: (page: number) => void;
}

const ListWithPagination = ({
  children,
  totalPages,
  gotoPage,
  currentPage,
  limit,
}: ListWithPaginationProps) => {
  return (
    <>
      {children}
      {totalPages && (
        <PaginationWrapper
          currentPage={currentPage}
          totalItems={totalPages}
          pageLimit={limit}
          onPageChange={gotoPage}
        />
      )}
    </>
  );
};

export default ListWithPagination;
