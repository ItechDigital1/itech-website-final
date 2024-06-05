import React, { useState } from "react";
import "../Css/Header.css";
import itechLogo from "../assets/images/img/icon/itech_logo_header.png";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/Products";
import { NavLink } from "react-router-dom";

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [dropDownOpen, setDropDownOpen] = useState(null);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // const toggleDropdown = (index) => {
  //   setDropDownOpen(dropDownOpen === index ? null : index);
  // };
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <link
        rel="stylesheet"
        to="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="preconnect" to="https://fonts.googleapis.com" />
      <link rel="preconnect" to="https://fonts.gstatic.com" crossorigin />
      <Link
        to="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></Link>

      {/* Top Sub-Header */}
      <center>
        <section id="topbar" className="d-lg-block">
          <div className="container clearfix d-flex align-items-center justify-content-between">
            <center>
              <div className="d-flex align-items-center contact-info float-left">
                <i className="fa fa-envelope"></i>
                <Link to="mailto:itech.co.in">
                  <span>helpdesk@itech.co.in</span>
                </Link>
                <i className="fa fa-phone"></i>
                <span className="phone">+91-70217 48803</span>
              </div>
              <span className="text-justify text-iso">
                An ISO 9001:2015 Certified Company
              </span>
              <div className="d-flex align-items-center social-links float-right">
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
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link
                  to="https://twitter.com/ItechForensics"
                  target="_blank"
                  className="twitter"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/company/itech-digital-forensics-pvt-ltd/?viewAsMember=true"
                  target="_blank"
                  className="linkedin"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/itechforensics/"
                  target="_blank"
                  className="instagram"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link
                  to="https://www.youtube.com/channel/UCj5-XB9Q3J6qcMp4nx-7_1w?view_as=subscriber"
                  target="_blank"
                  className="youtube"
                >
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </Link>
              </div>
            </center>
          </div>
        </section>
      </center>
      {/* Main Header */}
      <section className="header sticky-top">
        <header
          className="site-navbar site-navbar-target site-header"
          role="banner"
          style={{ height: 90, backgroundColor: "black" }}
        >
          <center>
            <div className="container-main clearfix">
              <div className="row align-items-center position-relative">
                <div className="site-logo">
                  <Link to="/">
                    <img
                      className="pull-left nav__logo"
                      id="site-logo"
                      src={itechLogo}
                      alt="Itech-Logo"
                    />
                  </Link>
                </div>
                <nav
                  className={`site-navigation text-right ml-auto span7 ${
                    isActive ? "active" : ""
                  }`}
                  role="navigation"
                >
                  <ul
                    className={`navMenu nav__list site-menu main-menu js-clone-nav ml-auto ${
                      isActive ? "active" : ""
                    }`}
                    id="fixed-nav"
                  >
                    <li className="nav__item" onClick={removeActive}>
                      <NavLink to="/" className="nav-link navLink">
                        Home
                      </NavLink>
                    </li>
                    <li
                      className="has-children nav__item"
                      onClick={removeActive}
                    >
                      <NavLink
                        to="#"
                        className="nav-link navLink"
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
                      </ul>
                    </li>
                    <li className="nav__item" onClick={removeActive}>
                      <Link to="/software" className="nav-link navLink">
                        Software
                      </Link>
                    </li>
                    <li
                      className="has-children nav__item"
                      onClick={removeActive}
                    >
                      <Link
                        className="navLink"
                        to="/Projects"
                        id="sub-drop-down"
                      >
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
                              <Link to="#">Fire Brigade</Link>
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
                    <li
                      className="has-children nav__item"
                      onClick={removeActive}
                    >
                      <Link className="navLink" to="Company" id="sub-drop-down">
                        Company
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/AboutUS">About Us</Link>
                        </li>
                        <li>
                          <Link to="#">History</Link>
                        </li>
                        <li>
                          <Link to="/Team">Team</Link>
                        </li>
                        <li>
                          <Link to="/News">News</Link>
                        </li>
                        <li>
                          <Link to="/Career">Careers</Link>
                        </li>
                        <li>
                          <Link to="#">Contact</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-children nav__item"
                      onClick={removeActive}
                    >
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
                          <Link to="#" target="_blank">
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
            </div>
          </center>
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            style={{ margin: "2rem" }}
            onClick={toggleActiveClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Header;
