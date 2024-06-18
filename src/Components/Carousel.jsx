import react, { useState, useEffect } from "react";
import "../Css/Header.css";
// import {itech_main_video} from "../video/itech_main_video.mp4"
// import jsonfile from "../images.json"
const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("../src/images.json");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const handleSlideChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="App">
      <div className="carousel-container">
        <div className="carousel-content">
          {images.map((image, index) => (
            <div
              key={image.id || index}
              className={`carousel-image-wrapper ${
                currentImage === index ? "active" : ""
              }`}
            >
              <img
                className="carousel-image"
                src={image.src}
                alt={image.alt || "Image"}
                onClick={() => handleSlideChange(index)}
              />
              <div className="carousel-image-info">
                <h3 className="carousel-image-name">{image.name}</h3>
                <p className="carousel-image-alt">{image.alt || "Image"}</p>
                <div className="read-more-button-wrapper">
                  {/* <button
                    className="read-more-button"
                    onClick={() => handleReadMore(image.id)}
                  >
                    Read More
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
