"use client";
import { FC, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel: FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  // const swiperRef = useRef<any>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    if (
      prevRef.current &&
      nextRef.current &&
      paginationRef.current &&
      swiper.params
    ) {
      // Attach refs manually
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.params.pagination.el = paginationRef.current;

      // Re-init navigation + pagination
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();

      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.pagination.update();
    }
  }, []);

  return (
    <div className="relative mt-7 w-full h-[250px] md:h-[400px] flex justify-center pl-2 md:pl-8 pr-2 md:pr-1 mb-30">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          768: {
            slidesPerView: "auto",
            spaceBetween: 40,
          },
        }}
        className="w-full h-full"
      >
        {/* First Slide */}
        <SwiperSlide className="w-full md:w-[61%]! rounded-[30px] overflow-hidden relative">
          <img
            src="https://s.krea.ai/announce-wan-2-2-image.webp"
            alt="WAN 2.2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          <div className="absolute bottom-5 md:bottom-7 left-3 md:left-5 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-medium">WAN 2.2 Image generation</h2>
            <p className="w-full md:w-[400px] text-xs md:text-sm mt-1 md:mt-2">
              Generate complex images with the brand new and powerful WAN 2.2
              model. Exceptional prompt adherence and ultra-realistic textures.
            </p>
          </div>
          <button className="absolute bottom-5 md:bottom-7 right-3 md:right-5 bg-white z-10 font-medium rounded-2xl md:rounded-3xl px-3 md:px-5 py-2 md:py-3 shadow-md text-sm">
            Try WAN 2.2
          </button>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide className="w-full md:w-[50%]! overflow-hidden relative rounded-[30px]">
          <img
            src="https://s.krea.ai/OSSKreaFlux1_poster.webp"
            alt="FLUX"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          <div className="absolute bottom-5 md:bottom-7 left-3 md:left-5 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-medium">FLUX.1 Krea</h2>
            <p className="w-full md:w-[400px] text-xs md:text-sm mt-1 md:mt-2">
              We're making the weights to our FLUX.1 Krea model open-source.
              Download and run our model weights, read the technical report, or
              generate with it in Krea image.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full md:w-[61%]! rounded-[30px] overflow-hidden relative">
          <img
            src="https://s.krea.ai/announce-wan-2-2-image.webp"
            alt="WAN 2.2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          <div className="absolute bottom-5 md:bottom-7 left-3 md:left-5 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-medium">WAN 2.2 Image generation</h2>
            <p className="w-full md:w-[400px] text-xs md:text-sm mt-1 md:mt-2">
              Generate complex images with the brand new and powerful WAN 2.2
              model. Exceptional prompt adherence and ultra-realistic textures.
            </p>
          </div>
          <button className="absolute bottom-5 md:bottom-7 right-3 md:right-5 bg-white z-10 font-medium rounded-2xl md:rounded-3xl px-3 md:px-5 py-2 md:py-3 shadow-md text-sm">
            Try WAN 2.2
          </button>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide className="w-full md:w-[50%]! overflow-hidden relative rounded-[30px]">
          <img
            src="https://s.krea.ai/OSSKreaFlux1_poster.webp"
            alt="FLUX"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          <div className="absolute bottom-5 md:bottom-7 left-3 md:left-5 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-medium">FLUX.1 Krea</h2>
            <p className="w-full md:w-[400px] text-xs md:text-sm mt-1 md:mt-2">
              We're making the weights to our FLUX.1 Krea model open-source.
              Download and run our model weights, read the technical report, or
              generate with it in Krea image.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full md:w-[61%]! rounded-[30px] overflow-hidden relative">
          <img
            src="https://s.krea.ai/announce-wan-2-2-image.webp"
            alt="WAN 2.2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          <div className="absolute bottom-5 md:bottom-7 left-3 md:left-5 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-medium">WAN 2.2 Image generation</h2>
            <p className="w-full md:w-[400px] text-xs md:text-sm mt-1 md:mt-2">
              Generate complex images with the brand new and powerful WAN 2.2
              model. Exceptional prompt adherence and ultra-realistic textures.
            </p>
          </div>
          <button className="absolute bottom-5 md:bottom-7 right-3 md:right-5 bg-white z-10 font-medium rounded-2xl md:rounded-3xl px-3 md:px-5 py-2 md:py-3 shadow-md text-sm">
            Try WAN 2.2
          </button>
        </SwiperSlide>

      </Swiper>

      {/* Custom carousel navigation arrows*/}
      <div className="absolute bottom-[-2.5rem] md:bottom-[-3rem] right-10 md:right-40 translate-x-1/2 flex items-center space-x-3 z-20">
        <button
          ref={prevRef}
          className="custom-prev bg-[#f2f2f2] rounded-full w-8 md:w-10 h-8 md:h-10 flex items-center justify-center"
        >
          <FiChevronLeft size={18} className="md:size-22 text-gray-800" />
        </button>
        <button
          ref={nextRef}
          className="custom-next bg-[#f2f2f2] rounded-full w-8 md:w-10 h-8 md:h-10 flex items-center justify-center"
        >
          <FiChevronRight size={18} className="md:size-22 text-gray-800" />
        </button>
      </div>

      {/* Custom pagination centered */}
      <div
        ref={paginationRef}
        className="custom-pagination bg-amber-400 flex items-center space-x-1 z-20 absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2"
      ></div>

      {/* Tailwind override for dots */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #c4c4c4;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #000000;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Carousel;

// "use client";
// import { FC, useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const Carousel: FC = () => {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);
//   const paginationRef = useRef<HTMLDivElement | null>(null);
//   const swiperRef = useRef<any>(null);

//   useEffect(() => {
//     if (!swiperRef.current) return;

//     const swiper = swiperRef.current;
//     if (
//       prevRef.current &&
//       nextRef.current &&
//       paginationRef.current &&
//       swiper.params
//     ) {
//       // Attach refs manually
//       swiper.params.navigation.prevEl = prevRef.current;
//       swiper.params.navigation.nextEl = nextRef.current;
//       swiper.params.pagination.el = paginationRef.current;

//       // Re-init navigation + pagination
//       swiper.navigation.destroy();
//       swiper.navigation.init();
//       swiper.navigation.update();

//       swiper.pagination.destroy();
//       swiper.pagination.init();
//       swiper.pagination.update();
//     }
//   }, []);

//   return (
//     <div className="relative w-full h-[400px] flex justify-center pl-8 pr-1 mb-30">
//       <Swiper
//         slidesPerView={"auto"}
//         spaceBetween={40}
//         modules={[Pagination, Navigation]}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         className="w-full h-full"
//       >
//         {/* First Slide */}
//         <SwiperSlide className="w-[61%]! rounded-[30px] overflow-hidden relative">
//           <img
//             src="https://s.krea.ai/announce-wan-2-2-image.webp"
//             alt="WAN 2.2"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
//           <div className="absolute bottom-7 left-5 text-white z-10">
//             <h2 className="text-3xl font-medium">WAN 2.2 Image generation</h2>
//             <p className="w-[400px] text-sm mt-2">
//               Generate complex images with the brand new and powerful WAN 2.2
//               model. Exceptional prompt adherence and ultra-realistic textures.
//             </p>
//           </div>
//           <button className="absolute bottom-7 right-5 bg-white z-10 font-medium rounded-3xl px-5 py-3 shadow-md">
//             Try WAN 2.2
//           </button>
//         </SwiperSlide>

//         {/* Second Slide */}
//         <SwiperSlide className="w-[50%]! overflow-hidden relative rounded-[30px]">
//           <img
//             src="https://s.krea.ai/OSSKreaFlux1_poster.webp"
//             alt="FLUX"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
//           <div className="absolute bottom-7 left-5 text-white z-10">
//             <h2 className="text-3xl font-medium">FLUX.1 Krea</h2>
//             <p className="w-[400px] text-sm mt-2">
//               We're making the weights to our FLUX.1 Krea model open-source.
//               Download and run our model weights, read the technical report, or
//               generate with it in Krea image.
//             </p>
//           </div>
//         </SwiperSlide>


//         <SwiperSlide className="w-[61%]! rounded-[30px] overflow-hidden relative">
//           <img
//             src="https://s.krea.ai/announce-wan-2-2-image.webp"
//             alt="WAN 2.2"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
//           <div className="absolute bottom-7 left-5 text-white z-10">
//             <h2 className="text-3xl font-medium">WAN 2.2 Image generation</h2>
//             <p className="w-[400px] text-sm mt-2">
//               Generate complex images with the brand new and powerful WAN 2.2
//               model. Exceptional prompt adherence and ultra-realistic textures.
//             </p>
//           </div>
//           <button className="absolute bottom-7 right-5 bg-white z-10 font-medium rounded-3xl px-5 py-3 shadow-md">
//             Try WAN 2.2
//           </button>
//         </SwiperSlide>

//         {/* Second Slide */}
//         <SwiperSlide className="w-[50%]! overflow-hidden relative rounded-[30px]">
//           <img
//             src="https://s.krea.ai/OSSKreaFlux1_poster.webp"
//             alt="FLUX"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
//           <div className="absolute bottom-7 left-5 text-white z-10">
//             <h2 className="text-3xl font-medium">FLUX.1 Krea</h2>
//             <p className="w-[400px] text-sm mt-2">
//               We're making the weights to our FLUX.1 Krea model open-source.
//               Download and run our model weights, read the technical report, or
//               generate with it in Krea image.
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="w-[61%]! rounded-[30px] overflow-hidden relative">
//           <img
//             src="https://s.krea.ai/announce-wan-2-2-image.webp"
//             alt="WAN 2.2"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
//           <div className="absolute bottom-7 left-5 text-white z-10">
//             <h2 className="text-3xl font-medium">WAN 2.2 Image generation</h2>
//             <p className="w-[400px] text-sm mt-2">
//               Generate complex images with the brand new and powerful WAN 2.2
//               model. Exceptional prompt adherence and ultra-realistic textures.
//             </p>
//           </div>
//           <button className="absolute bottom-7 right-5 bg-white z-10 font-medium rounded-3xl px-5 py-3 shadow-md">
//             Try WAN 2.2
//           </button>
//         </SwiperSlide>

//         {/* Second Slide */}
//         <SwiperSlide className="w-[50%]! overflow-hidden relative rounded-[30px]">
//           <img
//             src="https://s.krea.ai/OSSKreaFlux1_poster.webp"
//             alt="FLUX"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
//           <div className="absolute bottom-7 left-5 text-white z-10">
//             <h2 className="text-3xl font-medium">FLUX.1 Krea</h2>
//             <p className="w-[400px] text-sm mt-2">
//               We're making the weights to our FLUX.1 Krea model open-source.
//               Download and run our model weights, read the technical report, or
//               generate with it in Krea image.
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="w-[61%]! rounded-[30px] overflow-hidden relative">
//           <img
//             src="https://s.krea.ai/announce-wan-2-2-image.webp"
//             alt="WAN 2.2"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
//           <div className="absolute bottom-7 left-5 text-white z-10">
//             <h2 className="text-3xl font-medium">WAN 2.2 Image generation</h2>
//             <p className="w-[400px] text-sm mt-2">
//               Generate complex images with the brand new and powerful WAN 2.2
//               model. Exceptional prompt adherence and ultra-realistic textures.
//             </p>
//           </div>
//           <button className="absolute bottom-7 right-5 bg-white z-10 font-medium rounded-3xl px-5 py-3 shadow-md">
//             Try WAN 2.2
//           </button>
//         </SwiperSlide>

//         {/* Second Slide */}
//         <SwiperSlide className="w-[50%]! overflow-hidden relative rounded-[30px]">
//           <img
//             src="https://s.krea.ai/OSSKreaFlux1_poster.webp"
//             alt="FLUX"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
//           <div className="absolute bottom-7 left-5 text-white z-10">
//             <h2 className="text-3xl font-medium">FLUX.1 Krea</h2>
//             <p className="w-[400px] text-sm mt-2">
//               We're making the weights to our FLUX.1 Krea model open-source.
//               Download and run our model weights, read the technical report, or
//               generate with it in Krea image.
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="w-[61%]! rounded-[30px] overflow-hidden relative">
//           <img
//             src="https://s.krea.ai/announce-wan-2-2-image.webp"
//             alt="WAN 2.2"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
//           <div className="absolute bottom-7 left-5 text-white z-10">
//             <h2 className="text-3xl font-medium">WAN 2.2 Image generation</h2>
//             <p className="w-[400px] text-sm mt-2">
//               Generate complex images with the brand new and powerful WAN 2.2
//               model. Exceptional prompt adherence and ultra-realistic textures.
//             </p>
//           </div>
//           <button className="absolute bottom-7 right-5 bg-white z-10 font-medium rounded-3xl px-5 py-3 shadow-md">
//             Try WAN 2.2
//           </button>
//         </SwiperSlide>

//       </Swiper>

//       {/* Custom carousel navigation arrows*/}
//       <div className="absolute bottom-[-3rem] right-40 translate-x-1/2 flex items-center space-x-3 z-20">
//         <button
//           ref={prevRef}
//           className="custom-prev bg-[#f2f2f2] rounded-full w-10 h-10 flex items-center justify-center"
//         >
//           <FiChevronLeft size={22} className="text-gray-800" />
//         </button>
//         <button
//           ref={nextRef}
//           className="custom-next bg-[#f2f2f2] rounded-full w-10 h-10 flex items-center justify-center"
//         >
//           <FiChevronRight size={22} className="text-gray-800" />
//         </button>
//       </div>

//       {/* Custom pagination centered */}
//       <div
//         ref={paginationRef}
//         className="max-w-max h-5 flex items-center custom-pagination bg-white border-2 z-20 absolute -bottom-8 left-1/2 -translate-x-1/2  space-x-2"
//       ></div>

//       {/* Tailwind override for dots */}
//       <style jsx global>{`
//         .custom-pagination .swiper-pagination-bullet {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background-color: #c4c4c4;
//           opacity: 1;
//           transition: all 0.3s ease;
//         }
//         .custom-pagination .swiper-pagination-bullet-active {
//           background-color: #000000;
//           transform: scale(1.2);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Carousel;
