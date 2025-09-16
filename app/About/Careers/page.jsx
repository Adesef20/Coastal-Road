'use client';
import React from "react";

const Careers = () =>{
    return(
        <main className="bg-white w-full py-8 px-4 md:px-5">
            <div>
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750689403/Recycling-of-existing-Roads3_cq5b4l.jpg" alt="Cone" 
                 className="object-cover w-full h-[500px]"
                />
            </div>
            <div className="flex items-center justify-between px-6 py-4">
                <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 w-2 h-5"></div>
                <h1 className="font-bold text-3xl text-black mb-4">Careers</h1>
            </div>
            <div className="flex flex-col md:flex-row h[500px]">
                    <div className="w-[450px] md:w-1/2 h-full overflow-y-auto">
                    <p className="text-gray-700 leading-loose">
                        At HITECH we believe that our most important resource is our employees and we aim to <br /> 
                        build a challenging and rewarding work environment where competent people can develop <br /> 
                        and utilize their full potential to achieve the Company’s as well as their own goals. <br /> <br />

                       We believe in team work to achieve results and ensure client satisfaction upon project <br /> 
                       delivery.​ <br /><br />

                       We are always looking for highly skilled, committed and enthusiastic people to join our <br /> 
                       workforce and in return, we offer an opportunity to develop your skills by working on some <br /> 
                       of the most prestigious construction projects underway in Nigeria.
                    </p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1753362982/Hitech-Worker_qoe4h7.jpg" 
                        alt="Worker" 
                        className="object-cover w-[550px] h-[450px]"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center bg-gray-100 text-black w-full h-36 mt-5 rounded">
                    <h1 className="font-extralight text-3xl text-center">
                        Join The Team <br />
                      Available Positions Will Appear Here
                    </h1>
                </div>
        </main>
    );
};

export default Careers;     