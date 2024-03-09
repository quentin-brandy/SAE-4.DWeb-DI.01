import CardEp from "../CardEp/CardEp.jsx";
import React, { useRef, useState } from 'react';
import { Virtual, Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './text.css'

export default function Carrousel() {
  

  return (
    <>
      <Swiper className=" bg-background md:pl-10 xl:pl-20 z-0"
        modules={[Virtual, Navigation]}
        navigation={true}
        slidesPerView={2}
        breakpoints={{
          // when window width is >= 320px
          800: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 4,
          },
          // when window width is >= 640px
          1440: {
            slidesPerView: 5,
          },
          1920: {
            slidesPerView: 6,
          }
        }}
        spaceBetween={10}
        virtual
      >
          <SwiperSlide>
            <CardEp/>
          </SwiperSlide>
          <SwiperSlide>
            <CardEp/>
          </SwiperSlide>
          <SwiperSlide>
            <CardEp/>
          </SwiperSlide>
          <SwiperSlide>
            <CardEp/>
          </SwiperSlide>
          <SwiperSlide>
            <CardEp/>
          </SwiperSlide>
          <SwiperSlide>
            <CardEp/>
          </SwiperSlide>
          <SwiperSlide>
            <CardEp/>
          </SwiperSlide>

          <SwiperSlide>
            <CardEp/>
          </SwiperSlide>
          <SwiperSlide>
            <CardEp/>
          </SwiperSlide>

      </Swiper>
    </>
  );
}
