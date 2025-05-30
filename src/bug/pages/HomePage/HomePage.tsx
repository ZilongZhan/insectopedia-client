import { useEffect } from "react";
import { useSearchParams } from "react-router";
import BugsList from "../../components/BugsList/BugsList";
import useBugs from "../../hooks/useBugs/useBugs";
import Paginator from "../../components/Paginator/Paginator";
import GrasshopperSvg from "../../../ui/components/shared/GrasshopperSvg/GrasshopperSvg";

import "./HomePage.css";

const HomePage: React.FC = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const {
    bugsInfo: { bugs, bugsTotal },
    loadBugsInfo: renderBugsInfo,
  } = useBugs();
  const [searchParams] = useSearchParams();

  const pageNumber = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    renderBugsInfo(pageNumber);
  }, [renderBugsInfo, pageNumber]);

  return (
    <>
      <div className="title-container">
        <GrasshopperSvg className="title-container__icon" aria-hidden={true} />
        <h2 className="title-container__page-title">Home</h2>
      </div>
      <div className="bugs-total">
        <span className="bugs-total__label">Bugs Total: </span>
        <span>{`${bugs.length} of ${bugsTotal}`}</span>
      </div>
      <BugsList bugs={bugs} />
      <Paginator pageNumber={pageNumber} bugsTotal={bugsTotal} />
    </>
  );
};

export default HomePage;
