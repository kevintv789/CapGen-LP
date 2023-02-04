import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper";
import Step1 from "../../../assets/step1.png";
import Step2 from "../../../assets/step2.png";
import Step3 from "../../../assets/step3.png";
import Step4 from "../../../assets/step4.png";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "./Carousel.css";

type Props = {
  onSliderChange: (index: number) => void;
};

const Carousel: React.FC<Props> = ({ onSliderChange }) => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={(e) => onSliderChange(e.activeIndex)}
      >
        <SwiperSlide>
          <img src={Step1} className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Step2} className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Step3} className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Step4} className="slider-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
