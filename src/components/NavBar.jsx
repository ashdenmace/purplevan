import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="nav-container">
        <Link className="nav-route" to="/">
          Home{" "}
        </Link>
        <Link className="nav-route" to="/photos">
          Photos{" "}
        </Link>
        <Link className="nav-route" to="/history">
          Mechanical History{" "}
        </Link>
        <Link className="nav-route" to="/contact">
          Contact{" "}
        </Link>
      </div>
    </>
  );
}

export default NavBar;
