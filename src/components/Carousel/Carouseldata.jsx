import React, { useRef, useState } from "react";
import { MovieData } from "./carousel-movielist";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carouseldata.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carouseldata = () => {
  return (
    <div className="carousel-style">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {MovieData.map((obj) => (
          <SwiperSlide>
            <div className="carousel-container">
            <div className="content-details">
              <img src={obj.posterUrl} alt="img" />
              <div className="watch-btn">
              <button className="watch-btn1">Watch Now</button>
              <button className="watch-btn2">+</button>
              </div>
              <p className="legend">{obj.subTitle}</p>
              
            </div>
            <div className="poster">
            <img src={obj.posterUrl} alt="img2" /> 
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carouseldata;
