import { Link } from "react-router-dom";
import { FaCarAlt, FaShoppingBasket } from "react-icons/fa";
import "./header.css";

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <FaCarAlt className="header__logo-icon" />
        <span className="header__logo-text">Rental Car App</span>
      </Link>
      <nav className="header__nav">
        <li className="header__nav-item">
          <Link to="/cart" className="header__nav-icon">
            <FaShoppingBasket />
          </Link>
        </li>
      </nav>
    </header>
  );
};
