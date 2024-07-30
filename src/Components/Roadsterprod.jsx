import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ROADSTER } from "../data/Products";
import ProductOptions from "./ProductOptions";
import "../Css/Deskterprod.css";
const RoadsterProd = () => {
  const { roadsterId } = useParams(null);
  const [roadster, setRoadster] = useState(null);

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

    const roadsterName = urlFriendlyToName(roadsterId);
    setRoadster(
      ROADSTER.find((f) => getUrlFriendlyName(f.name) === roadsterId)
    );
  }, [roadsterId]);

  useEffect(() => {
    if (roadster) {
      console.log("Setting background image:", roadster.image);
      magnifierRef.current.style.backgroundImage = `url(${roadster.image})`;
    }
  }, [roadster]);

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
  }, [roadster]);

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

  if (!roadster) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="desktermain-container">
      <div className="deskterprod-container">
        <div className="deskterimage-container">
          <img
            src={roadster.image}
            alt={roadster.name}
            className="deskterimage zoom-image"
            id="main-zoom"
            style={{ height: "335.99px", width: "503.99px" }}
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
          <h3 className="deskterproduct-title">{roadster.name}</h3>
          <h6 className="deskterproduct-subtitle">{roadster.subname}</h6>
          <p className="deskterproduct-description">{roadster.subdesc}</p>
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
              {roadster.content && (
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
              <div id="desktertext-desc">{roadster.description}</div>
            </div>
            {roadster.content && (
              <div
                className="tab-pane fade"
                id="nav-content"
                role="tabpanel"
                aria-labelledby="nav-content-tab"
              >
                <div id="desktertext-desc">{roadster.content}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {roadster.options && (
        <div className="deskteroptions-center">
          <ProductOptions options={roadster.options} />
        </div>
      )}
    </div>
  );
};

export default RoadsterProd;
