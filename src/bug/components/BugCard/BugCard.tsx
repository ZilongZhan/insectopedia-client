import { Link } from "react-router";
import Button from "../../../components/Button/Button";
import DeleteButtonSvg from "../../../components/shared/DeleteButtonSvg/DeleteButtonSvg";
import StarSvg from "../../../components/shared/StarSvg/StarSvg";
import useBugs from "../../hooks/useBugs/useBugs";
import type { Bug } from "../../types";

import "./BugCard.css";

interface BugCardProps {
  bug: Bug;
  index: number;
}
const BugCard: React.FC<BugCardProps> = ({
  bug: { id, imageUrl, imageAlt, isFavorite, name, scientificName },
  index,
}) => {
  const { deleteEntry } = useBugs();

  const loadingMode = index > 6 ? "lazy" : "eager";

  const handleDelete = (event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    deleteEntry(id);
  };

  return (
    <Link to={`/details/${id}`}>
      <article className="bug">
        <Button
          modifier="delete"
          aria-label={`Delete ${name}`}
          onClick={handleDelete}
        >
          <DeleteButtonSvg aria-hidden={true} />
        </Button>
        <img
          loading={loadingMode}
          className="bug__image"
          src={imageUrl}
          alt={imageAlt}
        />
        <div className="info-container info-container--card">
          <h3 className="bug__name">{name}</h3>
          <i className="bug__latin-name">{scientificName}</i>
          <div className="buttons-container">
            <StarSvg
              modifier="card"
              isFavorite={isFavorite}
              width={20}
              height={19}
            />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BugCard;
