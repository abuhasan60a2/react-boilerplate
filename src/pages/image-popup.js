import React, { useState } from "react";
import Link from "next/link";
import ImagePopup from "../components/common/modals/ImagePopup";
import "react-18-image-lightbox/style.css";

const images = [
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/1.png",
];
const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const openModal = () => {
    setIsOpen(true);
    setPhotoIndex(0); // Set the initial index to 0
  };
  return (
    <div>
      <button onClick={openModal}>Open Lightbox</button>
      <div className="modal-content">
        <ImagePopup
          images={images}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      </div>
    </div>
  );
};
export default ImageModal;
