import StarSvg from "../../../components/shared/StarSvg/StarSvg";
import type { Bug } from "../../types";

import "./BugCard.css";

interface BugCardProps {
  bug: Bug;
  index: number;
}
const BugCard: React.FC<BugCardProps> = ({
  bug: { imageUrl, imageAlt, isFavorite, name, scientificName },
  index,
}) => {
  const modifier = isFavorite ? " favorite-icon--true" : "";
  const loadingMode = index > 6 ? "lazy" : "eager";

  return (
    <article className="bug">
      <img
        loading={loadingMode}
        className="bug__image"
        src={imageUrl}
        alt={imageAlt}
        height={115}
        width={75}
      />
      <div className="info-container info-container--card">
        <h3 className="bug__name">{name}</h3>
        <i className="bug__latin-name">{scientificName}</i>
        <div className="buttons-container">
          <StarSvg
            className={`favorite-icon${modifier}`}
            width={20}
            height={19}
          />
        </div>
      </div>
    </article>
  );
};

export default BugCard;
