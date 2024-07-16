// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import itechLogo from "../assets/images/img/icon/itech_logo_header.png";
// import { PRODUCTS } from "../data/Products";
// import { GRAPHSTER, ROADSTER, RACKSTER } from "../data/Products";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import "../Css/HeaderNew.css";
// const HeaderNew = () => {
//   const [show, setShow] = useState(false);
//   const [show1, setShow1] = useState(false);
//   const toggleMenu = () => {
//     setShow(!show);
//   };
//   const removeActive = () => {
//     setShow(false);
//   };
//   return (
//     <div className="header-navbar">
//       <div className="header-topbar">
//         <div className="header-contact-info">
//           <FaEnvelope className="email" />
//           support@itech.co.in
//           <FaPhoneAlt className="phone" /> +91-70217 48803 \ 09
//         </div>
//         <div className="header-iso-certification">
//           An ISO 9001:2015 Certified Company
//         </div>
//         <div className="header-social-icons">
//           <Link to="/login" className="login">
//             <i className="fa fa-sign-in" aria-hidden="true">
//               &nbsp;
//             </i>
//             Login
//           </Link>
//           <Link
//             to="https://www.facebook.com/ITECHDIGITALFORENSICSINDIA/"
//             target="_blank"
//             className="facebook"
//           >
//             <FaFacebookF className="icon" />
//           </Link>
//           <Link
//             to="https://twitter.com/ItechForensics"
//             target="_blank"
//             className="twitter"
//           >
//             <FaTwitter className="icon" />
//           </Link>
//           <Link
//             to="https://www.linkedin.com/company/itech-digital-forensics-pvt-ltd/?viewAsMember=true"
//             target="_blank"
//             className="linkedin"
//           >
//             <FaLinkedinIn className="icon" />
//           </Link>
//           <Link
//             to="https://www.instagram.com/itechforensics/"
//             target="_blank"
//             className="instagram"
//           >
//             <FaInstagram className="icon" />
//           </Link>
//           <Link
//             to="https://www.youtube.com/channel/UCj5-XB9Q3J6qcMp4nx-7_1w?view_as=subscriber"
//             target="_blank"
//             className="youtube"
//           >
//             <FaYoutube className="icon" />
//           </Link>
//         </div>
//       </div>
//       {/* Main Navbar */}
//       <header
//         className="header-site-navbar header-site-navbar-target header-site-header"
//         role="banner"
//       >
//         <div className="header-main-navbar">
//           <div className="header-site-logo">
//             <Link to="/">
//               <img
//                 id="site-logo"
//                 src={itechLogo}
//                 alt="Itech-Logo"
//                 className="nav__logo"
//               />
//             </Link>
//           </div>
//           <div className="hamburger" onClick={toggleMenu}>
//             {show ? <FaTimes /> : <FaBars />}{" "}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };
// export default HeaderNew;

{
  /* <nav
className={`site-navigation ${show ? "open" : ""}`}
role="navigation"
>
{show && <FaTimes className="close-icon" onClick={toggleMenu} />}
<ul
  className={`navMenu nav__list ${show ? "open" : ""}`}
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
          <Link
            className="dropdown-item"
            to={`/products/${product.id}`}
          >
            {product.name}
          </Link>
        </li>
      ))}
      <li>
        <Link className="dropdown-item" to="/deskter">
          Deskter
        </Link>
        
        <Link className="dropdown-item" to="/cubester">
          Cubester
        </Link>
        <Link className="dropdown-item" to="/graphster">
          Graphster
        </Link>
        <Link className="dropdown-item" to="/roadster">
          Roadster
        </Link>
        <Link className="dropdown-item" to="rackster">
          Rackster
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
</nav> */
}
