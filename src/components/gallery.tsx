import { useState } from "react";
import img1 from "../assest/products/pr1.png";
import img2 from "../assest/products/pr2.png";
import img3 from "../assest/products/pr3.png";
import img4 from "../assest/products/pr4.png";
import left from "../assest/left.png";
import right from "../assest/right.png";

export default function Gallery() {
  const [change, setChange] = useState<string>(img1);
  const [galleryModal, setgalleryModal] = useState<boolean>(false);
  const [countnum, setCountNum] = useState(1);

  const changeImg = (newImage: string) => {
    setChange(newImage);
  };

  const openGalleryModal = () => {
    setgalleryModal(true);
  };

  return (
    <>
      {galleryModal ? <div className="blackbackground"></div> : <div></div>}
      <div className={`gallery ${galleryModal ? "active" : ""}`}>
        {galleryModal ? (
          <button className="colorX" onClick={() => setgalleryModal(false)}>
            X
          </button>
        ) : (
          <div></div>
        )}
        <div className="mine_img">
          {galleryModal ? (
            <>
              <img
                src={`/src/assest/products/pr${countnum}.png`}
                alt="product"
              />
            </>
          ) : (
            <>
              <img
                src={change}
                onClick={openGalleryModal}
                alt="product"
                className="wbig"
              />
              <img
                src={`/src/assest/products/pr${countnum}.png`}
                alt="product"
                className="wsmall"
              />
            </>
          )}
        </div>

        <div className="arrows1">
          <img
            src={left}
            onClick={() => setCountNum(countnum <= 1 ? countnum : countnum - 1)}
            className="left"
          />{" "}
          <img
            src={right}
            onClick={() => setCountNum(countnum >= 4 ? countnum : countnum + 1)}
            className="right"
          />
        </div>

        {galleryModal ? (
          <>
            <div className="arrows">
              <img
                src={left}
                onClick={() =>
                  setCountNum(countnum <= 1 ? countnum : countnum - 1)
                }
                className="left"
              />{" "}
              <img
                src={right}
                onClick={() =>
                  setCountNum(countnum >= 4 ? countnum : countnum + 1)
                }
                className="right"
              />
            </div>
          </>
        ) : null}
        <div className="select_img">
          <img
            src={img1}
            onClick={() => changeImg(img1)}
            style={change === img1 ? { opacity: 0.5 } : { opacity: 1 }}
            alt="product"
          />
          <img
            src={img2}
            onClick={() => changeImg(img2)}
            style={change === img2 ? { opacity: 0.5 } : { opacity: 1 }}
            alt="product"
          />
          <img
            src={img3}
            onClick={() => changeImg(img3)}
            style={change === img3 ? { opacity: 0.5 } : { opacity: 1 }}
            alt="product"
          />
          <img
            src={img4}
            onClick={() => changeImg(img4)}
            style={change === img4 ? { opacity: 0.5 } : { opacity: 1 }}
            alt="product"
          />
        </div>
      </div>
    </>
  );
}
