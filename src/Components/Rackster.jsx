import React from "react";
import { Link } from "react-router-dom";
import { RACKSTER } from "../data/Products";

const RacksterPage = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="deskterproduct-list">
      {RACKSTER.map((rackster) => (
        <div key={rackster.id} className="deskterproduct-item">
          <Link
            to={`/rackster/${getUrlFriendlyName(rackster.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={rackster.image}
              alt={rackster.name}
              className="deskterproduct-image"
            />
            <h2 className="deskterproduct-name">{rackster.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RacksterPage;
