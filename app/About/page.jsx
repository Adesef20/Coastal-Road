
import Link from "next/link";


const About = () => {
    return(
   <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="mb-6 text-gray-300 font-light">
          Established in 1988, Hitech is currently one of the leading Building & Civil Engineering Contractors in Nigeria. In addition to headquarters offices in Lagos, we have regional offices located in Abuja, Ibadan and Benin City.
        </p>
        <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750328308/Form-Bitumen-Stabilsed-Materials_a9oxxf.webp" 
        alt="Road"
        width={200}
        height={100}
        className="object-cover w-full h-full p-8" />
        <Link href="/about/who-we-are" className="text-orange-700 hover:underline">
          Who We Are
        </Link>
   </div>

    );
};

export default About;