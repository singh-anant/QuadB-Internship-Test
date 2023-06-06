import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">MovieEscape</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link className=".link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className=".link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className=".link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
