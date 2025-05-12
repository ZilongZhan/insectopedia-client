import type { Bug } from "../../types";
import BugCard from "../BugCard/BugCard";

import "./BugsList.css";

interface BugsListProps {
  bugs: Bug[];
}

const BugsList: React.FC<BugsListProps> = ({ bugs }) => {
  return (
    <ul className="bugs">
      {bugs.map((bug) => (
        <li key={bug.id}>
          <BugCard bug={bug} />
        </li>
      ))}
    </ul>
  );
};

export default BugsList;
