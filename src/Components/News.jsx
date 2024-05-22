import React from "react";
import "../Css/News.css";

import { New } from "../data.config";
const News = () => {
  return (
    <div className="news-container">
      <hr />
      <h3>Latest ITECH News</h3>
      <hr />

      {New.map((item, id) => (
        <div className="news-body">
          <div className="news-head">{item.head}</div>
          <div className="news-desc">{item.desc}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default News;
