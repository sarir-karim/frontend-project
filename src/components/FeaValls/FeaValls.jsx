import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import "./FeaValls.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import img1 from "./imgs/img1.jpg";
import img2 from "./imgs/img2.jpg";
import img3 from "./imgs/img3.jpg";
export const data = [
  {
    cover: img1,
    title: "Inception",
  },
  {
    cover: img2,
    title: "Blade Runner 2049",
  },
  {
    cover: img3,
    title: "Icon man 3",
  },
];

export default function FeaValls(props) {
  const ref = React.useRef();
  return (
    <div className="valls-container">
      <article></article>
      <h5 className="vall-heading">Featured Villas</h5>
      <ResponsiveContainer
        className="vall-slide"
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={600}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              useGrabCursor
            />
          );
        }}
      />
      <>
        <div
          className="v-icons"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <BiChevronLeft className="v-left" />
        </div>
        <div
          className="v-icons"
          onClick={() => {
            ref.current?.goNext(4);
          }}
        >
          <BiChevronRight className="v-right" />
        </div>
      </>
    </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the abso8ute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div className="valls-main">
      <div className="valls-images">
        <img
          style={{
            height: "65vh",
            width: "255%",
            marginLeft: "-4rem",
            objectFit: "fill",
            borderRadius: 0,
            border: "2px solid red",
          }}
          className="vall-img"
          draggable={false}
          src={cover}
        />

        <div className="overlay-main">
          <div>
            <h5>Jumeirah </h5>
          </div>
          <div>
            <h5>100,00,000 AED </h5>
          </div>
        </div>
      </div>
    </div>
  );
});
