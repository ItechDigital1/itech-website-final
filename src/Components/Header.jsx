import React, { useState } from "react";
import "../Css/Header.css";
import { Link, NavLink } from "react-router-dom";
import itechLogo from "../assets/images/img/icon/itech_logo_header.png";
import { PRODUCTS } from "../data/Products";
import { LABEQUIPMENTS } from "../LabEquipments/LabEquipments.config";

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
    <div className="header-navbar">
      <div className="header-topbar">
        <div className="header-contact-info">
          <FaEnvelope className="email" color="red" /> support@itech.co.in
          <FaPhoneAlt className="phone" /> +91-70217 48803 \ 09
        </div>
        <div className="header-iso-certification">
          An ISO 9001:2015 Certified Company
        </div>
        <div className="header-social-icons">
          <Link to="/login" className="login">
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
                    HOME
                  </NavLink>
                </li>
                <li className="has-children nav__item" onClick={removeActive}>
                  <NavLink to="#" className="navLink" id="sub-drop-down">
                    PRODUCTS
                    <ul className="dropdown" id="drop-down">
                      <li className="has-children" id="sub-drop-down">
                        <NavLink to="#">HARDWARE</NavLink>
                        <ul className="dropdown">
                          <li>
                            <Link to="/deskter">DESKTER</Link>
                          </li>
                          {PRODUCTS.map((product) => (
                            <li key={product.id}>
                              <Link to={`/products/${product.id}`}>
                                {product.name}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link to="/cubester">CUBESTER</Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/graphster">
                              GRAPHSTER
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/roadster">
                              ROADSTER
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="rackster">
                              RACKSTER
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="has-children nav__item"
                        onClick={removeActive}
                      >
                        <NavLink
                          to="#"
                          className="dropdown-item"
                          id="sub-drop-down"
                        >
                          LAB EQUIPMENTS
                        </NavLink>
                        <ul className="dropdown arrow-top">
                          <li className="nav__item" onClick={removeActive}>
                            <Link to="/faradayBag" className="dropdown-item">
                              FARADAY BAGS
                            </Link>
                          </li>
                          {LABEQUIPMENTS.map((lab) => (
                            <li key={lab.id}>
                              <Link to={`/labEquipments/${lab.id}`}>
                                {lab.name}
                              </Link>
                            </li>
                          ))}
                          {/* <li className="dropdown-item">
                            <Link className="dropdown-item">Blockster</Link>
                          </li>
                          <li className="dropdown-item">
                            <Link className="dropdown-item">Chargester</Link>
                          </li>
                          <li className="dropdown-item">
                            <Link className="dropdown-item">Lockster</Link>
                          </li>
                          <li className="dropdown-item">
                            <Link className="dropdown-item">
                              R,F Shield Locker
                            </Link>
                          </li> */}
                        </ul>
                      </li>
                      <li
                        className="has-children nav__item"
                        onClick={removeActive}
                      >
                        <NavLink
                          to="#"
                          className="dropdown-item"
                          id="sub-drop-down"
                        >
                          DIY
                        </NavLink>
                        <ul className="dropdown arrow-top">
                          <li>
                            <Link className="dropdown-item" to="#">
                              CABINETS
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              TABLEAU
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav__item" onClick={removeActive}>
                        <Link to="/software" className="navs-link navLink">
                          SOFTWARE
                        </Link>
                      </li>
                    </ul>
                  </NavLink>
                </li>

                {/* <li className="nav__item" onClick={removeActive}>
                <Link to="/software" className="navs-link navLink">
                  Software
                </Link>
              </li> */}
                {/* <li className="nav__item" onClick={removeActive}>
                <Link to="/faradayBag" className="navs-link navLink">
                  Faraday bags
                </Link>
              </li> */}
                <li className="has-children nav__item" onClick={removeActive}>
                  <Link className="navLink" to="/Projects" id="sub-drop-down">
                    PROJECTS
                  </Link>
                  <ul className="dropdown" id="drop-down">
                    <li className="has-children" id="sub-drop-down">
                      <Link to="#">
                        GOVERNMENT
                        <br />
                        CSR PROJECTS
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/FireBrigade">FIRE BRIGADE</Link>
                        </li>
                        <li>
                          <Link to="/Police">POLICE</Link>
                        </li>
                        <li>
                          <Link to="/Railway">RAILWAY</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-children nav__item" onClick={removeActive}>
                  <Link className="navLink" to="Company" id="sub-drop-down">
                    COMPANY
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/AboutUS">ABOUT US</Link>
                    </li>
                    <li>
                      <Link to="/History">HISTORY</Link>
                    </li>
                    <li>
                      <Link to="/Team">TEAM</Link>
                    </li>
                    <li>
                      <Link to="/News">NEWS</Link>
                    </li>
                    <li>
                      <Link to="/Careers">CAREERS</Link>
                    </li>
                    <li>
                      <Link to="/Contact">CONTACT</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-children nav__item" onClick={removeActive}>
                  <Link className="navLink" to="#" id="sub-drop-down">
                    SUPPORT
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="#">PRODUCTS BROCHURE</Link>
                    </li>
                    <li>
                      <Link to="/Gallery">GALLERY</Link>
                    </li>
                    <li>
                      <Link to="#">SITEMAP</Link>
                    </li>
                    <li>
                      <Link to="#" target="">
                        SUPPORT
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
