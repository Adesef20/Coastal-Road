'use client';
import react from "react";

const Quarry = () => {
    return(
        <main className="max-w-7xl mx-auto bg-white p-4">
            <div className="relative h-[500px] w-full bg-center bg-cover bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dyp62yu3w/image/upload/v1755254384/Calabar_1_ix3x4k.jpg')"}}>
                <div className="absolute left-5 transform -translate-y-1/2 bg-red-800 w-6 h-6 mt-50"></div>
                <h1 className="text-4xl text-white font-bold mt-55 pl-4">HITECT QUARRY</h1>
                <p className="text-sm font-extralight text-white pl-4 text-left">Quarrying is the process of extracting rock, sand, gravel, or other minerals from the ground to <br /> 
                     produce materials for construction and various other applications.
                </p>
            </div>
            <div className="relative w-full bg-center bg-cover bg-no-repeat overflow-hidden p-4 h-full"
             style={{backgroundImage: "url('https://res.cloudinary.com/dyp62yu3w/image/upload/v1755254384/Calabar_1_ix3x4k.jpg')"}}>

                <div className="absolute inset-0 bg-white/50 backdrop-blur-md"></div>
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative grid grid-cols-1 gap-10 text-left z-10">
                    <div>
                        <div className="absolute left-4 mt-8 transform -translate-y-1/2 bg-red-800 w-2.5 h-7"></div>
                        <h3 className="text-2xl text-black mb-4 pl-10 p-4 font-bold">WHO WE ARE</h3>
                        <p className="mt-2 pl-4 text-gray-800">Hitech Construction Company Ltd is a privately-owned limited liability company incorporated in Nigeria. <br /> <br />
                          Our company is fully licensed to conduct mining and related activities, adhering to Nigerian, Togolese, and <br />
                          international standards. Under the capable leadership of our experienced quarry manager, we ensure the highest <br />
                          quality blasting methods and operational excellence.
                        </p>
                    </div>
                    
                    <div>
                        <div className="absolute left-4 mt-23 transform -translate-y-1/2 bg-red-800 w-2.5 h-14"></div>
                        <h3 className="text-2xl text-black mt-15 mb-4 pl-10 font-bold">BRIEF DESCRIPTION OF THE GRANITE ROCK DEPOSIT <br /> WITHIN OUR QUARRY AREA</h3>
                         <p className="mt-2 pl-4 text-gray-800">
                            The granite rock deposits within our quarry are distinguished by their high specific gravity and solidity compared to <br /> 
                            those in the southeastern region of Nigeria. These areas are part of the crystalline rocks of the Nigeria Pre- <br /> 
                            Cambrian Basement complex. The granitic rock throughout our quarry area forms massive outcroppings at higher <br /> 
                            elevations above sea level.
                         </p>
                    </div>

                    <div className="grid grid-cols-2 rounded-lg shadow-lg  w-full gap-6">
                        <div className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-sm">
                            <div className="absolute left-6 transform mt-7 -translate-y-1/2 bg-red-800 w-2.5 h-14"></div>
                            <h3 className="text-2xl text-black mb-4 font-bold pl-6">Commitment To Best Practice And <br /> Environmeent Standards</h3>
                            <p className="mt-2 text-gray-800">
                                At Hitech Construction Co. Ltd, we take pride in using the industry’s best <br /> 
                                methods for blasting and aligning with all international standards in waste <br /> 
                                management, stakeholder engagement, and all other environmental and social <br /> 
                                requirements necessary for a quarry operation. We adhere to the Equator <br /> 
                                Principles and IFC Performance Standards, ensuring responsible and <br /> 
                                sustainable quarrying practices.
                            </p>
                        </div>
                        <div className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-sm">
                            <div className="absolute left-6 transform mt-5 -translate-y-1/2 bg-red-800 w-2.5 h-7"></div>
                            <h3 className="text-2xl text-black mb-4 font-bold pl-6">Stages In The Quarry Process</h3>
                            <div className="flex flex-col space-y-2 mt-10">
                                <div className="flex items-center space-x-3">
                                   <div className="flex items-center justify-center w-4 h-4 rounded-full bg-red-700 text-white text-sm font-extralight">
                                    ✔
                                    </div>
                                    <span className="text-gray-800 font-medium">Drilling</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center justify-center w-4 h-4 rounded-full bg-red-700 text-white text-sm font-extralight">
                                        ✔
                                    </div>
                                    <span className="text-gray-800 font-medium">Blasting</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center justify-center w-4 h-4 rounded-full bg-red-700 text-white text-sm font-extralight">
                                        ✔
                                    </div>
                                    <span className="text-gray-800 font-medium">Loading From Blasting Surface</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center justify-center rounded-full w-4 h-4 bg-red-700 text-white text-sm font-extralight">
                                        ✔
                                    </div>
                                    <span className="text-gray-800 font-medium">Crushing</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center justify-center rounded-full w-4 h-4 bg-red-700 text-white text-sm font-extralight">
                                        ✔
                                    </div>
                                    <span className="text-gray-800 font-medium">Scaling / Selling Stage</span>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-gray-500 my-5"/>
            <div className="flex flex-wrap items-start gap-2">
                <button className="py-2 px-4 mt-5 bg-red-800 text-white rounded font-extralight">Nigeria Quarries:</button>
                <button className="py-2 px-4 mt-5 text-gray-600  rounded font-extralight hover:bg-red-800 hover:text-white transition">Abuja</button>
                <button className="py-2 px-4 mt-5 text-gray-600 rounded font-extralight hover:bg-red-800 hover:text-white transition">Ore</button>
                <button className="py-2 px-4 mt-5 text-gray-600 rounded font-extralight hover:bg-red-800 hover:text-white transition">Calabar</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2 p-4">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253840/Quarry-Abuja-1-1_1_wd4wnt.jpg" 
                    alt="Truck" className="object-cover w-full h-48"/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Abuja</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253906/Quarry-Abuja-1-2_1_pge4sq.jpg" 
                    alt="Truck" className="object-cover w-full h-48"/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Abuja</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253946/Quarry-Abuja-1-3_1_o8gumr.jpg" 
                    alt="Truck" className="object-cover w-full h-48"/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Abuja</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755254015/Quarry-Abuja-1-4_1_kpbzif.jpg" 
                    alt="Truck" className="object-cover w-full h-48"/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Abuja</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755254160/Quarry-Abuja-1-5_1_i7hkxg.jpg" 
                    alt="Truck" className="object-cover w-full h-48"/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Abuja</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755254211/Quarry-Abuja-1-6_1_uhyxlp.jpg" 
                    alt="Truck" className="object-cover w-full h-48"/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Abuja</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755254237/Quarry-Abuja-1-7_1_xrfea6.jpg" 
                    alt="Truck" className="object-cover w-full h-48"/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Abuja</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 p-2">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755254334/Quarry-Abuja-1-8_1_oo074q.jpg" 
                    alt="Truck" className="object-contain" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Abuja</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755533080/Ore-_1_frj7un.jpg" alt="Ore" 
                    className="object-contain w-full h-66" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755533413/Ore-1-1_1_hib6pa.jpg" 
                    alt="Ore" className="object-contain h-66 w-full" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755533594/Ore-1-2_1_t2egos.jpg" 
                    alt="Ore" className="object-cover w-full h-66" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755596243/Ore-1-4_1_gnlve6.jpg" 
                    alt="Ore" className="object-contain h-80 w-full" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755596262/Ore-1-6_zutdts.jpg" 
                    alt="Ore" className="object-contain w-full h-80" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 p-4">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755596284/Ore-1-7_1_mhs3fs.jpg" 
                    alt="Ore" className="w-full object-contain"/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755596308/Ore-1-9_1_tii8nc.jpg" 
                    alt="Ore" className="object-contain w-full" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755597794/Ore-1-10_1_nn8axm.jpg" 
                    alt="Ore" className="object-contain w-full" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755597822/Ore-1-12_1_swqmlq.jpg" 
                    alt="Ore" className="object-cover w-full h-78" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755597841/Ore-1-13_1_lqr0kx.jpg" 
                    alt="Ore" className="object-cover" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 p-4">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755254211/Quarry-Abuja-1-6_1_uhyxlp.jpg" 
                    alt="Ore" className=""/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text--white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755533413/Ore-1-1_1_hib6pa.jpg" 
                    alt="Ore" className=""/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text--white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252663/Calabar-1-3_nh3rjd.jpg" 
                    alt="Ore" className="object-cover w-full h-64.5" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text--white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252842/Ore-1-17_ivmaul.jpg" 
                    alt="Ore" className=""/>
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text--white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252864/Ore-1-19_mrcrsm.jpg" 
                    alt="Ore" className="" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text--white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252899/Ore-1-20_rbxnig.jpg" 
                    alt="Ore" className="object-cover w-full h-64.5" />
                    <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text--white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 p-4">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252930/Ore02_k0kldg.jpg" 
                    alt="Ore" className="object-cover w-full h-78" />
                    <div className="absolute bg-black/60 opacity-0 inset-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252799/Ore01_yfaj0m.jpg" 
                    alt="Ore" />
                    <div className="absolute bg-black/60 opacity-0 inset-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755533594/Ore-1-2_1_t2egos.jpg" 
                    alt="Ore" className="object-cover w-full h-78" />
                    <div className="absolute bg-black/60 opacity-0 inset-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Ore</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755254384/Calabar_1_ix3x4k.jpg" 
                    alt="Calabar" className="w-full h-78 object-cover"/>
                    <div className="absolute bg-black/60 opacity-0 inset-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Calabar</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252593/Calabar-_vxz62u.jpg" 
                    alt="Calabar" className="object-cover w-full h-78" />
                    <div className="absolute bg-black/60 opacity-0 inset-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Calabar</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252622/Calabar-1-1_exgzsc.jpg" 
                    alt="Calabar" className="object-cover w-full"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Calabar</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252640/Calabar-1-2_cwxlp1.jpg" 
                    alt="Calabar" className="object-cover w-full" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Calabar</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252663/Calabar-1-3_nh3rjd.jpg" 
                    alt="Calabar" className="object-cover w-full"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Calabar</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755252693/Calabar-1-4_lmkw3t.jpg" 
                    alt="Calabar" className="object-cover w-full" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Calabar</h2>
                    </div>
                </div>
            </div>
            <hr  className="border-t-2 border-gray-500 my-5"/>
            <div className="flex flex-wrap items-start gap-2">
                <button className="py-2 px-4 mt-5 bg-red-800 text-white rounded font-extralight">Togo Quarries:</button>
                <button className="py-2 px-4 mt-5 text-gray-600  rounded font-extralight hover:bg-red-800 hover:text-white transition">Sokode</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2 p-4">
                <div className="relative group overflow-hidden shadow-md rounded-lg">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253008/Sakode_dkospd.jpg" 
                    alt="Sakode" className="object-cover w-full h-[400px]" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Sakode</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden shadow-md rounded-lg">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253084/Sokode-_aptbuh.jpg" 
                    alt="Sakode" className="object-cover w-full"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Sakode</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4">
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253157/Sokode-1-1_xfxrxq.jpg" 
                    alt="Sakode" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Sakode</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253283/Sokode-1-2_iewzdh.jpg" 
                    alt="Sakode" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Sakode</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253324/Sokode-1-3_lxlrut.jpg" 
                    alt="Sakode" className="object-contain h-48 w-full" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Sakode</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253395/Sokode-1-4_v1qhyo.jpg" 
                    alt="Sakode" className="object-contain" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Sakode</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2 p-4">
                <div className="relative group overflow-hidden shadow-md rounded-lg">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253434/Sokode-1-5_wctrdt.jpg" 
                    alt="Sakode" className="object-cover w-full h-[400px]" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Sakode</h2>
                    </div>
                </div>
                <div className="relative group overflow-hidden shadow-md rounded-lg">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1755253051/Sokode_tnb27s.jpg" 
                    alt="Sakode" className="object-cover w-full"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                        <h2 className="text-white text-sm md:text-sm px-2 font-extralight">Quarry In Sakode</h2>
                    </div>
                </div>
            </div>
             <div className="w-full h-72 py-4 relative bg-cover bg-center mt-5" 
                  style={{ backgroundImage: "url('https://res.cloudinary.com/dyp62yu3w/image/upload/v1751537363/Hitech_uxezxu.jpg')", }}
            
                  >
                
                 <div className="relative z-10 p-8 text-white ">
                    <h1 className="font-bold text-4xl mb-4 mt-5">Ready To Build Your Project</h1>

                    <p className="text-lg mb-6 flex flex-wrap items-center gap-6 mt-4">
                     Whether you have a specific project in mind or need assistance in planning and execution, we invite you to contact <br /> 
                     us today for a consultation. Together, we can build a brighter future for generations to come.
                     <button className="bg-white text-orange-600 hover:bg-red-800 hover:text-white font-bold
                      px-4 py-2 rounded-lg transition-all duration-300 shadow-md">CALL US NOW</button>
                    </p>
                  </div>
            </div>

        </main>
    );
};


export default Quarry;