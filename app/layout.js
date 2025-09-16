import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '../Components/Footer';



export const metadata = {
  title: "Hitech Construction",
  description: "Your trusted construction partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className= "antialiased"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
};
