import React from "react";
import { Link } from "react-router-dom";
import { GRAPHSTER } from "../data/Products";

const GraphsterPage = () => {
  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="deskterproduct-list">
      {GRAPHSTER.map((graph) => (
        <div key={graph.id} className="deskterproduct-item">
          <Link
            to={`/deskter/${getUrlFriendlyName(graph.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={graph.image}
              alt={graph.name}
              className="deskterproduct-image"
            />
            <h2 className="deskterproduct-name">{graph.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GraphsterPage;
