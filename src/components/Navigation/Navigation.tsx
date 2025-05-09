import { NavLink } from "react-router";
import GrasshopperSvg from "../shared/GrasshopperSvg/GrasshopperSvg";
import "./Navigator.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigator">
      <NavLink className="navigator__link" to={"/home"}>
        <GrasshopperSvg
          className="navigator__link-icon"
          width={252}
          height={158.88}
        />
        <span className="navigator__link-label">Home</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
