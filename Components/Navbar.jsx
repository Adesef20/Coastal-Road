'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'HOME', path: '/' },
    {
      name: 'ABOUT',
      dropdown: [
        { name: 'WHO WE ARE',  path:'/About/who-we-are' },
        { name: 'QUALITY SAFETY AND ENVIRONMENT ', path: '/About/Quality' },
        { name: 'COMPANY COMPLIANCE ', path: '/About/Company' },
        { name: 'HUMAN RESOURCE ', path: '/About/Human' },
        { name: 'HITECT PLANT AND EQUIPMENT ', path: '/About/Hitect' },
        { name: 'CAREERS ', path: '/About/Careers' },
      ],
    },
    {
      name: 'SERVICES',
      dropdown: [
        { name: 'ROADWORKS,BRIDGES,DRAINAGE & CONCRETE STRUCTURES', path: '/Service/Roadworks' },
        { name: 'WATER SUPPLY AND IRRIGATION SCHEME', path: '/Service/Water' },
        { name: 'LAND RECLAMATION,RIVER CANALIZATION & DREDGE ', path: '/Service/Land' },
        { name: 'FORM BITUMEN STABILISED MATERIAL', path: '/Service/Form' },
        { name: 'RECYCLING OF AN EXISTING ROAD LAYERS', path: '/Service/Recycling' },
        { name: 'CONTINOUSLY REINFORCED CONCRETE PAVEMENT (CRCP)', path: '/Service/Continously' },
      ],
    },
    {
      name: 'PROJECTS',
      dropdown: [
        { name: 'LAGOS-CALABAL COASTAL HIGHWAY PROJECT', path: '/Projects/Lagos' },
        { name: 'REPUBLIC OF NIGERIA', path: '/Projects/Nigeria' },
        { name: 'REPUBLIC OF TOGO', path: '/Projects/Togo' },
        { name: 'REPUBLIC OF BENIN', path: '/Projects/Benin'}
      ],
    },
    { name: 'QUARRY', path: '/Quarry' },
    { name: 'NEWS', path: '/News' },
    
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dyp62yu3w/image/upload/v1750247195/HiTech-Company-logo-300x64_vaygey.png"
            alt="Hitech Logo"
            width={150}
            height={64}
            priority
          />
        </Link>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl text-black">
          {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>

        
        <ul className="hidden md:flex items-center gap-6 text-gray-800 font-medium text-sm md:text-sm tracking-wide">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.name} className="relative group">
                <span className="cursor-pointer hover:text-red-600">{link.name}</span>

                <ul className="absolute top-8 left-0 bg-white mt-4 rounded-md shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
                  {link.dropdown.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.path}
                        className="block px-8 py-4 whitespace-nowrap hover:bg-red-600 hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.name}>
                <Link href={link.path} className="hover:text-red-600 transition">
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/Contact"
            className="px-8 py-4 rounded-md bg-red-600 text-white font-bold hover:bg-red-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-gray-800 text-lg tracking-wide font-medium">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.name}>
                <button
                  className="w-full text-left py-2 border-b border-gray-200 font-semibold"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === link.name ? null : link.name)
                  }
                >
                  {link.name}
                </button>
                {activeDropdown === link.name && (
                  <ul className="ml-4 pl-2 border-l border-red-300">
                    {link.dropdown.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.path}
                          className="block py-1 text-sm hover:text-red-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="block py-2 border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            )
          )}

          <li>
            <Link
              href="/Contact"
              className="block px-4 py-2 mt-2 bg-red-600 text-white text-center rounded-md font-bold hover:bg-red-800 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
