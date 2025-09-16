'use client';
import React from "react";
import Stats from "@/Components/Stats";


const WhoWeAre = () => {
    return(
        <main className="w-full bg-white text-black py-4 px-2 md:px-5 ">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4 gap-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-800 w-2 h-7"></div>
                    <h1 className="text-xl sm:text-2xl font-bold">ABOUT US</h1>
                </div>
             <p className="text-sm sm:text-base text-gray-500 text-right md:text-left"> Established in 1988, Hitech is currently one of the leading Building & <br /> 
                Civil Engineering Contractors in Nigeria.In addition to headquarters <br className="hidden md:block"/>
                offices in Lagos,we have regional offices located in Abuja, Ibadan and <br />
                Benin City.
             </p>
            </div>

            <div>
              <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750328308/Form-Bitumen-Stabilsed-Materials_a9oxxf.webp" 
               alt="Road"
               className="object-cover w-full h-[600px]" />
            </div>
            <div>
             <div className="bg-red-800 w-2 h-7 mt-6"></div>
             <h2 className="mb-4 font-bold text-2xl -mt-13 p-6">We Build For Your Comfort</h2>
            </div>
             
            <div className="flex flex-col md:flex-row mt-6 gap-6">
                <div className="w-full md:w-1/2">
                   <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752156006/Dangote-Deep-Sea-Port-Road-1_l35gy6.jpg" 
                   alt="Road 2" 
                   className="object-cover h-64 w-full sm:h-80 md:h-[450px]"
                   />
                </div>

                <div className="w-full md:w-1/2 text-sm leading-relaxed text-gray-700 overflow-y-auto">
                   <p className="text-gray-700 leading-loose text-sm">
                      The combination of on-site professional management and office-based engineering, design and planning <br /> 
                      staff, equipped with advanced computerised facilities, has enabled Hitech to maintain itself at the forefront <br />
                      of Construction and Engineering Technology in Nigeria.Hitech is always ready to innovate and introduce <br />
                      proven international developments in design and material technology, Hitech is able to undertake a <br />
                      multitude of Civil Engineering/Building Projects and have adequate facilities for the construction of: <br /><br /> 

                      <span className="font-black text-sm mb-4">
                        1. Roadworks, Bridges, Drainage & Concrete Structures <br />
                        2. Land Reclamation, River Canalization & Dredging <br />
                        3. Dams, Water Supply, Irrigation Schemes & Marine Installations <br />
                        4. Airport runways and infrastructure
                      </span> <br /> <br />
                      In order to provide logistical support to ongoing projects, Hitech maintains a substantial fleet of heavy-duty <br /> 
                      construction plant and equipment in addition to numerous haulage vehicles sufficient to supply the material <br /> 
                      requirements of sites regardless of distance or location.In addition, our operational granite quarry produces <br /> 
                      aggregates for concrete, asphalt production and stone-base. <br /><br />
                      Strategically located in South-West (Ibadan) and South-South (Calabar) geo-political zones, these facilities <br /> 
                      provide the basic bulk material requirements of most engineering projects; and we intend to establish more <br /> 
                      of these facilities at (close proximity to) all operational areas. Asphalt plants are located on each <br /> 
                      operational zone for all road surface requirements.In the pursuit of delivering a quality product, Hitech <br /> 
                      completed in 1998 the installation of a pre-tensioned, pre-stressed beam factory in Abuja and Ibadan <br /> 
                      utilizing state of the art equipment supplied by Pourtrelles-Precontraine-Beton of France. <br /><br />
                      These factories commenced production in September 1998 and are capable of producing bridge beams, <br /> 
                      piles, structural elements, lighting poles and similar products for construction and allied industries. Our <br /> 
                      Ibadan Factory complements this capability with a pre-tensioned slab production facility.Over the last <br /> 
                      decade, Hitech brought to Nigeria innovation construction and road building techniques such as: <br /><br />

                      <span className="font-black text-sm mb-4">
                       A. Mechanically reinforced earth walls, (MSE) <br />
                       B. Foam Bitumen stabilised materials <br />
                       C. Recycling of existing road layers <br />
                       D.  Continuously reinforced Concrete Pavements, (CRCP)
                        </span> <br /> <br />
                      By means of structured expansion of equipment, assets and resources in addition to the timely adoption of <br /> 
                      innovative technology Hitech intends to maintain its prominent position in the Nigerian Construction <br /> 
                      Industry and to expand operations internationally.
                   </p>
                </div>
            </div>
            <div className="mt-10">
               <Stats />
            </div>

            <div className="min-h-screen bg-white text-gray-600 py-20 px-8 ">
                <h1 className="font-bold text-2xl border-red-600 inline-block border-b-4">MEET THE TEAM</h1>
                <div className="flex flex-col md:flex-row gap-10 mt-5">
                    <div className="">
                         <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752233182/Dany-Abboud-2_k6mkjt.jpg" 
                        alt="Team" 
                        className="object-cover w-[350px] h-[500px] shadow-md"
                       />
                    </div>
                 
                 <div>
                 <h2 className="font-light text-2xl mb-2">Managing Director</h2>
                 <h3 className="font-extralight text-3xl text-red-400 mb-4">Mr. Dany Abboud</h3>
                 <p className=" text-1xl">
                    Dany Abboud is a proficient civil engineer with a wealth of experience in construction and infrastructure projects. He <br /> 
                    excels in designing and analyzing structures, preparing comprehensive engineering plans and specifications, and <br /> 
                    conducting thorough site inspections. <br /><br /> Dany possesses a deep understanding of engineering principles, construction <br /> 
                    materials, and industry standards, allowing him to ensure that projects are executed safely, efficiently, and in full <br /> 
                    compliance with local regulations. He works closely with the project team, offering valuable insights and expertise to <br /> 
                    achieve successful project outcomes.
                 </p>
                 </div>
                </div>
            </div>
            <div className="min-h-screen bg-white text-gray-600 py-20 px-8 ">
                
                <div className="flex flex-col md:flex-row gap-10 ">
                    <div className="">
                         <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752233212/Mr.-Ivan-Bekker-_fmwcet.jpg" 
                        alt="Team" 
                        className="object-cover w-[350px] h-[500px] shadow-md"
                       />
                    </div>
                 
                 <div>
                 <h2 className="font-light text-2xl mb-2">Executive Director</h2>
                 <h3 className="font-extralight text-3xl text-red-400 mb-4">Mr. Ivan Bekker</h3>
                 <p className=" text-1xl">
                    Ivan Bekker is a seasoned Professional Engineer having been in the industry for over 50 years. His expertise covers the <br /> 
                    design and construction of road drainage, geometrics and pavement design, Urban, rural and intercity highways, bridges <br /> 
                    and land infrastructure development. <br /><br /> His expertise includes certifying compliance with design and measurement of <br /> 
                    pavement remaining life expectancy, including prediction of rehabilitation and maintenance strategies to ensure <br /> 
                    compliance with safety, road user and road owner standards. He has a wealth of experience which is readily shared with <br /> 
                    the team to produce projects meeting international standards.
                 </p>
                 </div>
                </div>
            </div>
            <div className="bg-gray-100 py-12 px-6 md:px-20">
                <div className="bg-red-800 w-2 h-7 ml-4 mt-4"></div>
                <h2 className="text-2xl font-bold mb-8 -mt-7 ml-10">LEARN MORE ON HOW WE OPERATE</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

                <div className="bg-gray-200 shadow-md p-6 border-4 border-red-900 h-full">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752498900/icons8-compliance-100_yu4e9u.png" alt="Logo" 
                    className="object-cover w-20 h-25"
                    />
                    <h2 className="text-2xl font-bold mb-4">Hitect Company Compliance</h2>
                    <p className="text-sm font-extralight mb-4">
                        Through our comprehensive 
                        Environmental, Social, Health & 
                        Safety (ESHS) Management Plans, 
                        and specifically our Code of 
                        Conduct, Hitech staff are required to 
                        follow all listed company guidelines 
                        on Ethics and Business Conduct, 
                        which include details of the following 
                        policies and practices:
                    </p>
                </div>
                <div className="bg-gray-200 shadow-md p-6 border-4 border-red-800 h-full">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752498973/icons8-human-resources-100_enpkie.png" alt="Logo 2" 
                    className="object-cover w-20 h-25"
                    />
                    <h2 className="text-2xl font-bold mb-4">Hitect Human Resources</h2>
                    <p className="text-sm font-extralight mb-4">
                        Our greatest asset is our people. Hitech’s 
                        management team is made up of a crop of 
                        seasoned professionals, with diverse skills 
                        in various backgrounds, as well as depth of 
                        experience gathered from national and 
                        international institutions.
                    </p>
                </div>
                <div className="bg-gray-200 shadow-md p-6 border-4 border-red-800 h-full">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752499017/icons8-tractor-100_mr0yrr.png" alt="Logo 3" 
                    className="object-cover w-20 h-25"
                    />
                    <h2 className="text-2xl font-bold mb-4">Hitect Plant And Equipment</h2>
                    <p className="text-sm font-extralight mb-4">
                        Hitech operates an extensive
                        (unencumbered) list construction plant and 
                        equipment,
                    </p>
                </div>
                <div className="bg-gray-200 shadow-md p-6 border-4 border-red-800 h-full">
                    <img src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1752498992/icons8-safety-100_yxigvo.png" alt="Logo 4" 
                    className="object-cover w-20 h-25" 
                    />
                    <h2 className="text-2xl font-bold mb-4">Quality Safety & Environment</h2>
                    <p className="text-sm font-extralight mb-4">
                        At Hitech Construction, we lead the way in 
                        delivering quality across international and 
                        regional construction projects. Our pursuit 
                        of excellence, empowered by technological 
                        expertise, and unwavering dedication to 
                        quality and safety, guarantee exceptional 
                        results that redefine industry standards.
                    </p>
                </div>
               
               </div>
            </div>
            <div className="mt-6 relative  h-64 w-full bg-cover bg-center sm:h-72 md:h-96 lg:h-[450px]" 
             style={{ backgroundImage: "url('https://res.cloudinary.com/dyp62yu3w/image/upload/v1751537363/Hitech_uxezxu.jpg')",}}>
                
             <div className="absolute bg-red-800/70 inset-0"></div>   
             <div className="relative z-10 p-8 text-white flex flex-col items-start justify-center h-full px-4 sm:px-8">
               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-24">GET HITECT MAGAZINE VOL.2</h1>
               <button className="mt-4 bg-white text-red-700 font-bold py-2 px-4 sm:px-6 sm:py-3 text-sm sm:text-base rounded">DOWNLOAD NOW</button>
             </div>
            </div>
        </main>
        
    );
};
export default WhoWeAre;