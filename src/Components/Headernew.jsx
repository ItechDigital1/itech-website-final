<header className="site-navbar site-navbar-target site-header" role="banner">
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
              style={{ height: "76px", width: "210px" }}
            />
          </Link>
        </div>
        <nav
          className={`site-navigation text-right ml-auto span7 ${
            isOpen ? "open" : ""
          }`}
          role="navigation"
        >
          <ul
            className={`navMenu nav__list site-menu main-menu js-clone-nav ml-auto ${
              isOpen ? "open" : ""
            }`}
            id="fixed-nav"
          >
            <li className="nav__item" onClick={removeActive}>
              <NavLink to="/" className="navs-link navLink">
                Home
              </NavLink>
            </li>
            <li className="has-children nav__item" onClick={removeActive}>
              <NavLink to="#" className="navs-link navLink" id="sub-drop-down">
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
              {/* <Link to="/cart">
                        <i class="fas fa-shopping-cart" />
                      </Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </center>
  {/* <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            style={{ margin: "2rem" }}
            onClick={toggleActiveClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div> */}
</header>;
/*


@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
#topbar {
  background: -webkit-linear-gradient(to right, #fd746c, #2c3e50);
  background: linear-gradient(to right, #2f121c, #010412);
  padding: 8px 0;
  font-size: 12px;
  height: 38.5px;
}

.container {
  margin: auto 129.76px;
  max-width: 1581.6px;
}
.container .clearfix {
  padding: 15px;
}
.contact-info {
  float: left;
  display: flex;
  align-items: center;
  align-content: center;
}

#topbar .contact-info i {
  color: #f00;
  padding: 4px;
  height: 12px;
}
#topbar .contact-info a {
  font-family: Exo;
  line-height: 1;
  color: #acacac;
  text-decoration: none;
}
#topbar .contact-info .fa-phone {
  padding-left: 20px;
  margin-left: 20px;
  border-left: 1px solid #e9e9e947;
}
.contact-info .phone {
  color: #acacac;
  width: 99.05px;
  height: 16px;
}
.text-justify {
  color: #acacac;
  font-size: 15px;
}
.text-iso {
  margin: auto;
}
.social-links {
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}
#topbar .social-links a {
  color: #f00;
  padding: 4px 12px;
  display: inline-block;
  line-height: 1px;
  border-left: 1px solid #e9e9e924;
  text-decoration: none;
}


@media only screen and (max-width: 600px) {
  .container {
    margin: 0;
    margin-bottom: 2rem;
    padding: 0 15px;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap; 
  }

  .contact-info {
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    justify-content: center;
   
    align-items: center;
  }

  .contact-info i,
  .contact-info span,
  .contact-info a {
    
    margin-bottom: 3px;
  }

  .contact-info .fa-phone {
    margin-left: 0;
    border-left: none;
    padding-left: 0;
  }

  .text-iso {
    margin: 10px 0;
    text-align: center;
    width: 100%;
  }

  .social-links {
    width: 100%;
    justify-content: center;
    margin-top: 5px;
  }

  .social-links a {
    padding: 4px;
    
    border-left: none;
    margin-bottom: 10px;
  }
}

@media only screen and (min-width: 600px) and (max-width: 780px) {
  .container {
    margin: 0;
    margin-bottom: 1.2rem;
    padding: 0 15px;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap; 
  }
  .contact-info {
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    justify-content: center;
   
    align-items: center;
  }

  .contact-info i,
  .contact-info span,
  .contact-info a {
    display: block;
    margin-bottom: 5px;
  }

  .contact-info .fa-phone {
    margin-left: 0;
    border-left: none;
    padding-left: 0;
  }

  .text-iso {
    margin: 10px 0;
    text-align: center;
    width: 100%;
  }

  .social-links {
    width: 100%;
    justify-content: center;
  }

  .social-links a {
    padding: 4px;
    margin-right: 10px;
    border-left: none;
    margin-bottom: 10px;
  }
}

@media only screen and (min-width: 780px) and (max-width: 992px) {
  .container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 0;
  }

  .contact-info {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .contact-info i,
  .contact-info span,
  .contact-info a {
    display: inline-block;
    margin-bottom: 0;
  }

  .contact-info .fa-phone {
    margin-left: 20px;
    border-left: 1px solid #e9e9e947;
    padding-left: 20px;
  }

  .text-iso {
    margin: auto;
  }

  .social-links {
    justify-content: flex-end;
  }

  .social-links a {
    padding: 4px 12px;
    border-left: 1px solid #e9e9e924;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto 129.76px;
    padding: 0;
    flex-wrap: nowrap;
  }

  .contact-info {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .contact-info i,
  .contact-info span,
  .contact-info a {
    display: inline-block;
    margin-bottom: 0;
  }

  .contact-info .fa-phone {
    margin-left: 20px;
    border-left: 1px solid #e9e9e947;
    padding-left: 20px;
  }

  .text-iso {
    margin: auto;
  }

  .social-links {
    justify-content: flex-end;
  }

  .social-links a {
    padding: 4px 12px;
    border-left: 1px solid #e9e9e924;
  }
}
.container-main {
  margin: auto 129.76px;
  max-width: 1581.6px;
}
  /* Responsive Styles */
.header {
    top: 0;
    z-index: 1000;
  }
  
  .site-navbar {
    background-color: black;
    height: 90px;
    width: 100%;
  }
  
  .nav__logo {
    height: 70px;
  }
  
  .site-navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .navMenu {
    list-style: none;
    display: flex;
    padding-left: 0;
  }
  
  .nav__item {
    margin-left: 20px;
    position: relative;
  }
  
  .navLink {
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .navLink:hover,
  .navLink:focus {
    color: red;
  }
  
  .dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: black;
    list-style: none;
    padding: 10px 0;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
  
  .has-children:hover .dropdown,
  .has-children:focus-within .dropdown {
    display: block;
  }
  
  .hamburger {
    display: none;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-around;
    height: 20px;
  }
  
  .hamburger span {
    background-color: white;
    height: 2px;
    width: 25px;
    display: block;
  }
  
  .hamburger.active .bar {
    background-color: red;
  }
  
  .site-logo {
    margin-left: 20px;
    display: flex;
  }
  
  .sub-drop-down .dropdown {
    right: 100%;
    top: 0;
    left: auto; /* Ensures nested menus open to the left */
  }
  
  @media (max-width: 991px) {
    .container-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .navMenu {
      display: none;
      flex-direction: column;
      background-color: black;
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
    }
  
    .navMenu.active {
      display: block;
    }
  
    .nav__item {
      margin: 0;
    }
  
    .hamburger {
      display: flex;
    }
  }
  
*/
