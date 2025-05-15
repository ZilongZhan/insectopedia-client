import { Link } from "react-router";
import usePaginator from "../../../../hooks/usePaginator/usePaginator";

export interface PaginatorLinkProps {
  pagesTotal: number;
  pageNumber: number;
  label: string;
}

const PaginatorLink: React.FC<PaginatorLinkProps> = ({
  pagesTotal,
  pageNumber,
  label,
}) => {
  const { doesPageExist } = usePaginator(pagesTotal);

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

export default PaginatorLink;
