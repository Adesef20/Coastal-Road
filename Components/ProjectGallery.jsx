 'use client';

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const project = [
  {
    src: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750866812/Dangote-Deep-Sea-Port-Road-2_f92zxj.jpg",
    title: "Dangote Deep Sea Port Road-[Project Information]"
  },
  {
    src: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867164/Dangote-Deep-Sea-Port-Road-1-300x225_oinpjb.jpg",
    title: "Dangote Deep Sea Port"
  },
  {
    src: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867195/Dangote-Deep-Sea-Port-Road_nt5pyt.jpg",
    title: "Dangote Deep Sea Port"
  },
  {
    src: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867218/Dangote-Deep-Sea-Port-Road2_fwmvwy.jpg",
    title: "Dangote Deep Sea Port"
  }
];

const ProjectGallery = () => {
  const [isOverlayOpen, setIsoverlayOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openOverlay = (index) => {
    setCurrentIndex(index);
    setIsoverlayOpen(true);
  };

  const closeOverlay = () => setIsoverlayOpen(false);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % project.length);
  const goPrev = () => setCurrentIndex((prev) => (prev === 0 ? project.length - 1 : prev - 1));

  return (
    <div className="px-4 py-8">
      <div className="absolute left-2 mt-7 transform -translate-y-1/2 bg-red-800 w-2 h-7"></div>
      <h2 className="text-4xl font-bold p-2 mb-10 text-black">CURRENT PROJECTS</h2>

     
     <div className="flex px-4">
  <div className="grid grid-cols-6 sm:grid-cols-4 lg:grid-cols-5 gap-4">
    {[
      "Dangote Deep Sea Port",
      "Rehabilitation Of National Route Togo",
      "Cotonou Fisheries Road Development Project",
      "Agbara Lusada Atan Road",
      "Lekki Regional Road",
      "Lakowe Golf Course",
    ].map((text, index) => (
      <div key={index} className="relative group overflow-hidden rounded-lg w-full">
        <button className="relative z-10 w-full px-4 py-2 text-center text-black font-semibold bg-transparent group-hover:text-white transition duration-300 ease-in-out">
          {text}
        </button>
        <span className="absolute bottom-0 left-0 w-full h-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:h-full z-0"></span>
      </div>
    ))}
  </div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {project.map((item, index) => (
          <div
            key={index}
            onClick={() => openOverlay(index)}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-72 object-cover transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-center font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50">
          <button className="absolute top-6 right-6 text-white text-3xl" onClick={closeOverlay}>
            <FaTimes />
          </button>
          <button className="absolute left-6 text-white text-3xl" onClick={goPrev}>
            <FaChevronLeft />
          </button>

          <img
            src={project[currentIndex].src}
            alt={project[currentIndex].title}
            className="max-w-[90vw] max-h-[80vh] w-auto rounded-lg shadow-lg"
          />

          <button className="absolute right-6 text-white text-3xl" onClick={goNext}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
