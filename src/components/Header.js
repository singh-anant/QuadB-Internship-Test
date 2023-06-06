import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">MovieEscape</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "#388087",
              }}
              className=".link"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className=".link"
              to="/about"
              style={{
                textDecoration: "none",
                color: "#388087",
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className=".link"
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#388087",
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
