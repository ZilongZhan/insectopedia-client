import useApp from "../../../hooks/useApp";
import Loader from "../../../ui/components/Loader/Loader";
import type { Bug } from "../../types";
import BugCard from "../BugCard/BugCard";

import "./BugsList.css";

interface BugsListProps {
  bugs: Bug[];
}

const BugsList: React.FC<BugsListProps> = ({ bugs }) => {
  const { isLoading } = useApp();
  const hasBugs = bugs.length > 0;

  if (isLoading) {
    return <Loader />;
  }

  return hasBugs ? (
    <ul className="bugs">
      {bugs.map((bug, index) => (
        <li key={bug.id}>
          <BugCard bug={bug} index={index} />
        </li>
      ))}
    </ul>
  ) : (
    <span className="no-bugs-message">
      There are no bugs currently... try adding some!
    </span>
  );
};

export default BugsList;
