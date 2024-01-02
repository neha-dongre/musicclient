import React from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";

function Carousel({ images }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings} className={styles.carousel}>
        {images.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={item} key={index} alt="Product Name" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Carousel;
