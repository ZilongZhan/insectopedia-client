import type { UsePaginatorStructure } from "../types";

const usePaginator = (pagesTotal: number): UsePaginatorStructure => {
  const doesPageExist = (pageNumber: number): boolean => {
    return pageNumber >= 1 && pageNumber <= pagesTotal;
  };

  return {
    doesPageExist,
  };
};

export default usePaginator;
