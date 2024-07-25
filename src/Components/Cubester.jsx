import React from "react";
import { Link } from "react-router-dom";
import { CUBESTER } from "../data/Products";
import "../Css/TwoProducts.css";
const CubesterPage = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="commonproduct-list ">
      {CUBESTER.map((cubester) => (
        <div
          key={cubester.id}
          // col-xs-18 col-sm-6 col-md-6
          className="commonproduct-item "
        >
          <Link
            to={`/cubester/${getUrlFriendlyName(cubester.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={cubester.image}
              alt={cubester.name}
              className="commonproduct-image"
            />
            <h2 className="commonproduct-name">{cubester.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CubesterPage;
