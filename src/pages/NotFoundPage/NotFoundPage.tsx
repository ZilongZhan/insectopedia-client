import NotFoundSvg from "../../components/shared/NotFoundSvg/NotFoundSvg";

import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <NotFoundSvg className="not-found-page__icon" width={120} height={69} />
      <span className="not-found-page__message">
        The page you're looking for doesn't exist...
      </span>
    </div>
  );
};

export default NotFoundPage;
