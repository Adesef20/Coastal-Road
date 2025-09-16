'use client';
import Image from "next/image";

const services= [
    {
        title: 'ROADWORKS, BRIDGES, DRAINAGE & CONCRETE STRUCTURES',
        image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750688553/Roadworks-Bridges_kfhdmd.jpg'
    },
    {
        title: 'WATER SUPPLY & IRRIGATION SCHEMES:',
        image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750688726/Water-Supply-and-Irrigation2_q7oj71.jpg'
    },
    {
        title: 'LAND RECLAMATION, RIVER CANALIZATION & DREDGING',
        image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750689147/Land-Reclamation-Dredging2_aqcu7s.jpg'
    },
    {
        title: 'FORM BITUMEN STABILISED',
        image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750689265/Form-Bitumen-Stabilsed-Materials1_o8dacq.jpg'
    },
    {
        title: 'RECYCLING OF EXISTING ROAD LAYERS',
        image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750689403/Recycling-of-existing-Roads3_cq5b4l.jpg'
    },
    {
        title: 'CONTINUOUSLY REINFORCED CONCRETE PAVEMENTS, (CRCP)',
        image: 'https://res.cloudinary.com/dyp62yu3w/image/upload/v1750689544/Continuously-Reinforced-Concrete-Pavment1_nubxfa.jpg'
    }
]

const ProjectSection = () => {
    return(
        <section className="w-full py-16 px-32 bg-gray-200 mt-10">
            <div className="max-w-screen-xl">
                <div className="absolute left-25 mt-5 transform -translate-y-1/2 bg-red-800 w-2 h-7"></div>
                <h2 className="text-4xl font-bold mb-5 text-gray-700">WHAT WE DO</h2>
                <p className="text-gray-800 mb-12 font-stretch-100% mt-6">
                    Partner with us that is at the forefront of innovation and excellence in the industry. At Hitech Construction <br /> 
                    Company, we’re dedicated to transforming landscapes, enhancing infrastructure, and creating sustainable <br /> 
                    solutions for communities around the world.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {services.slice(0, 3).map((services, index) => (
                        <div key={index} 
                        className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                           <div className="flex justify-center items-center">
                             <Image 
                            src={services.image}
                            alt={services.title}
                            width={1200}
                            height={300}
                            className=" h-44 object-contain rounded" 
                            />
                           </div>
                            
                            <h3 className="text-xl shadow-2xl text-gray-600 font font-bold mt-4 bg-white p-2">{services.title}</h3>
                            
                            
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="max-w-screen-xl mt-5 ">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {services.slice(3, 6).map((services, index) => (
                        <div key={index} 
                        className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center items-center h-44">
                            <Image 
                            src={services.image}
                            alt={services.title}
                            width={1200}
                            height={300}
                            className="h-44 object-contain rounded" 
                            />
                            </div>
                            
                              <h3 className="text-xl text-gray-600 font font-semibold mt-4 bg-white p-2">{services.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
</section>
    );
};

export default ProjectSection;