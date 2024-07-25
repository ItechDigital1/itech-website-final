import React from "react";
import { Link } from "react-router-dom";
import { GRAPHSTER } from "../data/Graphster";
import "../Css/TwoProducts.css";
const GraphsterPage = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="commonproduct-list">
      {GRAPHSTER.map((graphster) => (
        <div key={graphster.id} className="commonproduct-item">
          <Link
            to={`/graphster/${getUrlFriendlyName(graphster.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={graphster.image}
              alt={graphster.name}
              className="commonproduct-image"
            />
            <h2 className="commonproduct-name">{graphster.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GraphsterPage;
