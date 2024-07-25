import React from "react";
import { Link } from "react-router-dom";
import { ROADSTER } from "../data/Products";
import "../Css/TwoProducts.css";
const RoadsterPage = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="commonproduct-list">
      {ROADSTER.map((roadster) => (
        <div key={roadster.id} className="commonproduct-item">
          <Link
            to={`/roadster/${getUrlFriendlyName(roadster.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={roadster.image}
              alt={roadster.name}
              className="commonproduct-image"
            />
            <h2 className="commonproduct-name">{roadster.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RoadsterPage;
