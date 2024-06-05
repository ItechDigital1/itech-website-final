import React from "react";
import "../Css/Footer.css";
// footer logos
import ItechFooter from "../assets/images/img/icon/itech_logo_footer.png";
import Facebook from "../assets/images/img/icon/Social-Facebook-Icon.png";
import LinkedIn from "../assets/images/img/icon/Social-LinkedIn-Icon.png";
import Instagram from "../assets/images/img/icon/Social-Instagram-Icon.png";
import X from "../assets/images/img/icon/Social-X-Icon.png";
import Youtube from "../assets/images/img/icon/Social-Youtube-Icon.png";
const Footer = () => {
  return (
    <div>
      <center>
        <footer className="container-info py-1 footer" id="below-add">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <hr className="style-top" />
          <section className=" container footers pt-1 pb-1">
            <div className="footer-container pt-1">
              <div className="footer-row">
                <div className="col-xs-12 col-sm-6 col-md-2 footers-one">
                  <div className="logo-parts">
                    <img
                      src={ItechFooter}
                      className="w-50 logo-footer"
                      width="300"
                      height="40"
                    />
                    <br />
                  </div>
                  <div className="footers-info mt-3">
                    <p className="footer-add">
                      `Sadanand`, Ground Floor,
                      <br />
                      St. Anthony's Street,
                      <br />
                      Kalina,
                      <br />
                      Santa Cruz (East),
                      <br />
                      Mumbai. 400 029, INDIA
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-2 footers-two">
                  <h6>Business</h6>
                  <span
                    style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}
                  >
                    <div className="email">Email: </div>
                    <span
                      style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}
                    >
                      <br />
                      business@itech.co.in
                    </span>
                  </span>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-2 footers-three">
                  <h6>Sales</h6>
                  <span>
                    <div className="email">Email: </div>
                    <span style={{ color: "#fff", fontSize: "14px" }}>
                      <br />
                      sales@itech.co.in
                    </span>
                  </span>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-2 footers-four">
                  <h6>Support</h6>
                  <span>
                    <div className="email">Email: </div>
                    <span style={{ color: "#ffffff", fontSize: "14px" }}>
                      <br />
                      support@itech.co.in
                    </span>
                  </span>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-2 footers-five">
                  <h6>Press</h6>
                  <span>
                    <div className="email">Email: </div>
                    <span style={{ color: "#fff", fontSize: "14px" }}>
                      <br />
                      press@itech.co.in
                    </span>
                  </span>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-2 footers-six">
                  <h6>Follow Us</h6>
                  <a
                    href="https://www.facebook.com/ITECHDIGITALFORENSICSINDIA/?modal=admin_todo_tour"
                    target="#"
                  >
                    <img
                      src={Facebook}
                      width="32"
                      height="32"
                      className="footer-social"
                    />
                  </a>
                  <a href="https://twitter.com/ItechForensics" target="_blank">
                    <img
                      src={X}
                      width="32"
                      height="32"
                      className="footer-social"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/itech-digital-forensics-pvt-ltd-20222a1a8/"
                    target="#"
                  >
                    <img
                      src={LinkedIn}
                      width="32"
                      height="32"
                      className="footer-social"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/itechforensics/"
                    target="#"
                  >
                    <img
                      src={Instagram}
                      width="32"
                      height="32"
                      className="footer-social"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCj5-XB9Q3J6qcMp4nx-7_1w"
                    target="#"
                  >
                    <img
                      src={Youtube}
                      width="32"
                      height="32"
                      className="footer-social"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <hr className="style-bottom" />
          <div id="footer">
            <div className="copyright text-center">
              Copyright © 2019-20 ITECH DIGITAL FORENSICS. All Rights Reserved.
              <br />
              <span className="text-justify" style={{ fontSize: "12px" }}>
                An ISO 9001:2015 Certified Company
              </span>
            </div>
          </div>
        </footer>
      </center>
    </div>
  );
};

export default Footer;
/**<div>
        <div className="bg-dark-900 text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-between items-start">
              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <img
                  src="https://placehold.co/100x50"
                  alt="Company Logo"
                  className="mb-4"
                />
                <p className="text-sm">
                  Sadanand, Ground Floor,
                  <br />
                  St. Anthony's Street, Kalina,
                  <br />
                  Santa Cruz (East),
                  <br />
                  Mumbai, 400 029, INDIA
                </p>
              </div>
              
              <div className="w-1/2 sm:w-1/4 md:w-1/6 mb-6 md:mb-0">
                <h5 className="font-bold mb-2">Business</h5>
                <p className="text-sm">Email: business@itech.co.in</p>
              </div>
              <div className="w-1/2 sm:w-1/4 md:w-1/6 mb-6 sm:mb-0">
                <h5 className="font-bold mb-2">Sales</h5>
                <p className="text-sm">Email: sales@itech.co.in</p>
              </div>
              <div className="w-1/2 sm:w-1/4 md:w-1/6 mb-6 md:mb-0">
                <h5 className="font-bold mb-2">Support</h5>
                <p className="text-sm">Email: support@itech.co.in</p>
              </div>
              <div className="w-1/2 sm:w-1/4 md:w-1/6 mb-6 sm:mb-0">
                <h5 className="font-bold mb-2">Press</h5>
                <p className="text-sm">Email: press@itech.co.in</p>
              </div>
              <div className="w-full sm:w-1/4 md:w-1/6">
                <h5 className="font-bold mb-2">Follow Us</h5>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-blue-500">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-pink-600">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-red-600">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center text-sm mt-8">
              <p>
                Copyright © 2019-20 ITECH DIGITAL FORENSICS. All Rights
                Reserved.
              </p>
              <p>An ISO 9001:2015 Certified Company</p>
            </div>
          </div>
        </div>
      </div> */
