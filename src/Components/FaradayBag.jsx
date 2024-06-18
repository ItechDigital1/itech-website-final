import React from "react";
import { Link } from "react-router-dom";
import { FARADAYS } from "../data/FaradayData";
import "../Css/FaradayBag.css";

const FaradayBag = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="product-list">
      {FARADAYS.map((faraday) => (
        <div key={faraday.id} className="product-item">
          <Link
            to={`/faraday/${getUrlFriendlyName(faraday.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={faraday.image}
              alt={faraday.name}
              className="product-image"
            />
            <h2 className="product-name">{faraday.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FaradayBag;
