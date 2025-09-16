'use client';
import { useParams } from "next/navigation";  
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin,  FaXTwitter } from "react-icons/fa6";

const NewsDetails = () => {
    const {id} = useParams();

    const newsData  = {
        1:{
           title: "Choose The Right Contractor For Your Project",
           content: "Constructing a federal road network and bridges is a monumental task that demands precision, expertise, and a commitment to quality. The success of such projects largely hinges on selecting the right contractor. In this article, we will guide you through the crucial steps to ensure you make an informed decision, setting the foundation for a robust and reliable transportation infrastructure.",
            image:  "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750867164/Dangote-Deep-Sea-Port-Road-1-300x225_oinpjb.jpg",
        },

        2:{
           title: "BUILDING BRIDGES FOR MEGA CITIES: HARNESSING THE POWER OF THE RIGHT TOOLS AND RESOURCES",
           content: "As the world’s population continues to urbanize, mega cities are becoming the focal points of economic and social development. The demand for efficient transportation infrastructure is greater than ever, and building bridges is a critical component of this endeavor. In this article, we’ll explore the importance of using the right tools and resources in constructing bridges for mega cities, ensuring they stand as enduring icons of progress.",
           image: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1750688553/Roadworks-Bridges_kfhdmd.jpg",
        },

        3:{
            title: "UK-FRANCOPHONE WEST & CENTRAL AFRICA TRADE AND INVESTMENT FORUM 2023 HOSTED BY DMA",
            content: "We are thrilled to have attended the UK-Francophone West and Central Africa Trade and Investment Forum 2023 hosted by DMA. This dynamic event brought together over 800 delegates, including 250 esteemed overseas representatives, mingling with 550 dynamic UK businesses. It was hailed as the most productive Africa networking event of the year! Discussions on over GBP 1 billion in investment were facilitated by UKEF and other key agencies, setting the stage for impactful collaborations.",
            image: "https://res.cloudinary.com/dyp62yu3w/image/upload/v1755694586/51ce4426-50e4-4d03-9f91-78d3e08f1b19-1536x1023_wequgg.jpg",
        }
    };

    const article = newsData[Number(id)];
    if (!article) {
        return <h1 className="text-center mt-20 text-2xl">Article not found</h1>;
    }

    return(
    <main className="w-full bg-white relative">
        <div className="absolute left-8 transform -translate-y-1/2 bg-red-800 w-7 h-7 mt-4"></div>
        <div className="bg-white bg-opacity-60 p-8 rounded-lg max-w-2xl">
         <h1 className="text-4xl text-black font-bold mb-4">{article.title}</h1>
        </div>
        <div  className="h-screen w-full bg-cover bg-center flex items-center justify-center text-white p-8"
          style={{backgroundImage: `url(${article.image})`}}
         >   
         </div>
        <div className="bg-gray-200 p-8 max-w-5xl mx-auto mt-10">
            <p className="leading-relaxed text-gray-500">{article.content}</p>
            <h2 className="text-black text-lg mb-4 mt-4 font-bold">Define Your Project Scope And Requirement</h2>
            <p className="leading-relaxed text-gray-500">
                Before you begin the process of selecting a contractor, it’s imperative to have a clear understanding of the project’s scope and <br /> 
                requirements. This includes the length and specifications of the roads, the number and type of bridges, and any special considerations <br /> 
                such as environmental impact assessments or zoning regulations.
            </p>
            <h2 className="text-black text-lg mb-4 mt-4 font-bold">Research and Compile a List of Qualified Contractors</h2>
            <p className="leading-relaxed text-gray-500">
                Start by conducting thorough research to identify contractors with a proven track record in federal road and bridge construction. Look <br /> 
                for companies with experience in similar projects, a solid reputation for quality work, and a history of completing projects within <br /> 
                budget and on time.
            </p>
            <h2 className="text-black text-lg mb-4 mt-4 font-bold">Verify Licensing, Insurance, and Certification</h2>
            <p className="leading-relaxed text-gray-500">
                Ensure that the contractors on your list are properly licensed, insured, and certified. Licensing demonstrates that the contractor has <br /> 
                met the necessary legal requirements to operate in your jurisdiction. Insurance protects both parties in case of accidents or <br /> 
                unforeseen events. Certifications, especially in construction and engineering standards, attest to the contractor’s expertise and <br /> 
                commitment to industry best practices.
            </p>
            <h2 className="text-black text-lg mb-4 mt-4 font-bold">Assess Experience and Past Performance</h2>
            <p className="leading-relaxed text-gray-500">
                Review the contractors’ portfolios and assess their experience in similar projects. Request references from previous clients and take <br /> 
                the time to speak with them about their experiences. Ask about the contractor’s adherence to timelines, quality of work, and their <br /> 
                ability to handle unforeseen challenges.
            </p>
            <h2 className="text-black text-lg mb-4 mt-4 font-bold">Evaluate Financial Stability</h2>
            <p className="leading-relaxed text-gray-500">
                A financially stable contractor is less likely to encounter delays or defaults due to financial issues. Request financial statements or <br /> 
                documentation that demonstrates the contractor’s ability to secure the necessary resources for your project. This includes equipment, <br /> 
                materials, and labor.
            </p>
            <h2 className="text-black text-lg mb-4 mt-4 font-bold">Consider Safety and Environmental Practices</h2>
            <p className="leading-relaxed text-gray-500">
                Safety and environmental considerations are paramount in any construction project. Inquire about the contractor’s safety record and <br /> 
                protocols, as well as their commitment to environmentally-friendly practices. Look for contractors who prioritize worker safety and <br /> 
                employ sustainable construction techniques.
            </p>
            <h2 className="text-black text-lg mb-4 mt-4 font-bold">Review Bidding Process and Cost Estimates</h2>
            <p className="leading-relaxed text-gray-500">
                Invite the selected contractors to submit detailed bids for your project. The bids should include a breakdown of costs, timelines, and <br /> 
                any additional considerations. While cost is a crucial factor, it should not be the sole determinant. Consider the contractor’s reputation, <br /> 
                experience, and ability to deliver quality work within budget.
            </p>
            <h2 className="text-black text-lg mb-4 mt-4 font-bold">Communicate and Collaborate Effectively</h2>
            <p className="leading-relaxed text-gray-500">
                Clear and open communication is vital throughout the construction process. Choose a contractor who demonstrates excellent <br /> 
                communication skills and a willingness to work collaboratively with your team, stakeholders, and regulatory bodies.
            </p>
            <h2 className="text-black text-lg mb-4 mt-4 font-bold">Conclusion</h2>
            <p className="leading-relaxed text-gray-500">
                Selecting the right contractor for your federal road network and bridge project is a critical decision that can make or break the success <br /> 
                of your endeavor. By conducting thorough research, assessing experience and qualifications, and prioritizing safety and <br /> 
                communication, you can set the stage for a seamless and successful construction process. Remember, investing time and effort in <br /> 
                the selection process will yield dividends in the form of a robust and reliable transportation infrastructure for years to come.
            </p>
        </div>
        <div className="max-w-5xl mx-auto bg-gray-200 p-8 mt-8 mb-10  shadow-md">
          <h1 className="text-3xl text-gray-500 font-bold">Share</h1>
          <div className="grid grid-cols-5 items-center justify-center gap-4 p-6">
              <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-800 transition"
              ><FaFacebook className="text-white text-3xl"/></a>
              <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 hover:bg-pink-800 transition"
              ><FaInstagram className="text-white text-3xl"/></a>
              <a href="http://tiktok.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-black hover:bg-gray-800 transition"
              ><FaTiktok className="text-white text-3xl"/></a>
              <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-800 transition"
              ><FaLinkedin className="text-white text-3xl"/></a>
              <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-black hover:bg-gray-800 transition"
              >< FaXTwitter className="text-white text-3xl"/></a>
          </div>
        </div>
    </main>

    
    );
};
export default NewsDetails;