import { useEffect } from "react";
import { useSearchParams } from "react-router";
import GrasshopperSvg from "../../../components/shared/GrasshopperSvg/GrasshopperSvg";
import BugsList from "../../components/BugsList/BugsList";
import useBugs from "../../hooks/useBugs/useBugs";
import Paginator from "../../components/Paginator/Paginator";

import "./HomePage.css";

const HomePage: React.FC = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const {
    bugsInfo: { bugs, bugsTotal },
    renderBugsInfo,
  } = useBugs();
  const [searchParams] = useSearchParams();

  const pageNumber = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    renderBugsInfo(pageNumber);
  }, [renderBugsInfo, pageNumber]);

  return (
    <>
      <div className="title-container">
        <GrasshopperSvg
          className="title-container__icon"
          width={35}
          height={21}
        />
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
