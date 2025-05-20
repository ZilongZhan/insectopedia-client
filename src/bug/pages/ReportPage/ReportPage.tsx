import SnailSvg from "../../../components/shared/SnailSvg/SnailSvg";
import BugForm from "../../components/BugForm/BugForm";

const ReportPage: React.FC = () => {
  window.scrollTo({ top: 0, behavior: "instant" });

  return (
    <>
      <div className="title-container">
        <SnailSvg className="title-container__icon" aria-hidden={true} />
        <h2 className="title-container__page-title">New report</h2>
      </div>
      <BugForm />
    </>
  );
};

export default ReportPage;
