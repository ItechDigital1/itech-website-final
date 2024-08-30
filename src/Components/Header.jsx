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
      <header className="bg-[#1a1a1a] text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <MailIcon className="text-red-500" />
            <span>helpdesk@itech.co.in</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="text-red-500" />
            <span>+91-70217 48803</span>
          </div>
        </div>
        <div>An ISO 9001:2015 Certified Company</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <LogInIcon className="text-red-500" />
            <span>Login</span>
          </div>

          <Link to="https://www.facebook.com/ITECHDIGITALFORENSICSINDIA/">
            <FacebookIcon className="text-red-500" />
          </Link>
          <Link to="https://www.linkedin.com/company/itech-digital-forensics-pvt-ltd/?viewAsMember=true">
            <LinkedinIcon className="text-red-500" />
          </Link>
          <Link to="https://www.instagram.com/itechforensics/">
            <InstagramIcon className="text-red-500" />
          </Link>
          <Link to="https://twitter.com/ItechForensics">
            <TwitterIcon className="text-red-500" />
          </Link>
          <Link to="https://www.youtube.com/channel/UCj5-XB9Q3J6qcMp4nx-7_1w?view_as=subscriber">
            <YoutubeIcon className="text-red-500" />
          </Link>
        </div>
      </header>

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
                      <Link to="/Sitemap">SITEMAP</Link>
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

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
