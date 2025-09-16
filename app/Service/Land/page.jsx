'use client';
import { motion } from "framer-motion";
import React from "react";

const Land = () =>{
    return(
        <main className="bg-white text-black px-4 py-8 w-full md:px-5">
            <div className="flex items-center px-6 py-4">
                <div className="absolute left-12 transform -translate-y-1/2 top-23 bg-red-800 w-4 h-5"></div>
                <h1 className="font-bold text-4xl mb-4">LAND RECLAMATION,RIVER <br />CANALIZATION & DREDGING</h1>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750328228/Land-Reclamation-Dredging_dseq1t.jpg" 
                alt="Rock"
                className="object-cover w-full h-[600px]" 
                />
            </div>
            <div className="w-full px-6 py-12 bg-gray-200 mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 space-y-6">
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                            Hitech has emerged as a trailblazer in the construction and engineering realm, solidifying its position as one of <br /> 
                            Nigeria’s foremost Building & Civil Engineering Contractors. With headquarters situated in Lagos and strategically <br /> 
                            located regional offices in Abuja, Ibadan, and Benin City, we have established a formidable presence across the <br /> 
                            nation. <br /> <br /> <br />
                        </p>
                        <span className="text-black text-xl p-10 font-bold border-2 border-red-700 bg-white">
                                We Have Esterblished A Formidable Presence Across The Nation 
                        </span>
                         <h2 className="text-xl text-black mt-20 font-semibold">Our Innovative Approach: Merging Expertise and Technology</h2>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                          Hitech operates on the premise of merging on-site professional management with a dedicated team of office- <br />
                          based engineering, design, and planning experts. Armed with cutting-edge computerized facilities, we are primed <br /> 
                          to revolutionize the fields of Land Reclamation, River Canalization, and Dredging. This potent combination has <br /> 
                          enabled us to maintain an unassailable position at the vanguard of Construction and Engineering Technology in <br /> 
                          Nigeria.
                        </p>
                        <h2 className="text-xl text-black mt-10 font-semibold">River Canalization: Navigating Waterways With Precision</h2>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                          Hitech understands the vital role that navigable waterways play in fostering economic growth and connectivity. Our <br /> 
                          River Canalization projects aim to optimize water flow, control erosion, and facilitate safe navigation. From the <br /> 
                          intricate planning phase to the final execution, our team ensures that every aspect is meticulously attended to.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                           <motion.img 
                            src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754139599/Land-Reclamation-Dredging-1-3_brzfnt.jpg" 
                            alt="Hydraulics"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }} 
                            className="object-cover w-48 h-48"
                          />
                           <motion.img 
                            src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754139526/Land-Reclamation-Dredging-1-1_gs1tts.jpg" 
                            alt="Water"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }} 
                            className="object-cover w-48 h-48"
                          />
                          <motion.img 
                          src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754139456/Land-Reclamation-Dredging-1-2_tlpque.jpg" 
                          alt="Drainage"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.5 }} 
                          className="object-cover w-48 h-48"
                         />
                          <motion.img 
                          src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754142589/Land-Reclamation-Dredging-_1_tf7hnu.jpg" 
                          alt="Land"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.5 }} 
                          className="object-cover w-48 h-48 mt-4"
                         />
                        </div>
                        <h3 className="text-black font-semibold text-xl">Dredging: Enhancing Water Bodies for Progress</h3>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                            Dredging is a critical component of maintaining and improving water bodies for various purposes, from shipping to <br /> 
                            environmental conservation. Hitech employs state-of-the-art techniques and equipment to execute dredging <br /> 
                            projects with precision and efficiency, making water bodies more accessible, safer, and sustainable.
                        </p>
                        <h3 className="text-black font-semibold text-xl">Safety and Compliance: Our Unwavering Commitment</h3>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                            At Hitech, safety and compliance are non-negotiables. Our rigorous safety protocols, regular equipment <br /> 
                            maintenance, and adherence to industry standards and regulations form the bedrock of our operations. This <br /> 
                            ensures a secure working environment for our team and protects the interests of our clients.
                        </p>
                        <h3 className="text-black font-semibold text-xl">Proven Excellence: Our Portfolio Speaks for Itself</h3>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                            Our extensive portfolio showcases a myriad of successful Land Reclamation, River Canalization, and Dredging <br /> 
                            projects. Each one is a testament to our expertise, innovation, and unwavering dedication to excellence.
                        </p>
                        <h3 className="text-black font-semibold text-xl">Collaborative Partnership: Your Vision, Our Mission</h3>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                            We believe in partnering closely with our clients, turning your vision into reality. By working hand-in-hand, we ensure <br /> 
                            that your objectives are not only met but surpassed.
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

export default Land;