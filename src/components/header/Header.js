import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import "./Header.css";
function Header() {

  return (
    <div className="header">
      <div className="header-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="header_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="pics"
          />
        </Link>
      </div>
      <div className="header-right">
        <div className="links">
          <Link to="/movies/popular" style={{ textDecoration: "none" }}>
            <span className="link">popular</span>
          </Link>
          <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
            <span className="link">Top Rated</span>
          </Link>
          <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
            <span className="link">Upcoming</span>
          </Link>
        </div>
        <Link to="/profile" className="user">
          <FontAwesomeIcon className="user-icon" icon={faUser} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
