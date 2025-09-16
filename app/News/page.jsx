"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  const article = [
    {
      id: 1,
      title: "Choosing The Right Contractor For Your Project",
      content:
        "Constructing a federal road network and bridges is a monumental task that demands precision, expertise, and a commitment quality. The success of such projects largely hinges on selecting the right contractor. In this article",
      image:
        "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867164/Dangote-Deep-Sea-Port-Road-1-300x225_oinpjb.jpg",
    },
    {
      id: 2,
      title:
        "BUILDING BRIDGES FOR MEGA CITIES: HARNESSING THE POWER OF THE RIGHT TOOLS AND RESOURCES",
      content:
        "As the world’s population continues to urbanize, mega cities are becoming the focal points of economic and social development. The demand for efficient transportation infrastructure is greater than ever, and building bridges is a critical component of this endeavor.",
      image:
        "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750688553/Roadworks-Bridges_kfhdmd.jpg",
    },
    {
      id: 3,
      title:
        "UK-FRANCOPHONE WEST & CENTRAL AFRICA TRADE AND INVESTMENT FORUM 2023 HOSTED BY DMA",
      content:
        "We are thrilled to have attended the UK-Francophone West and Central Africa Trade and Investment Forum 2023 hosted by DMA. This dynamic event brought together over 800 delegates, including 250 esteemed overseas representatives, mingling with 550 dynamic UK businesses",
      image:
        "https://res.cloudinary.com/dyp62yu3w/image/upload/v1755694586/51ce4426-50e4-4d03-9f91-78d3e08f1b19-1536x1023_wequgg.jpg",
    },
  ];

   const gridArticle = [
    {
      id: 101,
      image: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1755694586/51ce4426-50e4-4d03-9f91-78d3e08f1b19-1536x1023_wequgg.jpg",
      date: "October 25, 2023",
      title: "UK-FRANCOPHONE WEST & CENTRAL AFRICAL TRADE AND INVESTMENT FORUM 2023 HOSTED BY DMA",
      content: "We are thrilled to have attended the UK-Francophone West and Central Africa Trade and Investment Forum 2023 hosted by DMA. This dynamic event brought together over 800 delegates, including 250 esteemed overseas representatives, mingling with",
    },
    {
      id: 102,
      image: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750688553/Roadworks-Bridges_kfhdmd.jpg",
      date: "October 25, 2023",
      title: "BUILDING BRIDGES FOR MEGA CITIES: HARNESING THE POWER OF THE RIGHT TOOLS AND RESOURCES",
      content: " As the world's population continues to urbanize, mega cities are becoming the focal points of economic and social development. The demand for efficient transportation infrastructure is greater than ever, and building bridges is a critical",
    },
    {
      id: 103,
      image: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867164/Dangote-Deep-Sea-Port-Road-1-300x225_oinpjb.jpg",
      date: "October 25, 2023",
      title: "CHOOSING THE RIGHT CONTRACTOR FOR YOUR PROJECT",
      content: " Constructing a federal road network and bridges is a monumental task that demands precision, expertise, and a commitment to quality. The success of such projects largely hinges on selecting the right contractor. In this article,",
    }
  ];

 return (
    <main className="max-w-7xl mx-auto p-6 bg-white mt-20 relative">
      <div className="absolute -translate-y-1/2 bg-red-800 w-7 h-7" />
      <h1 className="text-4xl text-black font-bold mt-6">NEWS & ARTICLES</h1>
      <hr className="border-t-2 border-gray-200 mt-3"/>
      <Swiper
        pagination={{ clickable: false }}
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {article.map((item) => (
          <SwiperSlide key={item.id}>
            
            <div className="flex flex-col md:flex-row items-stretch w-full h-[500px] rounded-lg shadow-lg overflow-hidden mt-1">
              
              <div className="w-full md:w-1/2 h-full p-6 flex flex-col justify-center bg-white relative">
                <h2 className="text-3xl text-black font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700 text-xl">{item.content}</p>

                <Link href={`/News/${item.id}`} 
                className="read-more text-gray-500 font-bold mt-2 flex items-center gap-2">
                Read Me <span className="relative text-white arrow w-5 h-5 text-center rounded-full bg-red-600">⬆</span>
                </Link>

              </div>
              
              
              <div className="w-[200px] md:w-1/2 h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`

      .read-more{
      display: inline-flex;
      align-item: center;
      gap: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      }

      .read-more .arrow{
      display: inline-block;
      transition: transform 0.3s ease;
      }

      .read-more:hover .arrow{
      transform: translateX(6px) rotate(90deg)
      }

      .swiper{
      padding-bottom: 60px !important;
      }

      .swiper-pagination{
      margin-top: 20px;
      position: absolute;
      text-align: center;
      bottom: 0px;
      left: 0px;
      right: 0px;
      }`}</style>
      

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {gridArticle.map((item) => (
         <div key={item.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
          <img 
          src={item.image}
          title={item.title}
          className="object-cover w-full h-48"
          />
          <button className="flex items-start bg-red-700 text-white p-1 mt-2 px-2 rounded">{item.date}</button>
          <h1 className="font-bold mb-2 text-black text-lg">{item.title}</h1>
          <p className="text-gray-600 font-extralight text-sm flex-grow">{item.content}</p>
          <Link href={`/Article/${item.id}`} 
          className="read-more text-gray-500 font-bold mt-4 flex items-center gap-2">
          Read Me 
          <span className="relative text-white arrow w-4 h-4 text-center rounded-full bg-red-600">⬆</span>
          </Link>
         </div>
        ))}
      </div>
    </main>
  );
};

export default News;
