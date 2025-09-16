

const Hero  = () =>{
    return(
        <section className="bg-gray-100">
            <div className="w-full h-auto flex justify-around p-2">
                <div className=" w-[45%] h-[500px] gap-6 flex flex-col ">
                    <div className="flex-1 bg-gray-200 p-6 rounded-md shadow-md z-0">
                        <div className="absolute left-10 mt-2 transform translate-x-1/2 bg-red-800 w-1 h-7"></div>
                        <h1 className="text-4xl text-black font-bold mb-2">Vision</h1>
                        <p className="text-gray-600 mt-5">
                            To become an internationally recognized construction company delivering quality
                            engineering solutions.
                        </p>
                    </div>
                    <div className="flex-2 bg-gray-200 p-6 rounded-md shadow-md z-0 h-[100px]">
                        <div className="absolute left-10 mt-2 transform translate-x-1/2 bg-red-800 w-1 h-7"></div>
                        <h1 className="text-4xl text-black font-bold">Mission</h1>
                        <p className="text-gray-700 mt-5">
                            To provide professional, quality and technologically advanced products on 
                            schedule and within budget. 
                        </p>
                        <p className="text-gray-700 mt-5">
                            To meet all requirements of our client. To constantly endeavour to maintain and 
                            improve our standards of work.
                        </p>
                    </div>
                </div>
                <div className="w-[45%] flex flex-col h-[500px] gap-5">
                    <div className="absolute mt-7 transform translate-x-1/2 bg-red-800 w-1 h-7"></div>
                  <h1 className="text-black text-4xl pl-5 font-bold mt-5">Who we are</h1>
                    <p className="text-gray-700">   Established in 1988, Hitech Construction Company Limited is currently one of the 
                        leading Building & Civil Engineering Contractors in Nigeria. In addition to headquarters 
                        offices in Lagos, we have regional offices located in Abuja, Ibadan and Benin City</p>
                    <p className="text-gray-700">  The combination of on-site professional management and office-based engineering, 
                        design and planning staff, equipped with advanced computerised facilities, has 
                        enabled Hitech to maintain itself at the forefront of Construction and Engineering
                        Technology in Nigeria.</p>
                    <p className="text-gray-700"> Hitech is always ready to innovate and introduce proven international developments in 
                        design and material technology, Hitech is able to undertake a multitude of Civil 
                        Engineering/Building Projects and have adequate facilities for the construction of.</p>
                    <button className="px-6 py-3 font-semibold bg-red-700 rounded-md text-white self-start ">
                        LEARN MORE
                    </button>

                </div>
            </div>
        </section>
        
    );
};


export default Hero;