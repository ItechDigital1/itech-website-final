import React from "react";
import { Link } from "react-router-dom";
import { CUBESTER } from "../data/Products";

const CubesterPage = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="deskterproduct-list">
      {CUBESTER.map((cubester) => (
        <div key={cubester.id} className="deskterproduct-item">
          <Link
            to={`/cubester/${getUrlFriendlyName(cubester.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={cubester.image}
              alt={cubester.name}
              className="deskterproduct-image"
            />
            <h2 className="deskterproduct-name">{cubester.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CubesterPage;
