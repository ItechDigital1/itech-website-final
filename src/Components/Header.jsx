import React, { useState } from "react";
import "../Css/Header.css";
import { Link, NavLink } from "react-router-dom";
import itechLogo from "../assets/images/img/icon/itech_logo_header.png";
import { PRODUCTS } from "../data/Products";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const removeActive = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <center>
        <div className="top-bar">
          <div className="contact-info">
            <FaEnvelope className="contact-icon" /> helpdesk@itech.co.in
            <FaPhoneAlt className="contact-icon" /> +91-70217 48803
          </div>
          <div className="iso-certification">
            An ISO 9001:2015 Certified Company
          </div>
          <div className="social-icons">
            <Link to="/login">
              <i className="fa fa-sign-in" aria-hidden="true">
                &nbsp;
              </i>
              Login
            </Link>
            <Link
              to="https://www.facebook.com/ITECHDIGITALFORENSICSINDIA/"
              target="_blank"
              className="facebook"
            >
              <FaFacebookF className="icon" />
            </Link>
            <Link
              to="https://twitter.com/ItechForensics"
              target="_blank"
              className="twitter"
            >
              <FaTwitter className="icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/itech-digital-forensics-pvt-ltd/?viewAsMember=true"
              target="_blank"
              className="linkedin"
            >
              <FaLinkedinIn className="icon" />
            </Link>
            <Link
              to="https://www.instagram.com/itechforensics/"
              target="_blank"
              className="instagram"
            >
              <FaInstagram className="icon" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCj5-XB9Q3J6qcMp4nx-7_1w?view_as=subscriber"
              target="_blank"
              className="youtube"
            >
              <FaYoutube className="icon" />
            </Link>
          </div>
        </div>
      </center>

      {/* Main Navbar */}
      <center>
        <header
          className="site-navbar site-navbar-target site-header"
          role="banner"
        >
          <div className="main-navbar">
            <div className="site-logo">
              <Link to="/">
                <img
                  className="nav__logo"
                  id="site-logo"
                  src={itechLogo}
                  alt="Itech-Logo"
                />
              </Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <nav
              className={`site-navigation ${isOpen ? "open" : ""}`}
              role="navigation"
            >
              <ul
                className={`navMenu nav__list ${isOpen ? "open" : ""}`}
                id="fixed-nav"
              >
                <li className="nav__item" onClick={removeActive}>
                  <NavLink to="/" className="navs-link navLink">
                    Home
                  </NavLink>
                </li>
                <li className="has-children nav__item" onClick={removeActive}>
                  <NavLink
                    to="#"
                    className="navs-link navLink"
                    id="sub-drop-down"
                  >
                    Hardware
                  </NavLink>
                  <ul className="dropdown arrow-top">
                    {PRODUCTS.map((product) => (
                      <li key={product.id}>
                        <NavLink
                          className="dropdown-item"
                          to={`/products/${product.id}`}
                        >
                          {product.name}
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <Link className="dropdown-item" to="/deskter">
                        Deskter
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav__item" onClick={removeActive}>
                  <Link to="/software" className="navs-link navLink">
                    Software
                  </Link>
                </li>
                <li className="nav__item" onClick={removeActive}>
                  <Link to="/faradayBag" className="navs-link navLink">
                    Faraday bags
                  </Link>
                </li>
                <li className="has-children nav__item" onClick={removeActive}>
                  <Link className="navLink" to="/Projects" id="sub-drop-down">
                    Projects
                  </Link>
                  <ul className="dropdown" id="drop-down">
                    <li className="has-children" id="sub-drop-down">
                      <Link to="#">
                        Government
                        <br />
                        CSR Projects
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/FireBrigade">Fire Brigade</Link>
                        </li>
                        <li>
                          <Link to="#">Police</Link>
                        </li>
                        <li>
                          <Link to="#">Railway</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-children nav__item" onClick={removeActive}>
                  <Link className="navLink" to="Company" id="sub-drop-down">
                    Company
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/AboutUS">About Us</Link>
                    </li>
                    <li>
                      <Link to="/History">History</Link>
                    </li>
                    <li>
                      <Link to="/Team">Team</Link>
                    </li>
                    <li>
                      <Link to="/News">News</Link>
                    </li>
                    <li>
                      <Link to="/Careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-children nav__item" onClick={removeActive}>
                  <Link className="navLink" to="#" id="sub-drop-down">
                    Support
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="#">Products Brochure</Link>
                    </li>
                    <li>
                      <Link to="/Gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="#">Sitemap</Link>
                    </li>
                    <li>
                      <Link to="#" target="">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link to="#">FAQ</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </center>
    </div>
  );
};

export default Header;
