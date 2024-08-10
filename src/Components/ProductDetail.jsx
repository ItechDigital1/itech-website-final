import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/Products";
import "../Css/Hardware.css";
import ProductOptions from "./ProductOptions";
import ReactImageMagnify from "react-image-magnify";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // const [magnifierStyle, setMagnifierStyle] = useState({ display: "none" });
  // const magnifierRef = useRef(null);
  // const mainImageRef = useRef(null);
  // const preloadedImage = new Image();

  useEffect(() => {
    const foundProduct = PRODUCTS.find(({ id }) => id === Number(productId));
    setProduct(foundProduct);
  }, [productId]);

  // useEffect(() => {
  //   if (product) {
  //     console.log("Setting background image:", product.image);
  //     preloadedImage.src = product.image;
  //     magnifierRef.current.style.backgroundImage = `url(${preloadedImage.src})`;
  //   }
  // }, [product]);

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

  // const handleMouseMove = (e) => {
  //   const rect = mainImageRef.current.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;

  //   const magnifierWidth = magnifierRef.current.offsetWidth;
  //   const magnifierHeight = magnifierRef.current.offsetHeight;

  //   setMagnifierStyle({
  //     display: "block",
  //     left: `${x - magnifierWidth / 2}px`,
  //     top: `${y - magnifierHeight / 2}px`,
  //     backgroundPosition: `calc(-${x * 2}px + ${magnifierWidth / 2}px),
  //                           calc(-${y * 2}px + ${magnifierHeight / 2}px)`,
  //   });
  // };

  // const handleMouseLeave = () => {
  //   setMagnifierStyle({ display: "none" });
  // };

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
        <div
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
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "200%",
              },
            }}
          />
        </div>
        {/* <div
            className="magnifier"
            id="magnifier"
            ref={magnifierRef}
            style={magnifierStyle}
          ></div> // style={{ height: "336px", width: "440px" }}
            // onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseLeave}
            // ref={mainImageRef} */}
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
