import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Railway.css";
import prismQrMain from "../assets/images/img/Prism-QR-Main.jpg";
import prismQrMaxi from "../assets/images/img/Prism-QR-Maxi.jpg";
const Railway = () => {
  return (
    <div className="rail-container">
      <div className="containers">
        <div className="card">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="collapse"
            data-target="#rail1"
            id="btnQrScanner"
            aria-expanded="true"
          >
            From Digital Forensics to Indian Railway Project? &nbsp;Click here
            to know...
          </button>
          <div id="rail1" className="collapse show" style={{}}>
            <p className="railmsg">
              I.TECH over the past 3 Years, as part of the “Service Give Back to
              the Community” has initiated an effort in assisting various
              Government Agencies, by rendered its services via its Innovation
              and Design outfit to assist in Pioneering Technology Modernization
              Projects under low margins and CSR.
            </p>
            <p className="railmsg">
              Starting with the Mumbai Police in Several Projects, from
              Conceptualization, Design, Manufacture, Installation,
              Implementation, Training and Maintenance in various areas that
              required attention. Several Projects were executed speedily in a
              matter of months as I.TECH was the one stop shop for all the
              solutions.
            </p>
            <p className="railmsg">
              We are open to any Government agencies looking for our assistance
              in any of their Modernisation Requirements.
            </p>
          </div>
        </div>
        <div className="card">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="collapse"
            data-target="#rail2"
            id="btnQrScanner"
            aria-expanded="true"
          >
            Prism QR Portable Scanner
          </button>
          <div id="rail2" className="collapse show" style={{}}>
            <Link
              to="#"
              className="btn btn-primary btnQr"
              id="btnQrScan"
              role="button"
            >
              Prism QR Mini Portable Scanner
              <img
                className="img-fluid img-thumbnail"
                src={prismQrMain}
                alt="Lapster, High End Forensic Laptop"
                style={{ width: "153.73px", height: "153px" }}
              />
            </Link>
            &nbsp;
            <Link
              to="#"
              className="btn btn-primary"
              id="btnQrScan"
              role="button"
            >
              Prism QR Maxi Portable Scanner
              <img
                className="img-fluid img-thumbnail"
                src={prismQrMaxi}
                alt="Lapster, High End Forensic Laptop"
                style={{ width: "253.73px", height: "153px" }}
              />
            </Link>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Railway;
