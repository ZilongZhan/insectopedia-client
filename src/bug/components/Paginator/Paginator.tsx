import type { BugsInfo } from "../../types";
import usePaginator from "../../hooks/usePaginator/usePaginator";

import "./Paginator.css";

interface PaginatorProps {
  pageNumber: number;
  bugsInfo: BugsInfo;
}

const Paginator: React.FC<PaginatorProps> = ({
  pageNumber,
  bugsInfo: { bugs, bugsTotal },
}) => {
  const bugsPerPage = bugs.length;
  const pagesTotal = Math.ceil(bugsTotal / bugsPerPage);

  const { renderIndicator, renderLink } = usePaginator(pagesTotal);

  const previousPage = pageNumber - 1;
  const nextPage = pageNumber + 1;

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="paginator">
      {renderLink(previousPage, "<")}
      <ul className="paginator__list">
        {renderIndicator(previousPage)}
        {renderIndicator(pageNumber, true)}
        {renderIndicator(nextPage)}
      </ul>
      {renderLink(nextPage, ">")}
    </div>
  );
};

export default Paginator;
