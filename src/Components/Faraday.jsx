import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FARADAYS } from "../data/FaradayData";
import "../Css/Faraday.css";
// Product Page
import ReactImageMagnify from "react-image-magnify";
const Faraday = () => {
  const { faradayId } = useParams();
  const [faraday, setFaraday] = useState(null);

  useEffect(() => {
    const urlFriendlyToName = (urlName) => {
      return urlName.replace(/-/g, " ");
    };

    const faradayName = urlFriendlyToName(faradayId);
    setFaraday(FARADAYS.find((f) => getUrlFriendlyName(f.name) === faradayId));
  }, [faradayId]);

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
  }, [faraday]);

  const getUrlFriendlyName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  if (!faraday) {
    return <div>Loading...</div>;
  }

  return (
    <div className="faraday-container">
      <div className="faradayimage-container">
        {/* <img src={faraday.image} alt={faraday.name} className="faraday-image" /> */}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: faraday.name,
              isFluidWidth: true,
              src: faraday.image,
            },
            largeImage: {
              src: faraday.image,
              width: 1800,
              height: 1200,
            },
            enlargedImageContainerDimensions: {
              width: "100%",
              height: "100%",
            },
          }}
        />
      </div>
      <div className="details-container">
        <h3 className="product-title">{faraday.name}</h3>
        <h6 className="product-subtitle">{faraday.subname}</h6>
        <p className="product-description">{faraday.subdesc}</p>
        <nav>
          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-description-tab"
              data-toggle="tab"
              href="#nav-description"
              role="tab"
              aria-controls="nav-description"
              aria-selected="true"
            >
              Description
            </a>
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
          </div>
        </nav>
        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-description"
            role="tabpanel"
            aria-labelledby="nav-description-tab"
          >
            <div id="faradaytext-desc">{faraday.description}</div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-content"
            role="tabpanel"
            aria-labelledby="nav-content-tab"
          >
            <div id="faradaytext-desc">{faraday.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faraday;

/*
const { faradayId } = useParams();
  const faraday = FARADAYS.find((f) => f.id === parseInt(faradayId));
  if (!faraday) {
    return <div>Product not found</div>;
  }
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <img
          src={faraday.image}
          alt={faraday.name}
          style={{ width: 400, height: 400, objectFit: "cover" }}
        />
        <h2>{faraday.name}</h2>
        <p>{faraday.description}</p>
      </div>
    </div>
  );
*/
