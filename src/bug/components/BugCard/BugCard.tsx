import { Link } from "react-router";
import useBugs from "../../hooks/useBugs/useBugs";
import type { Bug } from "../../types";
import StarSvg from "../../../ui/components/shared/StarSvg/StarSvg";
import Button from "../../../ui/components/Button/Button";
import DeleteButtonSvg from "../../../ui/components/shared/DeleteButtonSvg/DeleteButtonSvg";
import EditSvg from "../../../ui/components/shared/EditSvg/EditSvg";

import "./BugCard.css";

interface BugCardProps {
  bug: Bug;
  index: number;
}
const BugCard: React.FC<BugCardProps> = ({
  bug: { id, imageUrl, imageAlt, isFavorite, name, scientificName },
  index,
}) => {
  const { deleteEntry, toggleIsFavorite } = useBugs();

  const loadingMode = index > 6 ? "lazy" : "eager";
  const isFavoriteButtonLabel = isFavorite
    ? `Remove ${name} from favorites`
    : `Add ${name} to favorites`;

  const handleDelete = (): void => {
    deleteEntry(id);
  };

  const handleToggleIsFavorite = (): void => {
    toggleIsFavorite(id);
  };

  return (
    <div className="bug-wrapper">
      <article className="bug">
        <Link className="bug__details-link" to={`/details/${id}`}>
          <img
            loading={loadingMode}
            className="bug__image"
            src={imageUrl}
            alt={imageAlt}
          />
          <div className="info-container info-container--card">
            <h3 className="bug__name">{name}</h3>
            <i className="bug__latin-name">{scientificName}</i>
          </div>
        </Link>
        <div className="buttons-container">
          <Link
            className="bug__update-link"
            to={`/update/${id}`}
            aria-label={`Edit ${name} entry`}
          >
            <EditSvg aria-hidden={true} />
          </Link>
          <Button
            modifier="favorite"
            aria-label={isFavoriteButtonLabel}
            action={handleToggleIsFavorite}
          >
            <StarSvg
              isFavorite={isFavorite}
              aria-hidden={true}
              width={20}
              height={19}
            />
          </Button>
        </div>
      </article>
      <Button
        modifier="delete"
        aria-label={`Delete ${name}`}
        action={handleDelete}
      >
        <DeleteButtonSvg aria-hidden={true} />
      </Button>
    </div>
  );
};

export default BugCard;
