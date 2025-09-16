'use client';
import React from "react";

const Nigeria = () => {
    return(
        <main className="max-w-7xl mx-auto bg-white p-4 space-y-6">
         <div className="absolute left-4 top-24 transform -translate-y-1/2 bg-red-800 w-6 h-6"></div>
         <h1 className="text-4xl text-black mt-8 font-bold">REPUBLIC OF NIGERIA</h1>
         <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754403312/Projects-Nigeria_1_wzaa3o.jpg" 
         alt="Bridges" className="object-cover w-full h-[600px]" />

         <div className="flex flex-wrap items-start gap-6">
                <button className="py-2 px-4 mt-5 bg-red-800 text-white rounded font-extralight hover:bg-red-900 transition">All Lagos Projects</button>
         </div>
         <div className="grid grid-cols-5 gap-2">
            {["Lagos Calabal Coastal Highway Project", "AirPort Road Construction", "Agege Pen Cinema Bridge", "Eti-Osa Epe Expressway", "Osborne Jetty Terminal Building",
               "Bar Beach Sharoline Protection", "Victoria Island Road Networks", "Ikorodu Road Reconstruction", "Dangote"
            ].map((text, index) => (
                <h2 key={index} className="text-sm text-black font-extralight px-4 py-2 rounded text-center cursor-pointer transition duration-300 hover:bg-red-800 hover:text-white hover:scale-105">{text}</h2>
            ))}
         </div>

             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754259558/Lagos-Calabar-Coastal-Highway_nx23vg.jpg" 
                    alt="Coastal"  className="object-cover rounded h-56"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
c                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Summary</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754259930/LAGOS-CALABAR-COASTAL-HIGHWAY-PROJECT-1-5_dt0nwx.jpg" 
                    alt="Coastal"  className="object-cover rounded w-full h-64"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Project</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754259906/LAGOS-CALABAR-COASTAL-HIGHWAY-PROJECT-1-4_ggmlqw.jpg" 
                    alt="Coastal"  className="object-cover rounded w-full h-64"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Project</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754259884/LAGOS-CALABAR-COASTAL-HIGHWAY-PROJECT-1-3_rfgqde.jpg" 
                    alt="Coastal"  className="object-cover rounded w-full h-64"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Project</h2>
                    </div>
                </div>
             </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754259861/LAGOS-CALABAR-COASTAL-HIGHWAY-PROJECT-1-2_ngpnnq.jpg" 
                    alt="Coastal" className="object-cover w-full h-36"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Project</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754259731/LAGOS-CALABAR-COASTAL-HIGHWAY-PROJECT.-1-2_czevvw.jpg" 
                    alt="Coastal" className="object-cover w-full h-36"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Project</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754259646/LAGOS-CALABAR-COASTAL-HIGHWAY-PROJECT.-1-1_t8tvzb.jpg" 
                    alt="Coastal" className="object-cover w-full h-36"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Project</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754259608/LAGOS-CALABAR-COASTAL-HIGHWAY-PROJECT.-_w4zzmw.jpg" 
                    alt="Coastal" className="object-cover w-full h-36"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Project</h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-4 gap-4">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754255623/Continuously-Reinforced-Concrete-Pavements-1-4_cejxdd.jpg" 
                    alt="Highway" className="object-cover w-full h-72"/>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                   <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Project</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754259777/LAGOS-CALABAR-COASTAL-HIGHWAY-PROJECT-_uc6qre.jpg" 
                    alt="Highway" className="object-cover w-full h-72"/>
                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Lagos Calabar Coastal Highway Project</h2>
                    </div>
                </div>
              <div className="relative group overflow-hidden rounded-lg shadow-md">
                 <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754412420/Airport-Road-Construction_wlwuhy.jpg" 
                 alt="Airport Road" className="object-cover rounded" />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                 <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Pastel Green Pink Weekly <br /> Planner Diary Journal-1</h2>
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
             <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1753458114/AIRPORT-ROAD-_pzblc0.jpg" 
                    alt="Highway" className="object-cover rounded h-72"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 w-full text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">AirPort Road</h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754477681/AIRPORT-ROAD-1-1_1_eirhhr.jpg" 
                alt="Airport Road" className="object-cover h-56 w-56 rounded" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">AirPort Road</h2>
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754477703/AIRPORT-ROAD-1-2_1_axpepr.jpg" 
                alt="Airport Road" className="object-cover h-56 w-56 rounded" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">AirPort Road</h2>
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754477661/AIRPORT-ROAD_1_ukkgvx.jpg" 
                alt="Airport Road" className="object-cover h-56 w-56 rounded" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">AirPort Road</h2>
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754479087/Agege-Pen-Cinema-Bridge-_wuh3ll.jpg" 
                alt="Airport Road" className="object-cover h-56 w-56 rounded" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Agege Pen Cinema Bridge -[Project Information]</h2>
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754479916/Agege-Pen-Cinema-Bridge-_d4devd.png" 
                alt="Airport Road" className="object-cover h-56 w-56 rounded" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Agege Pen Cinema Bridge</h2>
                </div>
            </div>
          </div> 

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754480059/Agege-Pen-Cinema-Bridge-_myrgth.jpg" 
                alt="Airport Road" className="object-cover h-56 w-full rounded" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Agege Pen Cinema Bridge</h2>
                </div>
            </div> 
            <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754480536/Agege-Pen-Cinema-Bridge-1-1_cytc5h.jpg" 
                alt="Airport Road" className="object-cover h-56 w-full rounded" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Agege Pen Cinema Bridge</h2>
                </div>
            </div> 
            <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754480554/Agege-Pen-Cinema-Bridge-1-2_ffx8zb.jpg" 
                alt="Airport Road" className="object-cover h-56 w-full rounded" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Agege Pen Cinema Bridge</h2>
                </div>
            </div> 
            <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754480018/Agege-Pen-Cinema-Bridge_feqyqd.jpg" 
                alt="Airport Road" className="object-cover h-56 w-full rounded" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                    <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Agege Pen Cinema Bridge</h2>
                </div>
            </div> 
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754906682/Eti-Osa-Epe-Expressway-_1_vixcdm.jpg" 
              alt="Eti-Osa"  className="object-cover w-full h-56"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Eti Osa - Epe expressWay - [Project - Information]</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754906787/Eti-Osa-Epe-Expressway-_1_jkxqyc.jpg" 
              alt="Eti-Osa"  className="object-cover w-full h-56"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Eti Osa - Epe expressWay</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754906825/Eti-Osa-Epe-Expressway-1-1_1_fwq0ge.jpg" 
              alt="Eti-Osa"  className="object-cover w-full h-56"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Eti Osa - Epe expressWay</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754906878/Eti-Osa-Epe-Expressway-1-2_1_vtikov.jpg" 
              alt="Eti-Osa"  className="object-cover w-full h-56"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Eti Osa - Epe expressWay</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754906914/Eti-Osa-Epe-Expressway-1-3_1_t2vlzf.jpg" 
              alt="Eti-Osa"  className="object-cover w-full h-56"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Eti Osa - Epe ExpressWay</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754908368/Eti-Osa-Epe-Expressway-1-4_1_rmk01v.jpg" 
              alt="Eti - Osa" className="object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Eti Osa - Epe Expressway</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754908990/Osborne-Jetty-Terminal-1-1_1_g40max.jpg" 
              alt="Eti - Osa" className="object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Osborne Jetty Terminal Building - [Project - Information]</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754909093/Osborne-Jetty-Terminal-Building-_1_cmwwg3.jpg" 
              alt="Eti - Osa" className="object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Osborne Jetty Terminal Building</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754909168/Osborne-Jetty-Terminal-Building-1-1_1_uuy5bz.jpg" 
              alt="Eti - Osa" className="object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Osborne Jetty Terminal Building</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754909242/Osborne-Jetty-Terminal-Building-1-2_1_qocofz.jpg" 
              alt="Eti - Osa" className="object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Osborne Jetty Terminal Building</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754909319/Osborne-Jetty-Terminal-Building-1-3_1_srtgrw.jpg" 
              alt="Osborne Jetty" className="object-cover h-70"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 ransition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Osborne Jetty Terminal Building</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
               <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754909357/Osborne-Jetty-Terminal-Building-1-4_1_hctql2.jpg" 
              alt="Osborne Jetty" className="object-cover h-70"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 ransition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Osborne Jetty Terminal Building</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754909394/Osborne-Jetty-Terminal-Building-1-5_1_cwgzdz.jpg" 
              alt="Osborne Jetty" className="object-cover h-70"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 ransition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Osborne Jetty Terminal Building</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754909041/Osborne-Jetty-Terminal-Building_1_dknnd8.jpg" 
              alt="Osborne Jetty" className="object-cover h-70"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 ransition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Osborne Jetty Terminal Building</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754912393/The-Bar-Beach-Shoreline_1_vy3dwr.jpg" 
              alt="Victiria" className="object-contain w-full h-70" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">The Bar Beach Shoreline - [Project - Information]</h2>
              </div>
            </div>
          </div>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754909357/Osborne-Jetty-Terminal-Building-1-4_1_hctql2.jpg" 
              alt="Beach" className="object-cover w-full h-56
              " />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Bar Beach Shoreline Protection</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754914206/Bar-Beach-Shoreline-Protection-1-1_2_eno6rx.jpg" 
              alt="Beach" className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Bar Beach Shoreline Protection</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754914231/Bar-Beach-Shoreline-Protection-1-2_2_y1cf8p.jpg" 
              alt="Beach" className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Bar Beach Shoreline Protection</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754914180/Bar-Beach-Shoreline-Protection_2_xaygif.jpg" 
              alt="Beach" className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Bar Beach Shoreline Protection</h2>
              </div>
            </div>
           </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754911179/Victoria-Island-Road-Networks_1_ke6mcf.jpg" 
              alt="Victoria" className="object-cover w-full h-56"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Victoria Island Road Networks - [Project - Information]</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754911222/Victoria-Island-Road-Networks-_1_gtghkp.jpg" 
              alt="Victoria"  className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Victoria Island Road Networks</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754911305/Victoria-Island-Road-Networks-1-2_1_zrfwhw.jpg" 
              alt="Victoria" className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Victoria Island Road Networks</h2>
              </div>
            </div> 
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754911280/Victoria-Island-Road-Networks-1-1_1_gjwyga.jpg" 
              alt="Victoria" className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Victoria Island Road Networks</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754911338/Victoria-Island-Road-Networks-1-3_-_Copy_txzqeu.jpg" 
              alt="Victoria" className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Victoria Island Road Networks</h2>
              </div>
            </div>
           </div>

           {/* <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
           <div className="relavite group overflow-hidden rounded-lg shadow-md">
            <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754911382/Victoria-Island-Road-Networks-1-4_-_Copy_mvcwgg.jpg" 
            alt="Victoria" className="object-cover " />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
              <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight"></h2>
            </div>
            </div> 
           <div className="relavite group overflow-hidden rounded-lg shadow-md">
            <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755036505/Ikorodu-Road-Reconstruction_-_Copy_slr6tm.jpg" 
            alt="Ikorodu" className="object-cover w-full h-54" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
              <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight"></h2>
            </div>
            </div> 
           <div className="relavite group overflow-hidden rounded-lg shadow-md">
            <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754480536/Agege-Pen-Cinema-Bridge-1-1_cytc5h.jpg" 
            alt="Ikorodu" className="object-cover w-full h-54" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
              <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight"></h2>
            </div>
            </div> 
           <div className="relavite group overflow-hidden rounded-lg shadow-md">
            <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1754909041/Osborne-Jetty-Terminal-Building_1_dknnd8.jpg" 
            alt="Ikorodu" className="object-cover w-full" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
              <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight"></h2>
            </div>
            </div> 
          </div> */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755038628/Ikorodu-Road-Reconstruction_1_-_Copy_vi1dly.jpg" 
              alt="Ikorodu" className="object-cover h-58" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Ikorodu Road Construction</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750866812/Dangote-Deep-Sea-Port-Road-2_f92zxj.jpg" 
              alt="Dabgote" className="object-cover h-58" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Dangote Deep Sea Port Road - [Project - Information]</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867164/Dangote-Deep-Sea-Port-Road-1-300x225_oinpjb.jpg" 
              alt="Dangote" className="object-cover h-58"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Dangote Deep Sea Port Road</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867195/Dangote-Deep-Sea-Port-Road_nt5pyt.jpg" 
              alt="Dangote" className="object-cover h-58" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Dangote Deep Sea Port Road</h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867218/Dangote-Deep-Sea-Port-Road2_fwmvwy.jpg" 
              alt="Dangote" className="object-cover h-54"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                 <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Dangote Deep Sea Port Road</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755040553/Demolition-at-Bank-of-Industry_-_Copy_l3logo.jpg" 
              alt="Demolition" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                 <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Demolition at Bank of Industry - [Project - Information]</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755040577/Demolition-at-Bank-of-Industry-_-_Copy_vrgr4w.jpg" 
              alt="Demolition"  className="object-cover h-54"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                 <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Demolition at Bank of Industry</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755040693/Demolition-at-Bank-of-Industry-1-1_1_ddetk9.jpg" 
              alt="Demolition" className="object-cover h-54" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                 <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Demolition at Bank of Industry</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755040751/Demolition-at-Bank-of-Industry-1-2_-_Copy_q5ruqi.jpg" 
              alt="Demolition" className="object-cover h-54 w-full" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                 <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Demolition at Bank of Industry</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755040655/Demolition-at-Bank-of-Industry_soho0u.jpg" 
              alt="Demolition" className="h-54 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                 <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Demolition at Bank of Industry</h2>
              </div>
            </div>
          </div>

          <hr className=" border-t-3 border-gray-500 my-5"/>
          <div className="flex flex-wrap items-start gap-2">
              <button className="py-2 px-4 mt-5 bg-red-800 text-white rounded font-extraligh">Other States Projects</button>
              <button className="py-2 px-4 mt-5 text-gray-500 rounded font-extralight hover:bg-red-800 hover:text-white transition">Benin Roads</button>
              <button className="py-2 px-4 mt-5 text-gray-500 rounded font-extralight hover:bg-red-800 hover:text-white transition">Dualisation Of Toll Gate Interchange - Ibadan</button>
         </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755188179/Benin-Roads_-_Copy_nddteh.jpg" 
              alt="Edo" className="object-contain w-full h-44"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Benin Road - [Project - Information]</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755188268/Benin-Roads-_uagpuy.jpg" 
              alt="Road" className="object-cover w-full h-44"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Benin Road</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755188359/Benin-Roads-1-1_haagoj.jpg" 
              alt="Tile Road" className="object-cover w-full h-44" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Benin Road</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755188212/Benin-Roads-1-2_1_l8ifa5.jpg" 
              alt="Woman" className="object-cover w-full h-44"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Benin Road</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755188212/Benin-Roads-1-2_1_l8ifa5.jpg" 
              alt="Stone Base" className="object-cover w-full h-56"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Benin Road</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Benin Road</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755187621/Dualisation-of-Toll-Gate-Interchange-_-Ibadan_-_Copy_ojb9cx.jpg" 
              alt="Ibadan" className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Dualization of Toll Gate Interchange - Ibadan</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755188035/Dualisation-of-Toll-Gate-Interchange-_-Ibadan-_1_-_Copy_oahe8t.jpg" 
              alt="Road" className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Dualization of Toll Gate Interchange - Ibadan</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755188092/Dualisation-of-Toll-Gate-Interchange-_-Ibadan-1-1_-_Copy_cq1isn.jpg" 
              alt="Asphalt" className="object-cover w-full h-56"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Dualization of Toll Gate Interchange - Ibadan</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755188000/Dualisation-of-Toll-Gate-Interchange-_-Ibadan-_-_Copy_lhemzr.png" 
              alt="Road" className="object-cover w-full h-56" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h2 className="text-white text-center text-sm md:text-sm px-2 font-extralight">Dualization of Toll Gate Interchange - Ibadan</h2>
              </div>
            </div>
          </div>

          <div className="w-full h-72 py-4 relative bg-cover bg-center mt-5" 
                  style={{ backgroundImage: "url('https://res.cloudinary.com/dyp62yu3w/image/upload/v1751537363/Hitech_uxezxu.jpg')", }}
            
                  >
                
                 <div className="relative z-10 p-8 text-white ">
                    <h1 className="font-bold text-4xl mb-4 mt-5">Ready To Build Your Project</h1>

                     <p className="text-lg mb-6 flex flex-wrap items-center gap-6 mt-4">
                      Ready to embark on your next Roadworks, Bridges, Drainage & Concrete Structures? Contact us today to discover <br /> 
                      how Hitech can transform your vision into a reality. Together, we’ll build a future that’s sustainable, efficient, and <br /> 
                      thriving
                     <button className="bg-white text-orange-600 hover:bg-red-800 hover:text-white font-bold
                      px-4 py-2 rounded-lg transition-all duration-300 shadow-md">CALL US NOW</button>
                    </p>
                  </div>
            </div>


          </main>
    );
};

export default Nigeria;