import React, { useEffect, useRef, useState } from "react";
import "../Css/ImageMagnifier.css";

const ImageMagnifier = ({ imageSrc, alt, magnifierSize = 150 }) => {
  const imageRef = useRef(null);
  const magnifierRef = useRef(null);
  const [magnifierStyle, setMagnifierStyle] = useState({});

  useEffect(() => {
    const image = imageRef.current;
    const magnifier = magnifierRef.current;

    const handleMouseMove = (e) => {
      if (!image || !magnifier) return;

      const { left, top, width, height } = image.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const newX = Math.max(
        Math.min(x - magnifierSize / 2, width - magnifierSize),
        0
      );
      const newY = Math.max(
        Math.min(y - magnifierSize / 2, height - magnifierSize),
        0
      );

      setMagnifierStyle({
        left: `${newX}px`,
        top: `${newY}px`,
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: `${width * 2}px ${height * 2}px`,
        backgroundPosition: `-${newX * 2}px -${newY * 2}px`,
      });
    };

    const handleMouseOut = () => {
      setMagnifierStyle({});
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseout", handleMouseOut);

    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseout", handleMouseOut);
    };
  }, [imageSrc, magnifierSize]);

  return (
    <div className="image-magnifier-container">
      <img
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        className="image-magnifier-image"
      />
      <div
        ref={magnifierRef}
        className="image-magnifier-magnifier"
        style={magnifierStyle}
      />
    </div>
  );
};

export default ImageMagnifier;
