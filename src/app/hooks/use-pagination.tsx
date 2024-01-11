import { useState } from "react";

type PaginationReturn = {
  pageSize: number;
  currentPage: number;
  totalNumPages: number;
  setPage: (index: number) => void;
};

type PaginationArgs = {
  numItems: number;
  pageSize: number;
};

export function usePagination({
  numItems,
  pageSize,
}: PaginationArgs): PaginationReturn {
  const [currentPage, setCurrentPage] = useState(0);
  const totalNumPages = Math.ceil(numItems / pageSize);

  const setPage = (page: number) => {
    if (page < 0 || page + 1 > totalNumPages) {
      return;
    }
    setCurrentPage(page);
  };

  return { pageSize, currentPage, totalNumPages, setPage };
}
