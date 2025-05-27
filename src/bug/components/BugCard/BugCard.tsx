import { Link } from "react-router";
import useBugs from "../../hooks/useBugs/useBugs";
import type { Bug } from "../../types";
import StarSvg from "../../../ui/components/shared/StarSvg/StarSvg";
import Button from "../../../ui/components/Button/Button";
import DeleteButtonSvg from "../../../ui/components/shared/DeleteButtonSvg/DeleteButtonSvg";

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
    <div className="bug-wrapper">
      <Link to={`/details/${id}`}>
        <article className="bug">
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
      <Button
        modifier="delete"
        aria-label={`Delete ${name}`}
        onClick={handleDelete}
      >
        <DeleteButtonSvg aria-hidden={true} />
      </Button>
    </div>
  );
};

export default BugCard;
