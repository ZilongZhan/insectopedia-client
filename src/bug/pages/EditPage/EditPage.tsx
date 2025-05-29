import { useEffect, useState } from "react";
import SnailSvg from "../../../ui/components/shared/SnailSvg/SnailSvg";
import BugForm from "../../components/BugForm/BugForm";
import { Link, useParams } from "react-router";
import type { Bug, BugFormData } from "../../types";
import useBugs from "../../hooks/useBugs/useBugs";
import Loader from "../../../ui/components/Loader/Loader";
import useApp from "../../../hooks/useApp";
import GoBackSvg from "../../../ui/components/shared/GoBackSvg/GoBackSvg";

const EditPage: React.FC = () => {
  window.scrollTo({ top: 0, behavior: "instant" });

  const { isLoading } = useApp();
  const { loadBugDetails } = useBugs();
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

  const [phylum, className, order] = bug.taxonomy;
  const bugFormData: BugFormData = {
    ...bug,
    phylum,
    className,
    order,
  };

  return (
    <>
      <div className="title-container">
        <SnailSvg className="title-container__icon" aria-hidden={true} />
        <h2 className="title-container__page-title">Update report</h2>
      </div>
      <Link to={`/details/${bugId}`} className="go-back" aria-label="Go back">
        <GoBackSvg aria-hidden={true} />
        <span>Back</span>
      </Link>
      <BugForm id={bugId} bugFormData={bugFormData} />
    </>
  );
};

export default EditPage;
