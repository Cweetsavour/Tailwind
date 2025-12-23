import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar-2";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGooglePlus } from "react-icons/fa6";
import Link from "next/link";
import React from "react";

const contact = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 pb-15">
      <Navbar />
      <Navbar2 />
      <div className="relative text-white z-50 px-20 py-30">
        <h1 className="relative text-7xl font-bold">Contact</h1>
        <div className="flex gap-3 mt-3 ml-1 text-xl">
          <Link href="/">
            <p className="font-semibold cursor-pointer hover:underline">Home</p>
          </Link>
          <p> {">>"} </p>
          <p>Contact</p>
        </div>
      </div>
      <div
        className="absolute h-[80vh] inset-0  bg-auto opacity-99 z-0"
        style={{ backgroundImage: "url('/glow.gif')" }}
      />

      <div className="absolute inst-0 bg-black z-10" />
      <div className="grid grid-cols-3 gap-5 mx-15 mt-15 pb-20 ">
        <div className="bg-white max-w-sm py-8 px-14 rounded-xl">
          <h2 className="text-2xl font-bold  text-sky-800">
            Port Harcourt Office
          </h2>
          <p className="text-black max-w-2xl mt-4">
            126 Rumuagholu SARS Link Road Nearest Bus Stop - Rumuokoro <br />{" "}
            Port Harcourt 500272, Nigeria
          </p>
        </div>

        <div className="bg-white max-w-sm py-8 px-14 rounded-xl">
          <h2 className="text-2xl font-bold text-sky-800">Abuja Office</h2>
          <p className="text-black mt-4">
            121 Bako Road, Maraba <br /> Nearest Bus Stop - Maraba Junction
            Abuja, Nigeria
          </p>
        </div>

        <div className="bg-white text-sky-800 max-w-sm py-8 px-14 rounded-xl">
          <h2 className="text-2xl font-bold">Socials</h2>
          <p className="flex text-3xl mt-4 gap-3">
            <FaLinkedin className="cursor-pointer" />
            <FaSquareTwitter className="cursor-pointer" />
            <FaSquareFacebook className="cursor-pointer" />
            <FaSquareGooglePlus className="cursor-pointer" />
          </p>
        </div>
      </div>

      <div className="bg-white flex flex-col ml-15 mr-15">
        <form className="flex flex-col gap-6 rounded-xl flex-1 p-15">
          <h2 className="text-2xl font-bold text-sky-800">Write to us</h2>
          <input
            type="text"
            placeholder="Your Name"
            alt="Enter Your Name"
            className="border border-gray-300 rounded-sm h-10 text-sm pl-3 focus:ring-2 focus:ring-gray-300 focus:ring-offset-white outline-none transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            alt="Enter Your Email"
            className="border border-gray-300 rounded-sm h-12 text-sm pl-3 focus:ring-2 focus:ring-gray-300 focus:ring-offset-white outline-none transition-all"
          />
          <textarea
            type="text"
            placeholder="Enter your description here..."
            alt="Enter more information"
            className="border border-gray-300 rounded-sm h-50 text-sm p-3 focus:ring-2 focus:ring-gray-300 focus:ring-offset-white outline-none transition-all resize-none"
          ></textarea>
          <button
          type="submit"
          className="bg-gray-800 text-sm font-bold text-white py-3 px-10 rounded cursor-pointer hover:bg-gray-900 transition mt-3 max-w-38"
        >
          Send Now
        </button>
        </form>
        
        <div></div>
      </div>
    </div>
  );
};

export default contact;
