import { React, useEffect } from "react";
import "../Css/RequestDemo.css";
import { POLICEDATA } from "../data/PoilceData";
import { useLocation } from "react-router-dom";

const RequestDemoPage = () => {
  const location = useLocation();
  const { description } = location.state || {};

  useEffect(() => {
    console.log("Location State: ", location.state);
  }, [location.state]);

  return (
    <div className="page">
      <div className="request-demo-page">
        <h2>Request Demo Form</h2>
        <form className="demo-form">
          <label>
            Full Name*
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </label>
          <label>
            Email*
            <input type="email" name="email" placeholder="Email" required />
          </label>
          <label>
            Mobile No.*
            <input type="tel" name="mobile" placeholder="Mobile No." required />
          </label>
          <label>
            Company*
            <input type="text" name="company" placeholder="Company" required />
          </label>
          <label>
            City*
            <input type="text" name="city" placeholder="City" required />
          </label>
          <label>
            Comment
            <textarea name="comment" placeholder="Drop comment"></textarea>
          </label>
          <p>You have reached the limit</p>
          <button type="submit">Send Request</button>
        </form>
      </div>
      {POLICEDATA.map((policedata) => {
        {
          policedata.description && (
            <div className="content-description">
              <h3>Item Description</h3>
              <p>{description}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default RequestDemoPage;
