"use client";

import React from 'react';

import { techIcons } from '../Projects/projectsData';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

const Logo = techIcons?.ReactJS;


const Navbar = () => {
 


  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams()
  const pathname = usePathname()

  console.log('params', pathname);

  return (
    <nav className={`${pathname == '/' ? 'md:-top-2 md:absolute md:bg-black/20 bg-black/90' : '-top-0 bg-[#1c1c1c]'}  shadow  w-full px-6 z-40 pt-2  `}>
      <div className="md:min-w-full max-w-4xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          <div className='hiden md:block' onClick={() => router?.push("/")}>
            <img className="h-8 cursor-pointer" src={Logo} alt="logo" />
          </div>
          <div className="items-center md:space-x-5 space-x-4 text-xs md:text-lg">
          <div
              onClick={() => router?.push("/")}
              // href="/"
              className={`relative inline-block cursor-pointer  transition-colors group ${
                pathname == '/' ? 'text-white border-b border-white' : 'hover:text-zinc-400 text-gray-300'
              }`}
            >
              <span className="relative z-10">Home</span>
              <span
                className={`absolute cursor-pointer bottom-0 left-1/2 h-0.5 w-0 bg-gray-300 transition-all duration-300 transform -translate-x-1/2 ${
                  pathname == '/' ? 'w-full text-white border-b border-white' : 'group-hover:w-full'
                }`}
              ></span>
            </div>
            <div
              onClick={() => router?.push("/about")}
              className={`relative cursor-pointer inline-block  transition-colors group ${
                pathname == '/about' ? 'text-white border-b border-white' : 'hover:text-zinc-400 text-gray-200'
              }`}
            >
              <span className="relative z-10">About</span>
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 w-0 bg-gray-300 transition-all duration-300 transform -translate-x-1/2 ${
                  pathname == '/about' ? 'w-full' : 'group-hover:w-full'
                }`}
              ></span>
            </div>
            <div
              onClick={() => router?.push("/projects")}
              // href="/projects"
              className={`relative cursor-pointer inline-block text-gray-300 transition-colors group ${
                pathname == '/projects' ? 'text-white border-b border-white' : 'hover:text-zinc-400'
              }`}
            >
              <span className="relative z-10">Projects</span>
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 w-0 bg-gray-300 transition-all duration-300 transform -translate-x-1/2 ${
                  true ? 'w-full' : 'group-hover:w-full'
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
