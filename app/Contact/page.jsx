'use client';


const Contact = () => {
    return(
        <main className="max-w-xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-red-800">Contact Us</h1>
            <p className="text-grey-600 mb-6 text-gray-400">We'd love to hear from you! Fill out the form below or reach out to us at
                shynadev1508@gmail.com
            </p>
            <form className="grid gap-4">
                <input
                type="text"
                placeholder="Your Names"
                className="p-3 border border-black text-gray-600 rounded-md"
                />
                <input
                type="phone number"
                placeholder="Enter Your Phone Number"
                className="p-3 border border-black text-gray-600 rounded-md"
                />
                <input 
                type="text"
                placeholder="Address"
                className="p-3 border border-black text-gray-600 rounded-md"
                />
                <textarea
                type="text"
                placeholder="Message" 
                className="p-3 border border-black text-gray-600 rounded-md"
                rows="4"
                ></textarea>
                <button 
                type="Submit" className="bg-red-800 text-white p-3 rounded-md hover:bg-red-700">
                    Send Message
                </button>
            </form>
        </main>
    );
};


export default Contact;