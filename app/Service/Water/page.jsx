'use client';
import React from "react";

const Water = () => {
    return(
        <main className="w-full px-6 py-4 text-black bg-white md:px-5">
            <div className="flex items-center px-6 py-4">
                <div className="absolute left-11 transform -translate-y-1/2 top-22 bg-red-800 w-4 h-5"></div>
                <h1 className="font-bold text-4xl mb-4">WATER SUPPLY & IRRIGATION <br /> SCHEME</h1>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750688726/Water-Supply-and-Irrigation2_q7oj71.jpg" 
                alt="Water" className="object-cover w-full h-[600px]" />
            </div>
            <div className="w-full px-6 py-12 bg-gray-200 mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-sm font-extralight text-gray-700 mb-4">
                            Since its inception in 1988, Hitech has consistently been at the forefront of the construction and engineering <br />
                            landscape in Nigeria. Today, we proudly stand as one of the leading Building & Civil Engineering Contractors in the <br /> 
                            country. With headquarters in Lagos and regional offices strategically positioned in Abuja, Ibadan, and Benin City, <br />
                            we have established a formidable presence across Nigeria. <br /> <br /> <br />
                        </p>
                        <span className="text-3xl bg-white font-bold border-2 border-red-700 p-5">Pioneering Excellence Since 1988</span>
                        <h3 className="text-xl text-black mt-10 font-semibold">Our Approach: Blending Expertise With Innovation</h3>
                        <p className="text-sm  font-extralight text-gray-700 mb-4">
                            At Hitech, we understand the critical importance of Water Supply & Irrigation Schemes in driving sustainable <br /> 
                            development. Our unique approach combines on-site professional management with a team of office-based <br /> 
                            engineering, design, and planning experts, all equipped with state-of-the-art computerized facilities. This powerful <br /> 
                            combination enables us to not only meet but exceed industry standards, setting new benchmarks in Construction <br /> 
                            and Engineering Technology in Nigeria.
                        </p>
                        <h3 className="text-xl font-semibold text-black mt-3">Tailored Solution For Evry Project</h3>
                        <p className="text-sm font-extralight text-gray-700 mb-4">
                            With decades of experience, we have honed our skills in designing and executing Water Supply & Irrigation <br /> 
                            Schemes that are tailored to the specific needs of each project. Whether it’s a complex urban water supply system <br /> 
                            or a precision-engineered irrigation scheme, our team brings a wealth of knowledge and technical expertise to <br /> 
                            every endeavor.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1753876375/Water-Supply-and-Irrigation-_wxrauz.jpg" 
                            alt="Pipe line" 
                            className="object-cover w-72 h-72"
                            />
                            <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1753876401/Water-Supply-and-Irrigation-1-1_c130jf.jpg" 
                            alt="Pipe line" 
                            className="object-cover w-72 h-72"
                            />
                            <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1753876325/Water-Supply-and-Irrigation_iiqkpt.jpg" 
                            alt="Pipe line" 
                            className="object-cover w-72 h-72"
                            />
                            <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1753876455/Water-Supply-and-Irrigation-1-2_sjo1mw.jpg" 
                            alt="Pipe line" 
                            className="object-cover w-72 h-72"
                            />
                            <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1753876486/Water-Supply-and-Irrigation-1-3_om4uc8.jpg" 
                            alt="Pipe line" 
                            className="object-cover w-72 h-72"
                            />
                        </div>
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

export default Water;