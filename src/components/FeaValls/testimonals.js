import React from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "./FeaValls.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;

  console.log(coverImage);
  return (
    <div  className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div style={{width: '100%', height: 300}} className="detail fill">
        <div className="discription">
          <img
            alt="j"
            className="cover-image"
            src={coverImage}
          />
        </div>
      </div>
    </div>
  );
});

export default Slide;