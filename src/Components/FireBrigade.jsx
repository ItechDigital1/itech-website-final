import React from 'react';
import "../Css/FireBrigade.css";
import FireBrigadeImg from "../img/icon/FireBrigade.jpg";

const FireBrigade = () => {
  return (
    <section className="fire-brigade-section">
      <div className="container">
        <div className="roller">
          <div className="col-sm-6" id="left">
            <div className="image-container">
              <img
                className="my-foto"
                src={FireBrigadeImg}
                alt="Fire brigade Tab Bracket"
              />
            </div>
          </div>
          <div className="col-sm-6" id="right">
            <section id="tabs">
              <div className="product-description" data-hook="product_description">
                <h3 className="product-title">Fire brigade Tab Bracket</h3>
                <h6 className="product-ifw">Fire brigade Tab Bracket Installation</h6>
                <h6 className="product-ifw">SKU: FB-1101</h6>
              </div>
              <div className="tab-container">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-description-tab"
                      data-toggle="tab"
                      href="#nav-description"
                      role="tab"
                      aria-controls="nav-description"
                      aria-selected="true"
                    >
                      Features
                    </a>
                  </div>
                </nav>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="nav-description"
                    role="tabpanel"
                    aria-labelledby="nav-description-tab"
                  >
                    <p className="txt-desc">
                      On seeing the Success of the Rugged design of the Mumbai Police Vehicles ITECH was requested to
                      redesign and replace existing brackets as per the requirement, ITECH successfully Manufactured
                      and Installed 350 Vehicles of various models for the Fire brigade within 2 months.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FireBrigade;
