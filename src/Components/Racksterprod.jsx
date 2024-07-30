import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { RACKSTER } from "../data/Products";
import ProductOptions from "./ProductOptions";
// import NodeOptions from "./ProductOptions";
import "../Css/Deskterprod.css";
const RacksterProd = () => {
  const { racksterId } = useParams();
  const [rackster, setRackster] = useState(null);

  const [magnifierStyle, setMagnifierStyle] = useState({ display: "none" });
  const magnifierRef = useRef(null);
  const mainImageRef = useRef(null);

  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  useEffect(() => {
    const urlFriendlyToName = (urlName) => {
      return urlName.replace(/-/g, " ");
    };

    const racksterName = urlFriendlyToName(racksterId);
    setRackster(
      RACKSTER.find((f) => getUrlFriendlyName(f.name) === racksterId)
    );
  }, [racksterId]);

  useEffect(() => {
    if (rackster) {
      console.log("Setting background image:", rackster.image);
      magnifierRef.current.style.backgroundImage = `url(${rackster.image})`;
    }
  }, [rackster]);

  useEffect(() => {
    const navTabs = document.querySelectorAll("#nav-tab .nav-link");
    const tabPanes = document.querySelectorAll(".tab-pane");

    navTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        navTabs.forEach((tab) => tab.classList.remove("active"));
        tab.classList.add("active");

        tabPanes.forEach((pane) => pane.classList.remove("show", "active"));
        tabPanes[index].classList.add("show", "active");
      });
    });
  }, [rackster]);

  const handleMouseMove = (e) => {
    const rect = mainImageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const magnifierWidth = magnifierRef.current.offsetWidth;
    const magnifierHeight = magnifierRef.current.offsetHeight;

    setMagnifierStyle({
      display: "block",
      left: `${x - magnifierWidth / 2}px`,
      top: `${y - magnifierHeight / 2}px`,
      backgroundPosition: `-${x * 2 - magnifierWidth / 2}px -${
        y * 2 - magnifierHeight / 2
      }px`,
    });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: "none" });
  };

  if (!rackster) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="desktermain-container">
      <div className="deskterprod-container">
        <div className="deskterimage-container">
          <img
            src={rackster.image}
            alt={rackster.name}
            style={{ height: "335.99px", width: "503.99px" }}
            className="deskterimage zoom-image"
            id="main-zoom"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={mainImageRef}
          />
          <div
            className="magnifier"
            id="magnifier"
            ref={magnifierRef}
            style={magnifierStyle}
          ></div>
        </div>
        <div className="deskterdetails-container">
          <h3 className="deskterproduct-title">{rackster.name}</h3>
          <h6 className="deskterproduct-subtitle">{rackster.subname}</h6>
          <p className="deskterproduct-description">{rackster.subdesc}</p>
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                href="#nav-description"
                className="nav-item nav-link active"
                id="nav-description-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="nav-description"
                aria-selected="true"
              >
                Description
              </a>
              {rackster.content && (
                <a
                  className="nav-item nav-link"
                  id="nav-content-tab"
                  data-toggle="tab"
                  href="#nav-content"
                  role="tab"
                  aria-controls="nav-content"
                  aria-selected="false"
                >
                  Content
                </a>
              )}
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-description"
              role="tabpanel"
              aria-labelledby="nav-description-tab"
            >
              <div id="desktertext-desc">{rackster.description}</div>
            </div>
            {rackster.content && (
              <div
                className="tab-pane fade"
                id="nav-content"
                role="tabpanel"
                aria-labelledby="nav-content-tab"
              >
                <div id="desktertext-desc">{rackster.content}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {rackster.options && (
        <div className="deskteroptions-center">
          <ProductOptions options={rackster.options} />
        </div>
      )}
    </div>
  );
};

export default RacksterProd;
