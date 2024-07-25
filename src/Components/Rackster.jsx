import React from "react";
import { Link } from "react-router-dom";
import { RACKSTER } from "../data/Products";
import "../Css/TwoProducts.css";
const RacksterPage = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="commonproduct-list">
      {RACKSTER.map((rackster) => (
        <div key={rackster.id} className="commonproduct-item">
          <Link
            to={`/rackster/${getUrlFriendlyName(rackster.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={rackster.image}
              alt={rackster.name}
              className="commonproduct-image"
            />
            <h2 className="commonproduct-name">{rackster.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RacksterPage;
