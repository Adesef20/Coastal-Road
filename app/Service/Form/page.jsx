'use client';
import React from "react";

const Form = () =>{
    return(
        <main className="bg-white px-4 py-8 text-black w-full md:px-5">
            <div className="flex items-center px-6 py-4">
                <div className="absolute left-12 transform -translate-y-1/2 bg-red-800 w-6 h-6 top-25"></div>
                <h1 className="text-4xl font-bold mb-4">FORM BITUMENT STABILISED <br />MATERIAL</h1>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750689265/Form-Bitumen-Stabilsed-Materials1_o8dacq.jpg" 
                alt="Bitument"
                className="object-cover w-full h-[610px]" 
                />
            </div>
            <div className="w-full px-6 py-12 bg-gray-200 mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-6">
                         <h2 className="text-xl text-black font-semibold">Our Distintive Approach: Merging Expertise With Cutting-Edge Technology</h2>
                         <p className="font-extralight text-sm text-gray-700 mb-4">
                           Hitech adopts a unique approach, amalgamating on-site professional management with a team of office-based <br /> 
                           engineering, design, and planning experts. Equipped with advanced computerized facilities, we stand at the <br /> 
                           forefront of Construction and Engineering Technology in Nigeria. This convergence of expertise and technology <br /> 
                           sets us apart in the industry.
                        </p><br /> <br />
                        <span className="text-black text-2xl p-10 font-bold border-2 border-red-700 bg-white">
                                Equipped with advanced computerized facilities
                        </span>
                         <h2 className="text-xl text-black mt-20 font-semibold">Foam Bitumen Stabilised Materials: Revolutionizing Construction</h2>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                          At Hitech, we are at the forefront of the Foam Bitumen Stabilised Materials revolution. This innovative approach <br /> 
                          involves blending bitumen with foam to create a stable, durable, and environmentally-friendly material for various <br /> 
                          construction applications. From road construction to earthworks, this technique offers unparalleled benefits in <br /> 
                          terms of strength, cost-effectiveness, and sustainability.
                        </p>
                        <h2 className="text-xl  text-black mt-10 font-semibold">Applications of Foam Bitumen Stabilised Materials</h2>
                        <ul className="list-decimal p-5 text-black font-sans mb-6">
                            <li>Road Construction and Rehabilitation: <span className="text-gray-600">Our expertise in utilizing Foam Bitumen Stabilised Materials for road<br />
                                construction and rehabilitation projects ensures durable and long-lasting infrastructure, even in challenging <br />
                                environments.</span></li>
                            <li>Earthworks and Embankments: <span className="text-gray-600">
                                This technique proves invaluable in creating stable embankments and <br />
                                conducting earthmoving activities, providing a solid foundation for various structures.
                                </span></li>
                            <li>Environmental Remediation: <span className="text-gray-600">
                                Foam Bitumen Stabilised Materials are a sustainable choice for environmental <br /> 
                               remediation projects, ensuring stability and containment
                                </span></li>
                        </ul>
                        <h2 className="text-black font-semibold mb-2">Safety and Compliance: Our Unwavering Commitment</h2>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                          At Hitech, safety and compliance are paramount. Our rigorous safety protocols, combined with regular equipment <br /> 
                          maintenance and adherence to industry standards and regulations, form the backbone of our operations. This <br /> 
                          guarantees a secure working environment for our team and safeguards the interests of our clients.
                        </p>
                        <h2 className="text-black font-semibold mb-2">Proven Excellence: Our Portfolio Speaks for Itself</h2>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                            Our extensive portfolio showcases a multitude of successful projects involving Foam Bitumen Stabilised Materials. <br /> 
                            Each project serves as a testament to our expertise, innovation, and unwavering dedication to excellence.
                        </p>
                        <h2 className="text-black font-semibold mb-2">Collaborative Partnership: Your Vision, Our Mission</h2>
                        <p className="font-extralight text-sm text-gray-700 mb-4">
                            We believe in forging strong partnerships with our clients, turning your vision into reality. By working hand-in-hand,<br /> 
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

export default Form;