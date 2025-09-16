'use client';
import React from "react";
import { motion } from "framer-motion";

const Continously = () => {
    return(
        <main className="w-full text-black py-8 px-4">
            <div className="flex items-center px-6 py-4">
                <div className="absolute left-12 transform -translate-y-1/2 bg-red-800 w-6 h-6 top-25"></div>
                <h1 className="text-4xl font-bold mb-4">CONTINUOUSLY REINFORCED <br /> CONCRETE PAVEMENT (CRCP)</h1>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750689544/Continuously-Reinforced-Concrete-Pavment1_nubxfa.jpg" 
                alt="Concrete" className="object-cover w-full h-[600px]"/>
            </div>
            <div className="w-full px-6 py-12 mt-5 bg-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 spacy-y-6">
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                            Hitech has held an eminent position in the construction and engineering industry, standing as one of Nigeria’s <br /> 
                            foremost Building & Civil Engineering Contractors. With our headquarters in Lagos and strategically positioned <br /> 
                            regional offices in Abuja, Ibadan, and Benin City, we have created a network that spans across Nigeria.
                        </p><br />
                        <p className="text-black text-2xl p-5 border-2 border-red-700 bg-white ">
                            Blends On-Site Professional Management With A Team Of <br /> Office-Based Engineering, Design, And Planning Experts.
                        </p>
                        <h2 className="text-xl text-gray-500 mt-10 font-semibold">Our Distinct Approach: Merging Expertise with Technology</h2>
                        <p className="font-extralight text-sm mt-5 text-gray-900 mb-4">
                            Hitech’s approach blends on-site professional management with a team of office-based engineering, design, and <br /> 
                            planning experts. Bolstered by advanced computerized facilities, we remain at the forefront of Construction and <br /> 
                            Engineering Technology in Nigeria. This integration of expertise and technology places us in a league of our own.
                        </p>
                        <h2 className="text-lg text-gray-500 font-semibold">Continuously Reinforced Concrete Pavements (CRCP): Engineering Excellence in Motion</h2>
                        <p className="font-extralight text-sm mt-5 text-gray-900 mb-4">
                            At Hitech, we excel in creating Continuously Reinforced Concrete Pavements (CRCP), a specialized form of road <br /> 
                            construction that guarantees exceptional strength and longevity. This technique involves placing steel <br /> 
                            reinforcement throughout the entire length of the pavement, providing unmatched structural integrity.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <motion.img
                            src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754255363/Continuously-Reinforced-Concrete-Pavements_gfcrqa.jpg"
                            alt="Asphalt"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="object-cover w-48 h-48"
                            />
                            <motion.img
                            src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754255476/Continuously-Reinforced-Concrete-Pavements-_cwtf3n.jpg"
                            alt="Asphalt"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="object-cover w-48 h-48"
                            />
                            <motion.img
                            src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754255540/Continuously-Reinforced-Concrete-Pavements-1-3_mjij0i.jpg"
                            alt="Asphalt"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="object-cover w-48 h-48"
                            />
                            <motion.img
                            src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754255623/Continuously-Reinforced-Concrete-Pavements-1-4_cejxdd.jpg"
                            alt="Asphalt"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="object-cover w-48 h-48"
                            />
                        </div>
                        <h2 className="text-lg text-gray-600 font-semibold mt-5">Advantages of CRCP:</h2>
                        <ul className="list-decimal text-black font-sans p-5">
                            <li>Unparallel Strenght: <span className="text-gray-500">CRCP is known for its exceptional load-bearing capacity, making it ideal for high-traffic
                            areas and heavy-load applications.</span></li>
                            <li>Durability: <span className="text-gray-500">With minimal joints and continuous reinforcement, CRCP is highly resistant to cracking and 
                            deterioration, ensuring a longer service life.</span></li>
                            <li>Low Maintenance: <span className="text-gray-500">The robustness of CRCP reduces maintenance requirements, making it a cost-effective choice 
                            in the long run.</span></li>
                        </ul>
                        <h2 className="text-xl text-gray-600 font-semibold">Applications of CRCP:</h2>
                        <ul className="list-decimal text-black font-sans p-5">
                            <li>Highway and Expressway: <span className="text-gray-500">CRCP is an excellent choice for major roadways where durability and strength are paramount.</span></li>
                            <li>Airports and Industrial Facilities: <span className="text-gray-500">Its load-bearing capabilities make CRCP an ideal choice for areas with high traffic and heavy equipment.</span></li>
                            <li>Urban Roads and Intersection: <span className="text-gray-500"> CRCP’s durability and low maintenance requirements make it a sensible choice for busy urban environments.</span> </li>
                        </ul>
                        <h2 className="text-xl text-gray-600 font-semibold">Safety and Compliance: Our Unwavering Commitment</h2>
                        <p className="text-sm font-extralight text-gray-900 mb-4">
                            Safety and compliance are the bedrock of our operations at Hitech. We adhere to rigorous safety protocols, <br /> 
                            conduct regular equipment maintenance, and uphold industry standards and regulations. This guarantees a secure <br /> 
                            working environment for our team and protects the interests of our clients.
                        </p>
                        <h2 className="text-xl text-gray-600 font-semibold">Proven Excellence: Our Portfolio Speaks for Itself</h2>
                        <p className="text-sm font-extralight text-gray-900 mb-4">
                            Our extensive portfolio showcases a multitude of successful CRCP projects. Each one stands as a testament to <br /> 
                            our expertise, innovation, and unwavering dedication to excellence.
                        </p>
                        <h2 className="text-xl text-gray-600 font-semibold">Collaborative Partnership: Your Vision, Our Mission</h2>
                        <p className="text-sm font-extralight text-gray-900 mb-4">
                            We believe in forming strong partnerships with our clients, turning your vision into reality. By working hand-in-hand, <br /> 
                            we ensure that your objectives are not only met but exceeded.
                        </p>
                    </div>
                     <div className="lg:col-span-1">
                            <div className="sticky top-20 bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-black text-xl font-bold mb-4">Join Our News Letter <br /> Updates</h2>
                                <input type="name" 
                                placeholder="Name"
                                className="w-full px-6 py-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none"
                                />
                                <input type="email" 
                                placeholder="Email"
                                className="w-full mt-2 px-6 py-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none"
                                />
                                 <button className="bg-red-700 w-full text-white py-4 mt-3 rounded hover:bg-red-800 transition">SUBMIT</button>
                             <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1751537363/Hitech_uxezxu.jpg" 
                             alt="Cover" className="w-full h-40 rounded-lg mt-4 shadow-lg" />
                            </div>
                        </div>
                </div>
            </div>
            <div className="w-full h-72 py-4 relative bg-cover bg-center mt-5" 
                  style={{ backgroundImage: "url('https://res.cloudinary.com/dyp62yu3w/image/upload/v1751537363/Hitech_uxezxu.jpg')", }}
            
                  >
                
                 <div className="relative z-10 p-8 text-white ">
                    <h1 className="font-bold text-4xl mb-4 mt-5">Ready To Build Your Project</h1>
                    <p className="font-extralight text-black">Ready to embark on your next Roadworks, Bridges, Drainage & Concrete Structures? Contact us today to discover <br /> 
                    how Hitech can transform your vision into a reality. Together, we’ll build a future that’s sustainable, efficient, and <br /> 
                    thriving
                   
                    </p>
                     <button className="bg-white text-red-500 px-6 py-2 mt-5 hover:bg-red-700 transition hover:text-white">CALL US NOW</button>
                 </div>
            </div>
        </main>
    );
};

export default Continously;