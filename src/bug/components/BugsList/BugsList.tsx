import type { Bug } from "../../types";
import BugCard from "../BugCard/BugCard";

import "./BugsList.css";

interface BugsListProps {
  bugs: Bug[];
}

const BugsList: React.FC<BugsListProps> = ({ bugs }) => {
  const hasBugs = bugs.length > 0;

  return hasBugs ? (
    <ul className="bugs">
      {bugs.map((bug) => (
        <li key={bug.id}>
          <BugCard bug={bug} />
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
