import React from "react";
import "../Css/Software.css";
import { software } from "../data.config";
const Software = () => {
  return (
    <div className="software-container">
      <h4>Software</h4>
      <hr />

      {software.map((item, id) => (
        <div className="software-body">
          <div className="software-head">{item.head}</div>

          <div className="software-sub-head">{item.sub_head}</div>
          <div className="software-list">{item.list}</div>
        </div>
      ))}
    </div>
  );
};
export default Software;
