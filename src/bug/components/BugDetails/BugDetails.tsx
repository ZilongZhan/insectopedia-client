import { useNavigate, useParams } from "react-router";
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
  const { loadBugDetails, deleteEntry } = useBugs();
  const { bugId } = useParams<{ bugId: string }>();
  const [bug, setBug] = useState<Bug | null>(null);
  const navigate = useNavigate();

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

  const handleDelete = (): void => {
    deleteEntry(id);

    navigate("/home");
  };

  const [phylum, className, order] = taxonomy;

  return (
    <article className="bug-details">
      <section className="bug-details__section bug-details__section--names">
        <div className="section__bug-names">
          <h3 className="section__bug-name">{name}</h3>
          <i className="section__bug-name section__bug-name--latin">
            {scientificName}
          </i>
        </div>
        <Button modifier="favorite">
          <StarSvg isFavorite={isFavorite} />
        </Button>
      </section>
      <img className="bug-image" src={imageUrl} alt={imageAlt} />
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
      <Button modifier="update">Update entry</Button>
      <Button action={handleDelete} modifier="delete--big">
        Delete entry
      </Button>
    </article>
  );
};

export default BugDetails;
