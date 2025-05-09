import NotFoundSvg from "../../components/shared/NotFoundSvg/NotFoundSvg";

import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <>
      <NotFoundSvg className="not-found-icon" width={120} height={69} />
      <span className="not-found-message">
        The page you're looking for doesn't exist...
      </span>
    </>
  );
};

export default NotFoundPage;
