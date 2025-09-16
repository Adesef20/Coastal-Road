'use client';
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Managerial', count: 115 },
  { name: 'Plant & Operator', count: 514 },
  { name: 'Skilled Staff', count: 1879 },
  { name: 'Unskilled Staff', count: 354 },
];

const Human = () => {
    return(
        <main className="w-full px-4 py-8 text-black bg-white md:px-5">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 w-2 h-7 ml-10 -mt-6"></div>
            <h1 className="font-bold text-3xl pl-15 mb-4">HITECH HUMAN <br /> RESOURCES</h1>
            <p className="text-gray-500 text-right font-light">Our greatest asset is our people. Hitech’s management team is made <br />
                up of a crop of seasoned professionals, with diverse skills in various <br />
                backgrounds, as well as depth of experience gathered from national <br /> 
                and international institutions.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750689147/Land-Reclamation-Dredging2_aqcu7s.jpg" 
                alt="Group" 
                className="object-cover w-full h-[500px]"
                />
            </div>
            <div className="bg-gray-100 w-full rounded shadow-md mt-4 p-8">
                <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 ml-10 w-2 h-7 mt-4"></div>
                <h1 className="font-bold text-3xl mb-4 pl-15">Human Resources</h1>
                <p className="text-gray-500 font-light pl-8 mb-8">Over the years, these management team have brought their knowledge, experience and leadership to provide the expertise, professionalism and innovative 
                    approaches fundamental to the execution of successful projects. We have a record of pioneering innovations in the Nigeria construction sector.</p>
            </div>
            <div className="bg-white mt-6">
                <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 w-2 h-14 mt-8 ml-10"></div>
                <h1 className="font-bold text-3xl mb-8 pl-15">Hitech currently employs over 2,500 staff members in the following <br /> categories:</h1>
            </div>
            <div className="flex items-center justify-center mt-10">
                 <ResponsiveContainer width="70%" height={500}>
                  <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 2500]} />
                  <Tooltip />
                  <Bar dataKey="count" fill="red" />
                  </BarChart>
                  </ResponsiveContainer>
            </div>
            <div className="bg-white mt-10">
                <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 ml-10 w-2 h-7 mt-4"></div>
                <h1 className="font-bold text-3xl mb-4 pl-15">Organization Structure</h1>
            </div>
            <div className="relative flex items-center justify-center text-white py-8 px-4 md:px-24"

             style={{ backgroundImage: `url('https://res.cloudinary.com/dyp62yu3w/image/upload/v1751537363/Hitech_uxezxu.jpg')`, 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
             }}>
                <div className="relative p-8">
                    <h1 className="text-3xl font-bold text-center text-orange-700 mb-10">Organizational Structure</h1>
                    <div className="relative flex flex-col text-center">
                        <div className="bg-red-800 text-white font-bold py-2 px-4 rounded-full shadow-md inline-block">Management</div>
                        <div className="h-8 w-1 bg-black ml-43"></div>
                    </div>
                    <div className="flex justify-around w-full mb-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-orange-600 text-white py-2 px-3 font-semibold rounded">Procurement</div>
                            <div className="h-8 w-1 bg-black"></div>
                            <div className="mt-3 space-y-2">
                                <div className="bg-gray-300 px-2 py-1 rounded">Precast Factory</div>
                                <div className="bg-gray-300 px-2 py-1 rounded">Quarry</div>
                                <div className="bg-gray-300 px-2 py-1 rounded">Plant & Equipment</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                     <div className="bg-orange-600 text-white py-2 px-3 font-semibold rounded">Project Management</div>
                        <div className="h-8 w-1 bg-black"></div>
                        <div className="mt-3 space-y-2">
                            <div className="bg-gray-300 px-2 py-1 rounded">Operation</div>
                            <div className="bg-gray-300 px-2 py-1 rounded">Planning & Design</div>
                            <div className="bg-gray-300 px-2 py-1 rounded">Quality & Safety</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-8 w-1 bg-black"></div>
                        <div className="bg-orange-600 text-white py-2 px-3 font-semibold rounded">Admin / Financial</div>
                    </div>
                </div>

        
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 shadow-lg">
                    <div className="bg-gray-100 shadow-md p-6 border-4 border-red-900 w-full h-full">
                        <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752594378/icons8-history-10000_q3dnuw.png" 
                        alt="Road 5"
                        className="object-cover w-20 h-20" 
                        />
                        <h2 className="text-2xl mb-4 font-bold">Hitech Company History</h2>
                        <p className="text-sm font-extralight mb-4 text-gray-600">
                        At Hitech Construction, we lead the way in
                        delivering quality across international and 
                        regional construction projects. Our pursuit 
                        of excellence, empowered by technological 
                        expertise, and unwavering dedication to
                        quality and safety, guarantee exceptional
                        results that redefine industry standards.</p>
                    </div>
                    <div className="bg-gray-100 shadow-md p-6 border-4 border-red-900 w-full h-full">
                        <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752498973/icons8-human-resources-100_enpkie.png" 
                        alt="Road 6"
                        className="object-cover w-20 h-20" 
                        />
                        <h2 className="text-2xl mb-4 font-bold">Hitech Human Resources</h2>
                        <p className="text-sm font-extralight mb-4 text-gray-600">
                            Our greatest asset is our people. Hitech’s 
                            management team is made up of a crop of 
                            seasoned professionals, with diverse skills 
                            in various backgrounds, as well as depth of 
                            experience gathered from national and 
                            international institutions.
                        </p>
                    </div>
                    <div className="bg-gray-100 shadow-md p-6 border-4 border-red-900 w-full h-full">
                        <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752499017/icons8-tractor-100_mr0yrr.png" 
                        alt="Road 7"
                        className="object-cover w-20 h-20" 
                        />
                        <h2 className="text-2xl mb-4 font-bold">Hitech Plant And Equipment</h2>
                        <p className="text-sm font-extralight mb-4 text-gray-600">
                           Hitech operates an extensive 
                           (unencumbered) list construction plant and 
                           equipment,
                        </p>
                    </div>
                    <div className="bg-gray-100 shadow-md p-6 border-4 border-red-900 w-full h-full">
                        <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752498992/icons8-safety-100_yxigvo.png" 
                        alt="Road 8"
                        className="object-cover w-20 h-20" 
                        />
                        <h2 className="text-2xl mb-4 font-bold">Hitech Company Compliance</h2>
                        <p className="text-sm font-extralight mb-4 text-gray-600">
                           Through our comprehensive Environmental, 
                           Social, Health & Safety (ESHS) Management
                           Plans, and specifically our Code of Conduct, 
                           Hitech staff are required to follow all listed 
                           company guidelines on Ethics and Business 
                           Conduct, which include details of the 
                           following policies and practices:
                        </p>
                    </div>
                </div>
        </main> 
    );
};

export default Human;