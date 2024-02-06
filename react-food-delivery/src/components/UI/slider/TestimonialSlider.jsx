import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/cust_pic.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Tasty Treat got a wide variety of food products to fulfill my changing taste."
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jonny</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Cutomer Service is really great and I would recommend everyone to visit atleast once"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Harshit Godara</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Wonderful place to visit with family and friends also the vibes were great!!!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Deepanshu</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
