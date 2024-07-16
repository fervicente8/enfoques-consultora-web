import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/image9.jpg";
import image2 from "../images/image10.jpg";
import image3 from "../images/image11.jpg";
import image4 from "../images/image12.jpg";
import styles from "./Slider.module.css";

const Slider = () => {
  const slides = [image1, image2, image3, image4];

  return (
    <Carousel
      autoPlay
      interval={5000}
      showThumbs={false}
      infiniteLoop={true}
      showArrows={false}
      className={styles.slider}
      swipeable={false}
      showIndicators={false}
      showStatus={false}
    >
      {slides.map((image, index) => (
        <div key={index}>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
