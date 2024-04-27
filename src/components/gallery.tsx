import { useState } from "react";
import img1 from "../assest/products/pr1.png";
import img2 from "../assest/products/pr2.png";
import img3 from "../assest/products/pr3.png";
import img4 from "../assest/products/pr4.png";
import left from "../assest/left.png";
import right from "../assest/right.png";

export default function Gallery() {
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryModal, setGalleryModal] = useState(false);

  const changeImg = (newImageIndex: number) => {
    setCurrentImageIndex(newImageIndex);
  };

  const openGalleryModal = () => {
    setGalleryModal(true);
  };

  const closeGalleryModal = () => {
    setGalleryModal(false);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      {galleryModal && <div className="blackbackground"></div>}
      <div className={`gallery ${galleryModal ? "active" : ""}`}>
        {galleryModal && (
          <button className="colorX" onClick={closeGalleryModal}>
            X
          </button>
        )}
        <div className="mine_img">
          {galleryModal ? (
            <>
              <img
                src={images[currentImageIndex]}
                onClick={openGalleryModal}
                alt="product"
              />
            </>
          ) : (
            <>
              <img
                src={images[currentImageIndex]}
                onClick={openGalleryModal}
                alt="product"
                className="wbig"
              />
              <img
                src={images[currentImageIndex]}
                alt="product"
                className="wsmall"
              />
            </>
          )}
        </div>
        {galleryModal && (
          <div className="arrows">
            <img src={left} className="left" onClick={prevImage} />
            <img src={right} className="right" onClick={nextImage} />
          </div>
        )}
          <div className="arrows1">
            <img src={left} className="left" onClick={prevImage} />
            <img src={right} className="right" onClick={nextImage} />
          </div>
        <div className="select_img">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => changeImg(index)}
              style={
                currentImageIndex === index ? { opacity: 0.5 } : { opacity: 1 }
              }
              alt="product"
            />
          ))}
        </div>
      </div>
    </>
  );
}
