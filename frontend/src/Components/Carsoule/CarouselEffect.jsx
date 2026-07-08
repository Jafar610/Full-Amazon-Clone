import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { carouselData } from "./data";
function CarouselEffect() {
  return (
    <div className="relative">
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {carouselData.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
        {/* linear-gradient in carousel like shadow at the bottom */}
      <div className="w-full h-80 absolute bottom-0 left-0 bg-gradient-to-t from-gray-300 to-transparent"></div>
    </div>
  );
}

export default CarouselEffect;
