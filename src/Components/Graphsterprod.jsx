import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { GRAPHSTER } from "../data/Graphster";
import ProductOptions from "./ProductOptions";
import "../Css/Deskterprod.css";
const GraphsterProd = () => {
  const { graphsterId } = useParams();
  const [graphster, setGraphster] = useState(null);

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

    const graphsterName = urlFriendlyToName(graphsterId);
    setGraphster(
      GRAPHSTER.find((f) => getUrlFriendlyName(f.name) === graphsterId)
    );
  }, [graphsterId]);

  useEffect(() => {
    if (graphster) {
      console.log("Setting background image:", graphster.image);
      magnifierRef.current.style.backgroundImage = `url(${graphster.image})`;
    }
  }, [graphster]);

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
  }, [graphster]);

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

  if (!graphster) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="desktermain-container">
      <div className="deskterprod-container">
        <div className="deskterimage-container">
          <img
            src={graphster.image}
            alt={graphster.name}
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
          <h3 className="deskterproduct-title">{graphster.name}</h3>
          <h6 className="deskterproduct-subtitle">{graphster.subname}</h6>
          <p className="deskterproduct-description">{graphster.subdesc}</p>
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
              {graphster.content && (
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
              <div id="desktertext-desc">{graphster.description}</div>
            </div>
            {graphster.content && (
              <div
                className="tab-pane fade"
                id="nav-content"
                role="tabpanel"
                aria-labelledby="nav-content-tab"
              >
                <div id="desktertext-desc">{graphster.content}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {graphster.options && (
        <div className="deskteroptions-center">
          <ProductOptions options={graphster.options} />
        </div>
      )}
    </div>
  );
};

export default GraphsterProd;
