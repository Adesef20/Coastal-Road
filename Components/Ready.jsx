'use client'
import React from "react";


const Ready = () =>{
    return(
        <div className="px-2 md:px-7 lg:px-14">

            <div className="relative h-[300px] w-full bg-center bg-cover bg-no-repeat overflow-hidden" 
            style={{ backgroundImage: "url('https://res.cloudinary.com/dyp62yu3w/image/upload/v1751537363/Hitech_uxezxu.jpg')"}}>

            <div className="absolute inset-0 bg-opacity-50 z-0 "></div>

            <div className="relative z-10 flex flex-col justify-center items-start p-6 h-full text-whitetext-center">
                <div className="flex items-center gap-3 mb-4">
                     <div className="bg-red-800 w-2 h-7"></div>
                <h2 className="text-4xl font-bold">Ready to Build Your Project</h2>
                </div>
               <p className="text-lg mb-6 flex flex-wrap items-center gap-6 mt-4">
                    Whether you have a specific project in mind or need assistance in planning and execution, we invite you to contact <br />
                    us today for a consultation. Together, we can build a brighter future for generations to come.
                    <button className="bg-white text-orange-600 hover:bg-red-800 hover:text-white font-bold
                    px-4 py-2 rounded-lg transition-all duration-300 shadow-md">CALL US NOW</button>
                </p>
            </div>
         </div>
        </div>

    );
};

export default Ready;