import usePaginator from "../../../../hooks/usePaginator/usePaginator";

export interface PaginatorIndicatorProps {
  pagesTotal: number;
  pageNumber: number;
  isCurrent?: boolean;
}

const PaginatorIndicator: React.FC<PaginatorIndicatorProps> = ({
  pagesTotal,
  pageNumber,
  isCurrent = false,
}) => {
  const { doesPageExist } = usePaginator(pagesTotal);

  const pageExists = doesPageExist(pageNumber);
  const ariaCurrent = isCurrent ? "page" : undefined;
  const label = pageExists ? pageNumber : "-";
  const modifier = isCurrent ? " paginator__indicator--active" : "";

  return (
    <li
      className={`paginator__indicator${modifier}`}
      aria-current={ariaCurrent}
    >
      {label}
    </li>
  );
};

export default PaginatorIndicator;
