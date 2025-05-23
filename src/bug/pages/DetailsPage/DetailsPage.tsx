import { Link } from "react-router";
import StinkBugSvg from "../../../components/shared/StinkBugSvg/StinkBugSvg";
import BugDetails from "../../components/BugDetails/BugDetails";
import GoBackSvg from "../../../components/shared/GoBackSvg/GoBackSvg";

import "./DetailsPage.css";

const DetailsPage: React.FC = () => {
  return (
    <>
      <div className="title-container">
        <StinkBugSvg className="title-container__icon" />
        <h2 className="title-container__page-title">Details</h2>
      </div>
      <Link to={"/home"} className="go-back" aria-label="Go back">
        <GoBackSvg aria-hidden={true} />
        <span>Back</span>
      </Link>
      <BugDetails />
    </>
  );
};

export default DetailsPage;
