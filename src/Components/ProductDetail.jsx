import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PRODUCTS } from "../data/Products";
import "../Css/Hardware.css";
import ProductOptions from "./ProductOptions";
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const navTabs = document.querySelectorAll("#nav-tab .nav-link");
  const tabPanes = document.querySelectorAll(".tab-pane");

  const options = [
    {
      label: "Chipset Motherboard",
      values: ["Intel H310 Chipset Motherboard", "Other Chipset"],
    },
    {
      label: "OS",
      values: ["Windows 10 64-bit", "Windows 11 64-bit"],
    },
    {
      label: "CPU",
      values: ["i7-8700 6 Core 3.5 GHz (4.0 Turbo), 8.25MB Cache", "Other CPU"],
    },
    {
      label: "RAM",
      values: ["16 GB PC4-19200 DDR4 2400", "32 GB PC4-19200 DDR4 2400"],
    },
    {
      label: "Video Card",
      values: ["OnBoard", "Dedicated Video Card"],
    },
    {
      label: "OS Drive",
      values: [
        "512 GB M.2 NVMe PCIe Solid State Drive - PRO!",
        "1 TB M.2 NVMe PCIe Solid State Drive",
      ],
    },
    {
      label: "Training",
      values: ["Free Training with Purchase", "Paid Training"],
    },
  ];

  navTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      navTabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      tabPanes.forEach((pane) => pane.classList.remove("show", "active"));
      tabPanes[index].classList.add("show", "active");
    });
  });
  useEffect(() => {
    setProduct(PRODUCTS.find(({ id }) => id === Number(productId)));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <div className="prod-container">
        <div className="prodimage-container">
          <img
            src={product.image}
            alt={product.name}
            className="prodimage"
            style={{ height: "350px", width: "350px" }}
          />
        </div>
        <div className="proddetails-container">
          <h3 className="prodproduct-title">{product.name}</h3>
          <h6 className="prodproduct-subtitle">{product.subname}</h6>
          <p className="prodproduct-description">{product.subdesc}</p>
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
              {product.content && (
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
              <div id="prodtext-desc">{product.description}</div>
            </div>
            {product.content && (
              <div
                className="tab-pane fade"
                id="nav-content"
                role="tabpanel"
                aria-labelledby="nav-content-tab"
              >
                <div id="prodtext-desc">{product.content}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="options-center">
        <ProductOptions options={options} />
      </div>
    </div>
  );
};

export default ProductDetail;
