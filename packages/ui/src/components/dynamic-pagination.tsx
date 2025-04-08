import { useMemo } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./pagination";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    maxDisplayedPages?: number;
    className?: string;
}

export function PaginationComponent({
                                        currentPage,
                                        totalPages,
                                        onPageChange,
                                        maxDisplayedPages = 5,
                                        className = "",
                                    }: PaginationProps) {
    const pageNumbers = useMemo(() => {
        const pages = [];

        if (totalPages > 0) {
            pages.push(1);
        }

        let rangeStart = Math.max(2, currentPage - Math.floor(maxDisplayedPages / 2));
        let rangeEnd = Math.min(totalPages - 1, rangeStart + maxDisplayedPages - 3);

        if (rangeEnd < 2) rangeEnd = 2;
        if (rangeStart > totalPages - 2) rangeStart = totalPages - 2;

        if (rangeStart > 2) {
            pages.push("ellipsis-start");
        }

        // Add middle pages
        for (let i = rangeStart; i <= rangeEnd; i++) {
            if (i > 1 && i < totalPages) {
                pages.push(i);
            }
        }

        // Add ellipsis before last page if needed
        if (rangeEnd < totalPages - 1) {
            pages.push("ellipsis-end");
        }

        // Always show last page if more than one page
        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    }, [currentPage, totalPages, maxDisplayedPages]);

    const handlePageClick = (page: number) => (e: React.MouseEvent) => {
        e.preventDefault();
        onPageChange(page);
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <Pagination className={className}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        size={"sm"}
                        href="#"
                        onClick={handlePageClick(currentPage - 1)}
                        className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>

                {pageNumbers.map((page, i) => {
                    if (page === "ellipsis-start" || page === "ellipsis-end") {
                        return (
                            <PaginationItem key={page}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }

                    return (
                        <PaginationItem key={`page-${page}`}>
                            <PaginationLink
                                size={"sm"}
                                href="#"
                                isActive={page === currentPage}
                                onClick={handlePageClick(Number(page))}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                <PaginationItem>
                    <PaginationNext
                        size={"sm"}
                        href="#"
                        onClick={handlePageClick(currentPage + 1)}
                        className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}