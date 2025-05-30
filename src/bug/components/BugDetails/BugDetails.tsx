import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import useBugs from "../../hooks/useBugs/useBugs";
import type { Bug } from "../../types";
import useApp from "../../../hooks/useApp";
import Loader from "../../../ui/components/Loader/Loader";
import StarSvg from "../../../ui/components/shared/StarSvg/StarSvg";
import DangerSvg from "../../../ui/components/shared/DangerSvg/DangerSvg";
import Button from "../../../ui/components/Button/Button";

import "./BugDetails.css";

const BugDetails: React.FC = () => {
  const { isLoading } = useApp();
  const { loadBugDetails, deleteEntry, toggleIsFavorite } = useBugs();
  const { bugId } = useParams<{ bugId: string }>();
  const [bug, setBug] = useState<Bug | null>(null);

  useEffect(() => {
    if (!bugId) {
      return;
    }

    (async (): Promise<void> => {
      const bug = await loadBugDetails(bugId);

      setBug(bug);
    })();
  }, [bugId, loadBugDetails]);

  if (isLoading) {
    return <Loader />;
  }

  if (!bug || !bugId) {
    return <span>Bug not available</span>;
  }

  const {
    id,
    description,
    imageAlt,
    imageUrl,
    isDangerous,
    isFavorite,
    name,
    scientificName,
    taxonomy,
  } = bug;
  const [phylum, className, order] = taxonomy;

  const isFavoriteButtonLabel = isFavorite
    ? `Remove ${name} from favorites`
    : `Add ${name} to favorites`;

  const handleDelete = (): void => {
    deleteEntry(id);
  };

  const handleToggleIsFavorite = async (): Promise<void> => {
    const bug = await toggleIsFavorite(id);

    setBug(bug);
  };

  return (
    <article className="bug-details">
      <section className="bug-details__section bug-details__section--names">
        <div className="section__bug-names">
          <h3 className="section__bug-name">{name}</h3>
          <i className="section__bug-name section__bug-name--latin">
            {scientificName}
          </i>
        </div>
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
      </section>
      <img
        className="bug-image"
        src={imageUrl}
        alt={imageAlt}
        width={294}
        height={165}
      />
      <section className="bug-details__section bug-details__section--vertical">
        <h3 className="section__heading">Classification</h3>
        <p className="section__bug-description">{description}</p>
        <ul className="bug-taxonomy">
          <li className="bug-taxonomy__rank">
            <span className="rank__label">Phylum: </span>
            <span className="rank__name">{phylum}</span>
          </li>
          <li className="rank">
            <span className="rank__label">Class: </span>
            <span className="rank__name">{className}</span>
          </li>
          <li className="taxonomic-ranks__rank">
            <span className="rank__label">Order: </span>
            <span className="rank__name">{order}</span>
          </li>
        </ul>
      </section>
      {isDangerous && (
        <section className="bug-details__section bug-details__section--danger">
          <DangerSvg />
          <strong>Potentially dangerous</strong>
        </section>
      )}
      <Link className="bug-details__update-link" to={`/update/${id}`}>
        Update entry
      </Link>
      <Button action={handleDelete} modifier="delete--big">
        Delete entry
      </Button>
    </article>
  );
};

export default BugDetails;
