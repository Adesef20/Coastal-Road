'use client';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [ 
  {
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750328120/Hitech-Men-at-work_gmv5w6.jpg',
    heading: 'ROADWORKS, BRIDGES, AND CONCRETE STRUCTURE',
    sub: `We have a team of experienced and qualified professionals who can help you 
    manage your construction project from start to finish. We also ensure that 
    your project meets all safety and quality standards.`,
    button: 'LEARN MORE',
  },
  {
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750328328/Hitech-Company_n7ypwh.webp',
    heading: 'WATER SUPPLY & IRRIGATION SCHEMES',
    sub: `Innovative water schemes boost crop yield, optimize resources, reduce 
    agriculture's carbon footprint, and benefit communities and local economies. 
    They're crucial to tackling water scarcity, mitigating drought, and achieving 
    sustainable agriculture for a brighter future.`,
    button: 'LEARN MORE',
  },
  {
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750328228/Land-Reclamation-Dredging_dseq1t.jpg',
    heading: 'LAND RECLAMATION, RIVER CANALIZATION & DREDGING',
    sub: `Hitech understands the vital role that navigable waterways play in fostering 
    economic growth and connectivity. Our River Canalization projects aim to 
    optimize water flow, control erosion, and facilitate safe navigation.`,
    button: 'LEARN MORE',
  },
  {
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750328308/Form-Bitumen-Stabilsed-Materials_a9oxxf.webp',
    heading: 'RECYCLE OF EXISTING ROAD LAYERS',
    sub: `We champion sustainable practices, and one of our flagship services is the
     Recycling of Existing Road Layers. This innovative approach involves reusing and 
     repurposing existing road materials...`,
    button: 'LEARN MORE',
  },
  {
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750328187/Continuously-Reinforced-Concrete-Pavment2_kaoo1j.jpg',
    heading: 'CONTINUOUSLY REINFORCED CONCRETE PAVEMENTS, (CRCP)',
    sub: `Hitech’s approach blends on-site professional management with a team of office-
    based engineering, design, and planning experts...`,
    button: 'LEARN MORE',
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <div className="w-full">
      <Swiper
        modules={[ Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-screen h-screen bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 z-10" />

               <div
                className={`absolute inset-0 z-20 flex items-center justify-start px-6 text-white md:px-24 transition-all duration-700 ease-out ${
                  activeIndex === index
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-[50%]'
                }`}
              >
                <div className="text-white text-left max-w-xl space-y-4 bg-white/15 p-6 rounded-md backdrop-blur-md">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {slide.heading}
                </h2>
                <p className="text-base md:text-lg text-gray-200">
                  {slide.sub}
                </p>
                <button className="bg-red-600 hover:bg-red-800 px-6 py-3 rounded-md transition">
                  {slide.button}
                </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

