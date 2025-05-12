import GrasshopperSvg from "../../../components/shared/GrasshopperSvg/GrasshopperSvg";
import BugsList from "../../components/BugsList/BugsList";
import type { Bug } from "../../types";

import "./HomePage.css";

const HomePage: React.FC = () => {
  const bugs: Bug[] = [];
  const bugsTotal = 0;

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
    </>
  );
};

export default HomePage;
