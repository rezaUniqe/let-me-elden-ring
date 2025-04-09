// components/PaginationWrapper.tsx
"use client";
import { PaginationComponent } from "@workspace/ui/components/dynamic-pagination";

interface PaginationWrapperProps {
  currentPage: number;
  totalItems: number;
  pageLimit: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const PaginationWrapper = ({
  currentPage,
  totalItems,
  pageLimit,
  onPageChange,
  className = "",
}: PaginationWrapperProps) => {
  if (!totalItems) return null;

  return (
    <div className={className}>
      <PaginationComponent
        currentPage={currentPage}
        totalItems={totalItems}
        pageLimit={pageLimit}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationWrapper;
