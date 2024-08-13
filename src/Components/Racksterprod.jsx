import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { RACKSTER } from "../data/Products";
import ProductOptions from "./ProductOptions";
// import NodeOptions from "./ProductOptions";
// import ReactImageMagnify from "react-image-magnify";
import ImageMagnifier from "./ImageMagnifier";
import "../Css/ImageMagnifier.css";
import "../Css/Deskterprod.css";
const RacksterProd = () => {
  const { racksterId } = useParams();
  const [rackster, setRackster] = useState(null);
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

  if (!rackster) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="desktermain-container">
      <div className="deskterprod-container">
        <div className="deskterimage-container">
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: rackster.name,
                isFluidWidth: true,
                src: rackster.image,
              },
              largeImage: {
                src: rackster.image,
                width: 1800,
                height: 1200,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "200%",
              },
            }}
          /> */}
          <ImageMagnifier imageSrc={rackster.image} alt={rackster.name} />
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
