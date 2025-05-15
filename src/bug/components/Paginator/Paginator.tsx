import type { BugsInfo } from "../../types";
import PaginatorIndicator, {
  type PaginatorIndicatorProps,
} from "./subcomponents/PaginatorIndicator/PaginatorIndicator";
import PaginatorLink, {
  type PaginatorLinkProps,
} from "./subcomponents/PaginatorLink/PaginatorLink";

import "./Paginator.css";

interface PaginatorProps {
  pageNumber: number;
  bugsInfo: BugsInfo;
}

interface PaginatorSubcomponents {
  Indicator: React.FC<PaginatorIndicatorProps>;
  Link: React.FC<PaginatorLinkProps>;
}

const Paginator: React.FC<PaginatorProps> & PaginatorSubcomponents = ({
  pageNumber,
  bugsInfo: { bugs, bugsTotal },
}) => {
  const bugsPerPage = bugs.length;
  const pagesTotal = Math.ceil(bugsTotal / bugsPerPage);

  const previousPage = pageNumber - 1;
  const nextPage = pageNumber + 1;

  return (
    <div className="paginator">
      <Paginator.Link
        pageNumber={previousPage}
        pagesTotal={pagesTotal}
        label="<"
      />

      <ul className="paginator__list">
        <Paginator.Indicator
          pageNumber={previousPage}
          pagesTotal={pagesTotal}
        />
        <Paginator.Indicator
          pageNumber={pageNumber}
          pagesTotal={pagesTotal}
          isCurrent={true}
        />
        <Paginator.Indicator pageNumber={nextPage} pagesTotal={pagesTotal} />
      </ul>
      <Paginator.Link pageNumber={nextPage} pagesTotal={pagesTotal} label=">" />
    </div>
  );
};

Paginator.Link = PaginatorLink;
Paginator.Indicator = PaginatorIndicator;

export default Paginator;
