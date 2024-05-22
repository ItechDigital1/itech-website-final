import React, { useState } from "react";
import "../Css/Gallery.css";
import { Images } from "../data.config";
import { Modal } from "react-bootstrap";

const Gallery = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (id) => {
    setCurrentIndex(id);
    setModalShow(true);
  };
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Images.length) % Images.length
    );
  };
  const { src, name, description } = Images[currentIndex];

  return (
    <div className="gallery">
      <div className="gallery-head">
        <h1>Itech Image Gallery</h1>
      </div>
      <div className="gallery-body">
        {Images.map((items, id) => (
          <div className="gallery-container" key={id}>
            <img
              src={items.src}
              alt={items.name}
              onClick={() => handleImageClick(id)}
            />
          </div>
        ))}
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered
        size="l"
      >
        <Modal.Header>
          <button className="close-button" onClick={() => setModalShow(false)}>
            &times;
          </button>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content">
            <button className="prev-button" onClick={handlePrevImage}>
              &#8249;
            </button>
            <img src={src} className="modal-img" alt={name} />
            <button className="next-button" onClick={handleNextImage}>
              &#8250;
            </button>
          </div>
          <p>{description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
/*

```jsx
import React from 'react';

// Define Tailwind CSS class constants
const GALLERY_CONTAINER = "max-w-5xl mx-auto p-5 text-center";
const TITLE_CLASS = "text-2xl mb-5";
const GRID_CLASS = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4";
const ITEM_CLASS = "border border-gray-300 p-2.5";
const IMAGE_CLASS = "w-full h-auto";

// GalleryItem component for individual items
const GalleryItem = ({ src, alt }) => (
    <div className={ITEM_CLASS}>
        <img src={src} alt={alt} className={IMAGE_CLASS} />
    </div>
);

// Main Gallery component
const Gallery = () => {
    // Array of image URLs and alt text
    const items = Array.from({ length: 8 }, (_, index) => ({
        src: `https://placehold.co/200x200`,
        alt: `Product ${index + 1}`
    }));

    return (
        <div id="gallery" className={GALLERY_CONTAINER}>
            <h1 className={TITLE_CLASS}>ITECH Gallery</h1>
            <div className={GRID_CLASS}>
                {items.map((item, index) => (
                    <GalleryItem key={index} src={item.src} alt={item.alt} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
```
. */
