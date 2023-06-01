"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-transparent absolute border-b-[1px] border-white text-white shadow-md top-0 left-0 w-full z-20 md:flex-row md:flex-nowrap md:justify-between flex items-center p-4">
        <div className="m-0 px-4">
          <a className="z-40 lg:inline-block" href="/">
            <img src="./RHPS.svg" className="w-[50px]" />
          </a>
        </div>
        <div className="w-[100%] md:w-full">
          <ul
            className={`flex flex-row justify-center md:justify-end ${
              isMenuOpen ? "hidden md:flex" : "md:flex hidden"
            }`}
          >
            <li className="cursor-pointer px-4 py-2 mx-2 bg-transparent rounded-full hover:text-black hover:bg-gray-300 transition-all duration-200">
              <a href="/blog">Blog</a>
            </li>
            <li className="cursor-pointer px-4 py-2 mx-2 bg-transparent rounded-full hover:text-black hover:bg-gray-300 transition-all duration-200">
              <a href="/about">About Us</a>
            </li>
            <li className="cursor-pointer px-4 py-2 mx-2 bg-transparent rounded-full hover:text-black hover:bg-gray-300 transition-all duration-200">
              <a href="/rce">The RCE Project</a>
            </li>
            <li className="cursor-pointer px-4 py-2 mx-2 bg-transparent rounded-full hover:text-black hover:bg-gray-300 transition-all duration-200">
              <a href="/resources">Resources</a>
            </li>
            <li className="cursor-pointer px-4 py-2 bg-yellow-500 w-[150px] hover:scale-105 rounded-full font-medium text-center transition-all ease-in duration-150">
              <a href="/contact">Get in touch</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-md hover:bg-gray-300 transition-all duration-200"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-white shadow-md py-2 px-4 mt-2 rounded-md text-black">
              <ul className="flex flex-col items-center">
                <li className="cursor-pointer px-4 py-2 mx-2 mb-4 bg-transparent rounded-full hover:text-black hover:bg-gray-300 transition-all duration-200">
                  <a href="/blog">Blog</a>
                </li>
                <li className="cursor-pointer px-4 py-2 mx-2 mb-4 bg-transparent rounded-full hover:text-black hover:bg-gray-300 transition-all duration-200">
                  <a href="/about">About Us</a>
                </li>
                <li className="cursor-pointer px-4 py-2 mx-2 mb-4 bg-transparent rounded-full hover:text-black hover:bg-gray-300 transition-all duration-200">
                  <a href="/rce">The RCE Project</a>
                </li>
                <li className="cursor-pointer px-4 py-2 mx-2 mb-4 bg-transparent rounded-full hover:text-black hover:bg-gray-300 transition-all duration-200">
                  <a href="/resources">Resources</a>
                </li>
                <li className="cursor-pointer px-4 py-2 mb-2 bg-yellow-400/80 w-[150px] hover:scale-105 rounded-full font-medium text-center transition-all ease-in duration-150">
                  <a href="/contact">Get in touch</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
