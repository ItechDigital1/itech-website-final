import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { CUBESTER } from "../data/Products";
import ProductOptions from "./ProductOptions";
import "../Css/Deskterprod.css";
// import ReactImageMagnify from "react-image-magnify";
import ImageMagnifier from "./ImageMagnifier";
import "../Css/ImageMagnifier.css";

const CubesterProd = () => {
  const { cubesterId } = useParams();
  const [cubester, setcubester] = useState(null);

  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  useEffect(() => {
    const urlFriendlyToName = (urlName) => {
      return urlName.replace(/-/g, " ");
    };

    const cubesterName = urlFriendlyToName(cubesterId);
    setcubester(
      CUBESTER.find((f) => getUrlFriendlyName(f.name) === cubesterId)
    );
  }, [cubesterId]);

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
  }, [cubester]);

  if (!cubester) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="desktermain-container">
      <div className="deskterprod-container">
        <div className="deskterimage-container">
          <ImageMagnifier imageSrc={cubester.image} alt={cubester.name} />
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: cubester.name,
                isFluidWidth: true,
                src: cubester.image,
              },
              largeImage: {
                src: cubester.image,
                width: 1800,
                height: 1200,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "200%",
              },
            }}
          /> */}
        </div>
        <div className="deskterdetails-container">
          <h3 className="deskterproduct-title">{cubester.name}</h3>
          <h6 className="deskterproduct-subtitle">{cubester.subname}</h6>
          <p className="deskterproduct-description">{cubester.subdesc}</p>
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
              {cubester.content && (
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
              <div id="desktertext-desc">{cubester.description}</div>
            </div>
            {cubester.content && (
              <div
                className="tab-pane fade"
                id="nav-content"
                role="tabpanel"
                aria-labelledby="nav-content-tab"
              >
                <div id="desktertext-desc">{cubester.content}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {cubester.options && (
        <div className="deskteroptions-center">
          <ProductOptions options={cubester.options} />
        </div>
      )}
    </div>
  );
};

export default CubesterProd;
