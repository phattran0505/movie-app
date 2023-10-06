import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer_content">
        <div className="col">
          <Link className="footer_text" to="/footer">
            Frequently asked questions
          </Link>
          <Link className="footer_text" to="/footer">
            Relations with investors
          </Link>
          <Link className="footer_text" to="/footer">
            Privacy
          </Link>
          <Link className="footer_text" to="/footer">
            Speed ​​test
          </Link>
        </div>
        <div className="col">
          <Link className="footer_text" to="/footer">
            Help Center
          </Link>
          <Link className="footer_text" to="/footer">
            Job
          </Link>
          <Link className="footer_text" to="/footer">
            Cookie preferences
          </Link>
          <Link className="footer_text" to="/footer">
            policy notification
          </Link>
        </div>
        <div className="col">
          <Link className="footer_text" to="/footer">
            Account
          </Link>
          <Link className="footer_text" to="/footer">
            Ways to view
          </Link>
          <Link className="footer_text" to="/footer">
            Business information
          </Link>
          <Link className="footer_text" to="/footer">
            Only available on Netflix
          </Link>
        </div>
        <div className="col">
          <Link className="footer_text" to="/footer">
            Multimedia center
          </Link>
          <Link className="footer_text" to="/footer">
            terms of use
          </Link>
          <Link className="footer_text" to="/footer">
            Contact us
          </Link>
        </div>
      </div>

      <Link to="/">
        <img
          className="footer_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          alt="no-logo"
        />
      </Link>
    </footer>
  );
}

export default Footer;
