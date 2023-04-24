import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./carrousely.module.css";
type Props = {};

export default function Carrousely({}: Props) {
  return (
    <Swiper className="swiper-wrapper" style={style}>
      <div className="swiper-wrapper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </div>
    </Swiper>
  );
}
