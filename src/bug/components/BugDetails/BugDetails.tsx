import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import useBugs from "../../hooks/useBugs/useBugs";
import DangerSvg from "../../../components/shared/DangerSvg/DangerSvg";
import StarSvg from "../../../components/shared/StarSvg/StarSvg";
import Button from "../../../components/Button/Button";
import type { Bug } from "../../types";

import "./BugDetails.css";

const BugDetails: React.FC = () => {
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
      <section className="bug-details__section">
        <div className="section__bug-names">
          <span className="section__bug-name">{name}</span>
          <i className="section__bug-name section__bug-name--latin">
            {scientificName}
          </i>
        </div>
        <StarSvg isFavorite={isFavorite} />
      </section>
      <img className="bug-image" src={imageUrl} alt={imageAlt} />
      <section className="bug-details__section bug-details__section--vertical">
        <h3 className="section__heading">Classification</h3>
        <p className="section__bug-description">{description}</p>
        <ul className="bug-taxonomy">
          <li className="bug-taxonomy__rank">
            <label className="rank__label">Phylum: </label>
            <span className="rank__name">{phylum}</span>
          </li>
          <li className="rank">
            <label className="rank__label">Class: </label>
            <span className="rank__name">{className}</span>
          </li>
          <li className="taxonomic-ranks__rank">
            <label className="rank__label">Order: </label>
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
