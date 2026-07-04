import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { carouselData } from "./data";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={2000}
      >
        {carouselData.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
