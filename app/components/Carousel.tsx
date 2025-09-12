"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import modules
import { Pagination } from "swiper/modules";

const Carousel: FC = () => {
  return (
    <div className="w-full h-[400px] flex justify-center pl-8">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30} // negative space so next slide shows more
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {/* First Slide */}
        <SwiperSlide className="w-[8%] rounded-xl overflow-hidden relative">
          <img
            src="https://s.krea.ai/announce-wan-2-2-image.webp"
            alt="WAN 2.2"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
          {/* Overlay text */}
          <div className="absolute bottom-5 left-5 text-white z-10">
            <h2 className="text-3xl font-semibold">WAN 2.2 Image generation</h2>
            <p className="w-[400px] text-sm mt-2">
              Generate complex images with the brand new and powerful WAN 2.2 model. 
              Exceptional prompt adherence and ultra-realistic textures.
            </p>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide className="w-[85%] rounded-xl overflow-hidden relative">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/421/227/small/purple-lavender-color-background-free-vector.jpg"
            alt="Second"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          <h2 className="absolute bottom-5 left-5 text-xl font-bold text-white z-10">
            Second Slide
          </h2>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide className="w-[85%] rounded-xl overflow-hidden relative">
          <img
            src="https://picsum.photos/800/400?grayscale"
            alt="Third"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          <h2 className="absolute bottom-5 left-5 text-xl font-bold text-white z-10">
            Third Slide
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
