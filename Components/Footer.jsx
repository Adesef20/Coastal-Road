 'use client'
 
 import React from "react";
 import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
 import { MdEmail, MdPhone, Mdphone } from "react-icons/md";

const Footer = () => {
    return(
        <footer className="bg-gray-100  shadow-md text-black pt-10 pb-6 px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-8 border-b border-gray-200">
                <div>
                    <h3 className="text-3xl font-extralight mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {["Home", "Who We Are", "Service", "Project", "News & Articles", "Quarry"].map((item, index) => (
                             <li key={index}>
                                <a href="#" className="hover:text-orange-800 text-xl">{item}</a>
                             </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4 mb-4">
                        <a href="#" className="p-2 rounded-full bg-white text-black hover:bg-orange-600">
                            <FaFacebookF/>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white text-black hover:bg-orange-600">
                            <FaLinkedinIn/>
                        </a>
                    </div>
                    <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-5 rounded-md transition duration-300">
                        Contact Us
                    </button>
                </div>
            </div>

            <div className="mt-10 border-b border-gray-300">
                <h2 className="mb-6 font-bold text-2xl">ADDRESS:</h2>

                <div className="grid gap-6 max-w-4xl mx-auto pb-6 items-center justify-center text-center">
                    <div>
                       <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1751894638/Flag_of_Nigeria.svg_d6c9ej.png" 
                       alt="Nigeri Flag"
                       className="w-9 h-6 object-cover shadow-md"
                       />
                      <p className="flex text-center gap-3 mb-3 border-b border-gray-300">Floor 30 Azuri Towers, Marina District, Eko Atlantic City, Eti-Osa. Lagos Nigeria.</p>
                    </div>

                    <div>
                       <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1751896505/Flag_of_the_United_Kingdom__3-5_.svg_r85npl.png" 
                       alt="Nigeri Flag"
                       className="w-9 h-6 object-cover shadow-md"
                       />
                       <p className="flex text-center gap-3 border-b border-gray-300">201 Great Portland Street, 2nd Floor, London, United Kingdom, W1W 5AB.</p>
                    </div>

                    <div>
                       <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1751028677/Flag_of_Togo_dp9trr.png" 
                        alt="Togo Flag"
                        className="w-9 h-6 object-cover shadow-md"
                        />
                       <p className="flex text-center gap-3 border-b border-gray-300">09 Rue Boulevard Circulaire, Lomé, Togo.</p>
                    </div>

                    <div>
                        <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1751028657/ezgif.com-webp-to-jpg_pmjrb3.jpg" 
                        alt="Benin Republic Flag" 
                        className="w-9 h-6 object-cover shadow-md"
                        />
                        <p className="flex text-center gap-3">Ilot: 108-Société LA ROCHE, Quartier Patte-D'oie, Cotonou, Bénin.</p>
                    </div>    
                </div>
            </div>
            
            <div className="mt-10 border-b border-gray-300 pb-6">
                <h2 className="flex items-end font-bold text-2xl mb-5 mt-5">EMAIL:</h2>
                <p className="flex justify-center items-center gap-2 text-base font-semibold">
                    <MdEmail className="text-orange-800"/>
                    info@hitect-company.com
                 </p>
            </div>

            <div className="mt-10 text-center">
                <h2 className="flex item-end font-bold text-2xl mb-4">PHONE:</h2>
                <div className="space-y-2 text-base font-medium">
                  <p className="flex justify-center items-center gap-2">
                    <MdPhone className="text-orange-800"/>
                    +234(0) 916 000 8874
                  </p>
                  <p className="flex justify-center items-center gap-2">
                    <MdPhone className="text-orange-800"/>
                    +234(0) 916 000 8875
                  </p>
                </div>
            </div>
            <hr className="my-6 border-t border-gray-300" />
            <div className="text-center text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Hitech Construction Company Limited. Built by <span className="text-orange-900 hover:text-red-600">ShyNaDev</span>. All Rights Reserved.
            </div>
        </footer>
    );
};


export default Footer;