import { Link } from "react-router";
import BugDetails from "../../components/BugDetails/BugDetails";

import "./DetailsPage.css";
import StinkBugSvg from "../../../ui/components/shared/StinkBugSvg/StinkBugSvg";
import GoBackSvg from "../../../ui/components/shared/GoBackSvg/GoBackSvg";

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
