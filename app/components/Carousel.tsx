"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import modules
import { Pagination } from "swiper/modules";

const Carousel: FC = () => {
  return (
    <div className="w-full h-[400px] flex justify-center pl-8 pr-1">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50} // negative space so next slide shows more
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {/* First Slide */}
        <SwiperSlide className="w-[61%]! bg-amber-500 rounded-xl overflow-hidden relative">
          <img
            src="https://s.krea.ai/announce-wan-2-2-image.webp"
            alt="WAN 2.2"
            className="w-full h-full"
          />
        
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          {/* Overlay text */}
          <div className="absolute bottom-7 left-5 text-white z-10">
            <h2 className="text-3xl font-medium">WAN 2.2 Image generation</h2>
            <p className="w-[400px] text-sm mt-2">
              Generate complex images with the brand new and powerful WAN 2.2 model. 
              Exceptional prompt adherence and ultra-realistic textures.
            </p>
          </div>

          <button className="absolute bottom-7 right-5 bg-white z-10 font-medium rounded-3xl pl-5 pr-5 pt-3 pb-3">
            Try WAN 2.2
          </button>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide className="w-[50%]! overflow-hidden relative rounded-xl">
          <img
            src="https://s.krea.ai/OSSKreaFlux1_poster.webp"
            alt="FLUX"
            className="w-full h-full"
          />
        
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          {/* Overlay text */}
          <div className="absolute bottom-7 left-5 text-white z-10">
            <h2 className="text-3xl font-medium">FLUX.1 Krea</h2>
            <p className="w-[400px] text-sm mt-2">
              We're making the weights to our FLUX.1 Krea model open-source.
              Download and run our model weights, read the technical report, or generate with it in Krea image.
            </p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Carousel;
