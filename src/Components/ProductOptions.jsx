import React from "react";
// import { PRODUCTS } from "../data/Products";
import "../Css/productOption.css";
const ProductOptions = ({ options }) => {
  return (
    <div className="option-container">
      <h3>Options</h3>
      <div className="option-details">
        {options.map((option, index) => (
          <div className="option-item" key={index}>
            <label htmlFor={`option-${index}`}>{option.label}:</label>
            <select id={`option-${index}`} className="option-select">
              {option.values.map((value, valueIndex) => (
                <option key={valueIndex} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button className="get-quote-button">Get Quote</button>
    </div>
  );
};

export default ProductOptions;
