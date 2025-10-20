'use client';
import Image from "next/image";
import React from "react";

const client = [
  {
    title: 'DANGOTE CEMENT',
    description: 'Dangote Cement Plc is a Nigerian publicly traded multinational cement manufacturer headquartered in Lagos',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751028616/Dangote_loo7tu.jpg',
  },
  {
    title: 'STERLING REALTIES',
    description: 'Sterling Realties Development Company Ltd is a real estate development company incorporated in 2003',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751028774/sterling-realities2_pm3vjy.png',
  },
  {
    title: 'LAGOS STATE GOVERNMENT',
    description: 'LAGOS STATE GOVERNMENT',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751028696/Lagos-state_yjmp0b.png',
  },
  {
    title: 'EDO STATE GOVERNMENT',
    description: 'EDO STATE GOVERNMENT',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751029258/Edo-state_wi6ssx.png',
  },
  {
    title: 'OYO STATE',
    description: 'OYO STATE GOVERNMENT',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751029379/Oyo-state_spcugo.png',
  },
  {
    title: 'OGUN STATE',
    description: 'OGUN STATE GOVERNMENT',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751031811/download_go7qh1.jpg',
  },
  {
    title: 'TOGO',
    description: 'TOGO MINISTRY OF PUBLIC WORKS',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751028677/Flag_of_Togo_dp9trr.png',
  },
  {
    title: 'BENIN',
    description: 'BENIN REPUBLIC MINISTRY OF THE LIVING ENVIRONMENT AND SUSTAINABLE DEVELOPMENT',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751028657/ezgif.com-webp-to-jpg_pmjrb3.jpg',
  },
  {
    title: 'MIXTA NIGERIA',
    description: 'Mixta provides the most reliable real estate development solution across Africa.',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751028738/Mixta-Real-Esate-Logo_dg2k6r.png',
  },
  
  {
    title: 'BRITISH EXPORTERS ASSOCIATION',
    description: 'Exporters Association based in the UK',
    image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1751031842/images_sxnj3c.jpg',
  },
];

const PartnerClient = () => {
  return (
    <div className="px-6 py-12 bg-gray-100">
      <div className="absolute left-2 mt-4 transform -translate-y-1/2 bg-red-800 w-2 h-7"></div>
      <h2 className="text-3xl text-black mb-10 font-bold">PARTNERS / CLIENTS</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {client.map((item, index) => (
          <div key={index} className="relative group h-64 perspective cursor-pointer">
            <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              
              <div className="absolute w-full h-full backface-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={300}
                  className="object-contain w-full h-full rounded-lg shadow-md p-8"
                />
              </div>
              <div className="absolute w-full h-full bg-gray-400 text-white rounded-lg p-4 transform rotate-y-180 backface-hidden flex flex-col justify-center items-center text-center">
                <h3 className="texn t-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    );
};

export default PartnerClient;

