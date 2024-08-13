import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/Products";
import "../Css/Hardware.css";
import ProductOptions from "./ProductOptions";
// import ReactImageMagnify from "react-image-magnify";
//"react-image-zoom": "^1.3.1",
import ImageMagnifier from "./ImageMagnifier";
import "../Css/ImageMagnifier.css";
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = PRODUCTS.find(({ id }) => id === Number(productId));
    setProduct(foundProduct);
  }, [productId]);

  useEffect(() => {
    const navTabs = document.querySelectorAll("#nav-tab .nav-link");
    const tabPanes = document.querySelectorAll(".tab-pane");

    navTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        navTabs.forEach((tab) => tab.classList.remove("active"));
        tabPanes.forEach((pane) => pane.classList.remove("show", "active"));

        tab.classList.add("active");
        tabPanes[index].classList.add("show", "active");
      });
    });
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <div className="prod-container">
        {/* <div className="prodimage-container">
          <img
            src={product.image}
            alt={product.name}
            className="prodimage zoom-image"
            id="main-zoom"
          />
        </div> */}
        <ImageMagnifier imageSrc={product.image} alt={product.name} />
        {/* <div
          className="prodimage-container"
          style={{ display: "inline-block" }}
        >
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.name,
                isFluidWidth: true,
                src: product.image,
              },
              largeImage: {
                src: product.image,
                width: 650,
                height: 650,
              },
              enlargedImageContainerDimensions: {
                width: "100%",
                height: "100%",
              },
            }}
          />
        </div> */}
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
      {product.options && (
        <div className="options-center">
          <ProductOptions options={product.options} />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
