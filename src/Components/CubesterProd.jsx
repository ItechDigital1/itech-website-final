import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CUBESTER } from "../data/Products";
import ProductOptions from "./ProductOptions";
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
    <div className="main-container">
      <div className="deskter-container">
        <div className="deskterimage-container">
          <img
            src={cubester.image}
            alt={cubester.name}
            className="deskterimage"
          />
        </div>
        <div className="deskterdetails-container">
          <h3 className="deskterproduct-title">{cubester.name}</h3>
          <h6 className="deskterproduct-subtitle">{cubester.subname}</h6>
          <p className="deskterproduct-description">{cubester.subdesc}</p>
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
        {cubester.options && (
          <div className="options-center">
            <ProductOptions options={cubester.options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CubesterProd;
