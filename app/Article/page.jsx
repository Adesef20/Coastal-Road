'use client';
import { useParams } from "next/navigation";


const Article = () => {
    const articles = [
  {
    id: 101,
    image: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1755694586/51ce4426-50e4-4d03-9f91-78d3e08f1b19-1536x1023_wequgg.jpg",
    date: "October 25, 2023",
    title: "UK-FRANCOPHONE WEST & CENTRAL AFRICAL TRADE AND INVESTMENT FORUM 2023 HOSTED BY DMA",
    content: "We are thrilled to have attended the UK-Francophone West and Central Africa Trade and Investment Forum 2023 hosted by DMA...",
  },
  {
    id: 102,
    image: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750688553/Roadworks-Bridges_kfhdmd.jpg",
    date: "October 25, 2023",
    title: "BUILDING BRIDGES FOR MEGA CITIES...",
    content: "As the world's population continues to urbanize...",
  },
  {
    id: 103,
    image: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867164/Dangote-Deep-Sea-Port-Road-1-300x225_oinpjb.jpg",
    date: "October 25, 2023",
    title: "CHOOSING THE RIGHT CONTRACTOR FOR YOUR PROJECT",
    content: "Constructing a federal road network and bridges is a monumental task...",
  },
];
    
    const { id } = useParams();
    const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    return (
      <h1 className="text-center text-red-600 text-2xl mt-10">
        Article not found
      </h1>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-black">{article.title}</h1>
      <p className="text-gray-500">{article.date}</p>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-[400px] object-cover rounded-lg my-4"
      />
      <p className="text-lg text-gray-700">{article.content}</p>
    </main>
  );
    
};

export default Article;