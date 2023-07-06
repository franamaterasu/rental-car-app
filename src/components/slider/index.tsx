import { Carousel } from "react-responsive-carousel";
import { CarType } from "../../interfaces/cars.interface";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  slides: CarType[];
}

export const Slider = ({ slides }: Props): JSX.Element => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}>
      {slides.map((item, index) => {
        return (
          <div className="slider__item" key={index}>
            <img className="slider__image" alt={item.title} src={item.banner} />
            <h5 className="slider__title">
              {item.title.length <= 11
                ? item.title
                : `${item.title.slice(0, 20)}...`}
            </h5>
          </div>
        );
      })}
    </Carousel>
  );
};
