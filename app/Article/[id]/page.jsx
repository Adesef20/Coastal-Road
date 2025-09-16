'use client';

import { useParams } from "next/navigation";


const ArticleDetails = () => {
    const {id} = useParams();

    const articleData = {
         101:{
         
        }
    }
    return(
        <main className="max-w-7xl mx-auto bg-white p-6">
            <div className="absolute left-4 transform -translate-y-1/2 bg-red-800 w-7 h-7 mt-4"></div>
            <div className="bg-white bg-opacite-60 rounded-lg p-8 max-w-2xl">
                <h1></h1>
            </div>
            <div className="h-screen w-full bg-cover bg-center flex items-center justify-center p-8 text-white" 
            style={{backgroundImage: ``}}></div>
        </main>
    );
};

export default ArticleDetails;