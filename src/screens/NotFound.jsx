import { Link, useLocation } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  const location = useLocation();
  const badRoute = location.pathname;

  return (
    <div className="not-found-container">
      <h3 className="not-found-heading">
        The route "{badRoute}" does not exist.
      </h3>
      <Link to="/">
        <button className="not-found-button">Go Home</button>
      </Link>
      <img
        className="not-found-image"
        src="https://purplevan-photos.s3.us-east-1.amazonaws.com/current%2FFB_IMG_1720133851098.jpg"
        alt="Purple Haze the Van"
      />
    </div>
  );
}

export default NotFound;
