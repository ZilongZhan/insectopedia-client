import type { ReactElement } from "react";
import type { UsePaginatorStructure } from "../types";
import { Link } from "react-router";

const usePaginator = (pagesTotal: number): UsePaginatorStructure => {
  const doesPageExist = (pageNumber: number): boolean => {
    return pageNumber >= 1 && pageNumber <= pagesTotal;
  };

  const renderLink = (
    pageNumber: number,
    label: string,
  ): ReactElement | undefined => {
    const pageExists = doesPageExist(pageNumber);
    const modifier = pageExists ? "" : " paginator__link--disabled";

    return (
      <Link
        className={`paginator__link${modifier}`}
        to={`/home?page=${pageNumber}`}
        aria-label={`Go to page ${pageNumber}`}
      >
        {label}
      </Link>
    );
  };

  const renderIndicator = (
    pageNumber: number,
    isCurrent = false,
  ): ReactElement | undefined => {
    const pageExists = doesPageExist(pageNumber);
    const ariaLabel = isCurrent ? "Current page" : undefined;
    const label = pageExists ? pageNumber : "-";
    const modifier = isCurrent ? " paginator__indicator--active" : "";

    return (
      <li className={`paginator__indicator${modifier}`} aria-label={ariaLabel}>
        {label}
      </li>
    );
  };

  return {
    renderLink,
    renderIndicator,
  };
};

export default usePaginator;
