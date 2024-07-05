import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PRODUCTS } from "../data/Products";
import "../Css/Hardware.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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
  useEffect(() => {
    setProduct(PRODUCTS.find(({ id }) => id === Number(productId)));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <section>
    //     <div className="col-sm-6" id="right">
    //       <div className="hardware-container">
    //         <div id="product-description" data-hook="product_description">
    //           <h3 className="product-title">{product.name}</h3>
    //           <h6 className="product-ifw">{product.subname}</h6>
    //           <h6 class="product-ifw">
    //             {product.subdesc}
    //             <br />
    //           </h6>
    //         </div>
    //         <div className="row">
    //           <div className="col-xs-12">
    //             <nav>
    //               <div
    //                 class="nav nav-tabs nav-fill"
    //                 id="nav-tab"
    //                 role="tablist"
    //               >
    //                 <a
    //                   class="nav-item nav-link active"
    //                   id="nav-description-tab"
    //                   data-toggle="tab"
    //                   href="#nav-description"
    //                   role="tab"
    //                   aria-controls="nav-description"
    //                   aria-selected="true"
    //                 >
    //                   Description
    //                 </a>
    //                 <a
    //                   class="nav-item nav-link"
    //                   id="nav-content-tab"
    //                   data-toggle="tab"
    //                   href="#nav-content"
    //                   role="tab"
    //                   aria-controls="nav-content"
    //                   aria-selected="false"
    //                 >
    //                   Content
    //                 </a>
    //               </div>
    //             </nav>

    //             <div
    //               className="tab-content py-3 px-3 px-sm-0"
    //               id="nav-tabContent"
    //             >
    //               <div
    //                 class="tab-pane fade show active"
    //                 id="nav-description"
    //                 role="tabpanel"
    //                 aria-labelledby="nav-description-tab"
    //               >
    //                 <ul id="text-desc">{product.description}</ul>
    //               </div>
    //               <div
    //                 className="tab-pane fade"
    //                 id="nav-content"
    //                 role="tabpanel"
    //                 aria-labelledby="nav-content-tab"
    //               >
    //                 <ul id="text-desc">{product.content}</ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="deskter-container">
      <div className="deskterimage-container">
        <img
          src={product.image}
          alt={product.name}
          className="deskterimage"
          style={{ height: "350px", width: "350px" }}
        />
      </div>
      <div className="deskterdetails-container">
        <h3 className="deskterproduct-title">{product.name}</h3>
        <h6 className="deskterproduct-subtitle">{product.subname}</h6>
        <p className="deskterproduct-description">{product.subdesc}</p>
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
            <div id="desktertext-desc">{product.description}</div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-content"
            role="tabpanel"
            aria-labelledby="nav-content-tab"
          >
            <div id="desktertext-desc">{product.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
