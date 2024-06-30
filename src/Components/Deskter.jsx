import React from "react";
import { Deskter } from "../data/Deskter";
import { Link } from "react-router-dom";
import "../Css/Deskter.css";

const DeskterPage = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <div className="deskterproduct-list">
      {Deskter.map((deskter) => (
        <div key={deskter.id} className="deskterproduct-item">
          <Link
            to={`/deskter/${getUrlFriendlyName(deskter.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={deskter.image}
              alt={deskter.name}
              className="deskterproduct-image"
            />
            <h2 className="deskterproduct-name">{deskter.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DeskterPage;
