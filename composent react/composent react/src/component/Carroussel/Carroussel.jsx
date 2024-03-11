import CardEp from "../Card/CardEp.jsx";
import React, { useRef, useState } from 'react';
import { Virtual, Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
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
