import React, { useState, useEffect, useRef } from "react";
import "../Css/Header.css";
import itechLogo from "../assets/images/img/icon/itech_logo_header.png";
import { Link } from "react-router-dom";

// import axios from "axios";
import { products } from "../data.config";

const Header = () => {
  // const [dropDownOpen, setDropDownOpen] = useState(null);

  // const toggleDropdown = (index) => {
  //   setDropDownOpen(dropDownOpen === index ? null : index);
  // };
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setDropDownOpen(dropDownOpen === index ? null : index);
  };

  return (
    // {/*<div className="App">
    //   <link
    //     rel="stylesheet"
    //     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    //   />

    //   {/* Top Sub-Header */}
    //   <div className="Navigation-bar">
    //     <header className="info-header">
    //       <section id="top-bar" className="">
    //         <div className="container clearfix">
    //           <div className="contact-info">
    //             <i class="fa fa-envelope-o"></i>
    //             <a href="mailto:itech.co.in">helpdesk@itech.co.in</a>
    //             <i class="fa fa-phone"></i>
    //             <span class="phone" style={{ color: "white" }}>
    //               {" "}
    //               +91-70217 48803
    //             </span>
    //           </div>

    //           <div class="text-justify text-iso" style={{ color: "white" }}>
    //             An ISO 9001:2015 Certified Company
    //           </div>

    //           <div className="social-icons">
    //             <Link to="/login" className="text-white">
    //               <i className="fa fa-sign-in" aria-hidden="true"></i> Login
    //             </Link>

    //             <a
    //               href="https://www.facebook.com/ITECHDIGITALFORENSICSINDIA/"
    //               // target="_blank"
    //               className="facebook"
    //             >
    //               <i className="fa fa-facebook"></i>
    //             </a>
    //             <a
    //               href="https://twitter.com/ItechForensics"
    //               // target="_blank"
    //               className="twitter"
    //             >
    //               <i className="fa fa-twitter" aria-hidden="true"></i>
    //             </a>
    //             <a
    //               href="https://www.linkedin.com/company/itech-digital-forensics-pvt-ltd/?viewAsMember=true"
    //               // target="_blank"
    //               className="linkedin"
    //             >
    //               <i className="fa fa-linkedin" aria-hidden="true"></i>
    //             </a>
    //             <a
    //               href="https://www.instagram.com/itechforensics/"
    //               // target="_blank"
    //               className="instagram"
    //             >
    //               <i className="fa fa-instagram" aria-hidden="true"></i>
    //             </a>
    //             <a
    //               href="https://www.youtube.com/channel/UCj5-XB9Q3J6qcMp4nx-7_1w?view_as=subscriber"
    //               // target="_blank"
    //               className="youtube"
    //             >
    //               <i className="fa fa-youtube" aria-hidden="true"></i>
    //             </a>
    //           </div>
    //         </div>
    //       </section>
    //     </header>
    //   </div>

    //   {/* Main Header */}
    //   <div className="Navigation-bar2">
    //     <header className="main-header">
    //       <section id="main-bar" className="">
    //         <div className="container clearfix">
    //           <div className="site-logo">
    //             <img src={itechLogo} alt="Itech-Logo" srcset="" />
    //           </div>
    //           <nav className="navbar">
    //             <ul className="navbar-nav">
    //               <Link to="/" className="brand-nav">
    //                 Home
    //               </Link>

    //               {/* hardware */}
    //               <li className="nav-item dropdown">
    //                 <Link
    //                   className="nav-link dropdown-toggle"
    //                   to="#"
    //                   id="navbarDropdown"
    //                   role="button"
    //                   data-bs-toggle="dropdown"
    //                   aria-expanded="false"
    //                   onClick={() => toggleDropdown(1)}
    //                 >
    //                   Hardware
    //                 </Link>
    //                 <ul
    //                   className={`dropdown-menu ${
    //                     dropDownOpen === 1 ? "show" : ""
    //                   }`}
    //                   aria-labelledby="navbarDropdown"
    //                 >
    //                   {products.map((product) => (
    //                     <li key={product.id}>
    //                       <Link
    //                         className="dropdown-item"
    //                         to={`/products/${product.id}`}
    //                       >
    //                         {product.name}
    //                       </Link>
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </li>

    //               {/* Software */}
    //               <Link to="/software">Software</Link>
    //               <li className="nav-item dropdown">
    //                 <a
    //                   className="nav-link dropdown-toggle"
    //                   href="#"
    //                   id="navbarDropdown"
    //                   role="button"
    //                   data-bs-toggle="dropdown"
    //                   aria-expanded="false"
    //                   onClick={() => toggleDropdown(2)}
    //                 >
    //                   Projects
    //                 </a>
    //                 <ul
    //                   className={`dropdown-menu ${
    //                     dropDownOpen === 2 ? "show" : ""
    //                   }`}
    //                   aria-labelledby="navbarDropdown"
    //                 >
    //                   <li>
    //                     <a className="dropdown-item" href="#">
    //                       Government CSR Projects
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li className="nav-item dropdown">
    //                 <a
    //                   className="nav-link dropdown-toggle"
    //                   href="#"
    //                   id="navbarDropdown"
    //                   role="button"
    //                   data-bs-toggle="dropdown"
    //                   aria-expanded="false"
    //                   onClick={() => toggleDropdown(3)}
    //                 >
    //                   Company
    //                 </a>
    //                 <ul
    //                   className={`dropdown-menu ${
    //                     dropDownOpen === 3 ? "show" : ""
    //                   }`}
    //                   aria-labelledby="navbarDropdown"
    //                 >
    //                   <li>
    //                     <Link className="dropdown-item" to="/AboutUs">
    //                       About Us
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <a className="dropdown-item" href="#">
    //                       History
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a className="dropdown-item" href="#">
    //                       Team
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <Link className="dropdown-item" to="/News">
    //                       News
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link className="dropdown-item" to="/Careers">
    //                       Career
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <a className="dropdown-item" href="#">
    //                       Contacts
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li className="nav-item dropdown">
    //                 <a
    //                   className="nav-link dropdown-toggle"
    //                   href="#"
    //                   id="navbarDropdown"
    //                   role="button"
    //                   data-bs-toggle="dropdown"
    //                   aria-expanded="false"
    //                   onClick={() => toggleDropdown(4)}
    //                 >
    //                   Support
    //                 </a>
    //                 <ul
    //                   className={`dropdown-menu ${
    //                     dropDownOpen === 4 ? "show" : ""
    //                   }`}
    //                   aria-labelledby="navbarDropdown"
    //                 >
    //                   <li>
    //                     <Link to="/brochure">
    //                       <a className="dropdown-item" href="#">
    //                         Product Brochure
    //                       </a>
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/gallery">
    //                       <a className="dropdown-item" href="#">
    //                         Gallery
    //                       </a>
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <a className="dropdown-item" href="#">
    //                       Sitemap
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a className="dropdown-item" href="#">
    //                       Support
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a className="dropdown-item" href="#">
    //                       FAQ
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //       </section>
    //     </header>
    //   </div>
    // </div>*/}

    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      {/* Top Sub-Header */}
      <div className="Navigation-bar">
        <header className="info-header">
          <section id="top-bar">
            <div className="container clearfix">
              <div className="contact-info">
                <i style={{ color: "red" }} className="fa fa-envelope-o"></i>
                <a href="mailto:itech.co.in">helpdesk@itech.co.in</a>
                <i
                  style={{ color: "red", paddingRight: 2 }}
                  className="fa fa-phone"
                ></i>
                <span style={{ color: "white" }} className="phone">
                  {" "}
                  +91-70217 48803
                </span>
              </div>

              <div style={{ color: "white" }} className="text-justify text-iso">
                An ISO 9001:2015 Certified Company
              </div>

              <div className="social-icons">
                <Link
                  style={{ color: "red" }}
                  to="/login"
                  className="text-white"
                >
                  <i
                    style={{ color: "red", paddingRight: 4 }}
                    className="fa fa-sign-in"
                    aria-hidden="true"
                  ></i>
                  LOGIN
                </Link>

                <a
                  style={{ color: "red" }}
                  href="https://www.facebook.com/ITECHDIGITALFORENSICSINDIA/"
                  className="facebook"
                >
                  <i style={{ color: "red" }} className="fa fa-facebook"></i>
                </a>
                <a
                  style={{ color: "color" }}
                  href="https://twitter.com/ItechForensics"
                  className="twitter"
                >
                  <i
                    style={{ color: "red" }}
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  style={{ color: "color" }}
                  href="https://www.linkedin.com/company/itech-digital-forensics-pvt-ltd/?viewAsMember=true"
                  className="linkedin"
                >
                  <i
                    style={{ color: "red" }}
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  style={{ color: "color" }}
                  href="https://www.instagram.com/itechforensics/"
                  className="instagram"
                >
                  <i
                    style={{ color: "red" }}
                    className="fa fa-instagram"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCj5-XB9Q3J6qcMp4nx-7_1w?view_as=subscriber"
                  className="youtube"
                >
                  <i
                    style={{ color: "red" }}
                    className="fa fa-youtube"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </section>
        </header>
      </div>

      {/* Main Header */}
      <div className="Navigation-bar2">
        <header className="main-header">
          <section id="main-bar">
            <div className="container clearfix">
              <div className="site-logo">
                <img src={itechLogo} alt="Itech-Logo" />
              </div>
              <nav className="navbar">
                <div className="hamburger lg:hidden" onClick={toggleMenu}>
                  <i className="fa fa-bars"></i>
                </div>
                <ul
                  style={{ listStyleType: "none" }}
                  className={`navbar-nav ${menuOpen ? "open" : ""}`}
                >
                  <Link to="/" className="brand-nav">
                    HOME
                  </Link>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded="false"
                      onClick={() => toggleDropdown(1)}
                    >
                      HARDWARE
                    </Link>
                    <ul
                      className={`dropdown-menu ${
                        dropDownOpen === 1 ? "show" : ""
                      }`}
                      aria-labelledby="navbarDropdown"
                    >
                      {products.map((product) => (
                        <li key={product.id}>
                          <Link
                            className="dropdown-item"
                            to={`/products/${product.id}`}
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <Link to="/software" className="brand-nav">
                    SOFTWARE
                  </Link>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded="false"
                      onClick={() => toggleDropdown(2)}
                    >
                      PROJECTS
                    </a>
                    <ul
                      className={`dropdown-menu ${
                        dropDownOpen === 2 ? "show" : ""
                      }`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          GOVERNMENT CSR PROJECTS
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded="false"
                      onClick={() => toggleDropdown(3)}
                    >
                      COMPANY
                    </a>
                    <ul
                      className={`dropdown-menu ${
                        dropDownOpen === 3 ? "show" : ""
                      }`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/AboutUs">
                          ABOUT US
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          HISTORY
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          TEAM
                        </a>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/News">
                          NEWS
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Careers">
                          CAREERS
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          CONTACTS
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded="false"
                      onClick={() => toggleDropdown(4)}
                    >
                      SUPPORT
                    </a>
                    <ul
                      className={`dropdown-menu ${
                        dropDownOpen === 4 ? "show" : ""
                      }`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/brochure" className="dropdown-item">
                          Product Brochure
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery" className="dropdown-item">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sitemap
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Support
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </header>
      </div>
    </div>
  );
};

export default Header;
