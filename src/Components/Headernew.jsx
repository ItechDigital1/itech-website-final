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
//           <nav
//             className={`site-navigation ${show ? "open" : ""}`}
//             role="navigation"
//           >
//             {show && <FaTimes className="close-icon" onClick={toggleMenu} />}
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// };
// export default HeaderNew;
