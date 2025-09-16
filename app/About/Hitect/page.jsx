'use client';
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EquipmentData =[
    {  name: "Crusher", count: 10 },
    {  name: "Dumper", count: 15 },
    {  name: "Slip Form Paver", count: 13 },
    {  name: "Skid steer", count: 16 },
    {  name: "Asphalt", count: 18 },
    {  name: "Recycler & Paver", count: 19 },
    {  name: "Dozer", count: 19 },
    {  name: "Loader", count: 20 },
    {  name: "TLB", count: 23 },
    {  name: "Grader", count: 30 },
    {  name: "Excavator", count: 37 },
    {  name: "Tanker", count: 56 },
    {  name: "Compactor", count: 58 },
    {  name: "Tipper", count: 120 },
];

const Hitect = () => {
    return(
        <main className="w-full px-4 py-8 text-black bg-white md:px-5">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 w-2 h-16 mt-12"></div>
                <h1 className="font-bold text-3xl mb-4">HITECH PLANT AND <br /> EQUIPEMENT</h1>
                <p className="text-gray-500 font-light text-right mb-4">Hitech operates an extensive (unencumbered) list construction plant <br /> and equipment.</p>
            </div> 
            <div>
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752156006/Dangote-Deep-Sea-Port-Road-1_l35gy6.jpg" 
                alt="Tractor"
                className="object-cover w-full h-[500px]" 
                />
            </div>
            <div className="bg-white w-full mb-4 p-4 h-[700px] px-4 py-8">
                <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 w-2 h-20 mt-12"></div>
             <h1 className="text-3xl font-bold text-black mb-4 p-4">Hitech operates an extensive (unencumbered) list construction plant and <br /> equipment, as summarised here per category type:</h1>
              <ResponsiveContainer width="100%" height="100%">
              <BarChart
               layout="vertical"
               data={EquipmentData}
               margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
             >
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis type="number" domain={[0, 120]} />
             <YAxis dataKey="name" type="category" width={150} />
             <Tooltip />
             <Bar dataKey="count" fill="red" />
             </BarChart>
             </ResponsiveContainer>
             </div>

            <div className="w-full bg-white mb-4 p-4">
             <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 w-2 h-7 mt-24"></div>
             <h1 className="font-bold text-3xl text-black mb-4 mt-20">Hitech’s specialised and state of the art modern equipment is:</h1>
            </div>
            <div className="overflow-x-auto p-4">
                <table className="min-w-full border border-gray-200 text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 text-xs uppercase font-medium text-gray-600">
                       <tr>
                        <td className="px-4 py-2 border border-gray-300 font-light text-2xl">Specialized Plant Items</td>
                        <td className="px-4 py-2 border border-gray-300 font-light text-2xl">Specification</td>
                        <td className="px-4 py-2 border border-gray-300 font-light text-2xl">Quantity</td>
                       </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td rowSpan={2} className="px-4 py-2 border border-gray-300 bg-gray-100 font-bold text-2xl text-left h-24">
                                Concrete Batching Plant 
                            </td>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl bg-gray-100">60 cu.m/h</td>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl bg-gray-300">4</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl bg-gray-300">130 cu.m/h</td>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl">6</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl bg-gray-300">Recycler</td>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl">wirtgen WR 240 & WR 250</td>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl bg-gray-300">4</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl">Cement Spreaders</td>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl bg-gray-300">16 cu.m Streumaster <br />Truck Mounted</td>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl">3</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl bg-gray-300">Concrete slip Form pavers</td>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl">Wirtgen SP 25 & SP 94</td>
                            <td className="px-4 py-2 border border-gray-300 font-bold text-2xl bg-gray-300">6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-gray-100 shadow-md mt-10 w-full h-36 p-4 mb-4">
                <ul className="list-disc text-gray-500 pl-15 p-5 mt-4">
                    <li>Hitech has 3 asphalt batching plants, located in Ibadan, Ore and Lagos</li>
                    <li>Hitech owns and operates Quarries in Calabar, Ore, Abuja, and Sokode (Togo)</li>
                </ul>
            </div>
              <div className="bg-white px-6 py-12 mt-6 md:px-20">
                <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 w-2 h-7 mt-4 ml-4"></div>
                <h1 className="font-bold text-black text-3xl -ml-10">LEARN MORE ON HOW WE OPERATE</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
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
             </div>
            
        </main>
    );
};

export default Hitect;