import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 bg-gray-100">
      <h1 className="mb-6 text-2xl font-semibold text-center">
        ITECH DIGITAL FORENSICS Site Map
      </h1>
      <div className="flex flex-wrap justify-center mb-8 space-x-2">
        <Button
          variant="outline-secondary"
          style={{ border: "2px solid black" }}
        >
          Hardware
        </Button>
        <Button
          variant="outline-secondary"
          style={{ border: "2px solid black" }}
        >
          Software
        </Button>
        <Button
          variant="outline-secondary"
          style={{ border: "2px solid black" }}
        >
          Company
        </Button>
        <Button
          variant="outline-secondary"
          style={{ border: "2px solid black" }}
        >
          Support
        </Button>
        <Button
          variant="outline-secondary"
          style={{ border: "2px solid black" }}
        >
          Others
        </Button>
      </div>
      <div className="w-full max-w-5xl space-y-8">
        <div className="flex justify-between">
          <div>
            <Link to="/Company" className="mb-2 text-lg font-semibold">
              Company
            </Link>
            <ul className="space-y-1">
              <Link to="/AboutUs">About Us</Link>
              <Link to="#">News</Link>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>History</li>
              <Link to="/Careers" className="text-red-500">
                Careers
              </Link>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>Team</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          <div>
            <h2 className="mb-2 text-lg font-semibold">Hardware</h2>
            <ul className="space-y-1">
              <li>Clonester</li>
              <li className="text-red-500">Cubester X</li>
              <li className="text-red-500">Deskster X</li>
              <li>Deskster Classic</li>
              <li>Deskster Dual</li>
              <li>Labster</li>
              <li>Trackster</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>Lapster</li>
              <li>Roadster</li>
              <Link to="/deskter" className="text-red-500">
                Deskster X-T RAID
              </Link>
              <Link to="/deskter">Deskster Lite</Link>
              <li>Graphster R Server</li>
              <li>Rackster DC</li>
              <li>Telster</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>Cubester</li>
              <li>Roadster X</li>
              <Link to="/deskter" className="text-red-500">
                Deskster X ADR
              </Link>
              <li>Deskster Server</li>
              <li>Graphster T</li>
              <li>Rackster MC</li>
              <li>Vaultster</li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <h2 className="mb-2 text-lg font-semibold">Software</h2>
          <ul className="space-y-1">
            <Link to="/Software" className="text-red-500">
              Software
            </Link>
          </ul>
        </div>
        <hr />
        <div>
          <h2 className="mb-2 text-lg font-semibold">Support</h2>
          <ul className="space-y-1">
            <Link to="/Support" className="text-red-500">
              Support
            </Link>
          </ul>
        </div>
        <hr />
        <div className="flex justify-between">
          <div>
            <h2 className="mb-2 text-lg font-semibold">Others</h2>
            <ul className="space-y-1">
              <li className="text-red-500">Products Brochure</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>Gallery</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <Link to="/Contact">Contact</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
