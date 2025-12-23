import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar-2";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Navbar2 />
      <div className="relative text-white z-50 px-20 py-30">
        <h1 className="relative text-7xl font-bold">About us</h1>
        <div className="flex gap-3 mt-3 ml-1 text-xl">
          <Link href="/">
            <p className="font-semibold cursor-pointer hover:border-b-2">
              Home
            </p>
          </Link>
          <p> {">>"} </p>
          <p>About us</p>
        </div>
      </div>
      <div
        className="absolute h-[80vh] inset-0 bg-cover opacity-99 z-0"
        style={{ backgroundImage: "url('/glow.gif')" }}
      />

      <div className="absolute inst-0 bg-black z-10" />
    </div>
  );
};

export default page;
