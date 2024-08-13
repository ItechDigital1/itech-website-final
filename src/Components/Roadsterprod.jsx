import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ROADSTER } from "../data/Products";
import ProductOptions from "./ProductOptions";
import "../Css/Deskterprod.css";
// import ReactImageMagnify from "react-image-magnify";
import ImageMagnifier from "./ImageMagnifier";
import "../Css/ImageMagnifier.css";
const RoadsterProd = () => {
  const { roadsterId } = useParams(null);
  const [roadster, setRoadster] = useState(null);

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

  if (!roadster) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="desktermain-container">
      <div className="deskterprod-container">
        <div className="deskterimage-container">
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: roadster.name,
                isFluidWidth: true,
                src: roadster.image,
              },
              largeImage: {
                src: roadster.image,
                width: 1800,
                height: 1200,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "200%",
              },
            }}
          /> */}
          <ImageMagnifier imageSrc={roadster.image} alt={roadster.name} />
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
