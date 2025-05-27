import { NavLink } from "react-router";
import GrasshopperSvg from "../shared/GrasshopperSvg/GrasshopperSvg";
import SnailSvg from "../shared/SnailSvg/SnailSvg";

import "./Navigator.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigator">
      <ul className="navigator__links">
        <li>
          <NavLink className="navigator__link" to={"/report"}>
            <SnailSvg
              className="navigator__link-icon"
              aria-hidden={true}
              width={45}
              height={22}
            />
            <span className="navigator__link-label">Report</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="navigator__link" to={"/home"}>
            <GrasshopperSvg
              className="navigator__link-icon"
              aria-hidden={true}
              width={252}
              height={159}
            />
            <span className="navigator__link-label">Home</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
