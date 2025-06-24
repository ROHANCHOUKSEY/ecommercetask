import React, { useContext } from "react";
import { ChevronDown, Search, User, ShoppingCart } from "lucide-react";
import Logo from "./Images/Logo.png";
import "../../CSS/Header.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import {AuthContext} from "../../Context/AuthContext";

const Header = () => {
  const { isLoggined, setIsLoggined } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoggined(false);
    navigate("/login")
  }

  return (
    <header className="navbar-Container">
      <div className="leftSidenav">
        <img src={Logo} alt="Website Logo" className="logo" />

        <div className="NavbarSearch desktop-search">
          <Search color="black" size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search Here..."
            className="search-input"
          />
        </div>
      </div>

      <nav className="rightSideNav">
        <ul className="nav-links">
          <li className="nav-item desktop-only">
            <span className="nav-text">Zoffi</span>
            <ChevronDown size={16} className="dropdown-icon" />
          </li>
          <li className="nav-item desktop-only">
            <span className="nav-text">Become a Seller</span>
          </li>
          <li className="nav-item desktop-only">
            <span className="nav-text">More</span>
            <ChevronDown size={16} className="dropdown-icon" />
          </li>

          <li className="nav-item mobile-only">
            <Search size={20} className="mobile-icon" />
          </li>
          <li className="nav-item mobile-only">
            <User size={20} className="mobile-icon" />
          </li>
          <li className="nav-item">
            <ShoppingCart size={20} className="cart-icon" />
            <span className="desktop-only cart-text">Cart</span>
          </li>
          {isLoggined ? (
            <NavLink to="/">
              <li className="nav-item desktop-only " onClick={handleLogOut}>
                <span className="nav-text">LogOut</span>
              </li>
            </NavLink>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
