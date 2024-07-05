import React from "react";
import { Link } from "react-router-dom";
import { GRAPHSTER } from "../data/Graphster";

const GraphsterPage = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="deskterproduct-list">
      {GRAPHSTER.map((graphster) => (
        <div key={graphster.id} className="deskterproduct-item">
          <Link
            to={`/graphster/${getUrlFriendlyName(graphster.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={graphster.image}
              alt={graphster.name}
              className="deskterproduct-image"
            />
            <h2 className="deskterproduct-name">{graphster.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GraphsterPage;
