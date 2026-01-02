"use client";
import React, { createElement, useState } from "react";
import Link from "next/link";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky flex justify-start items-center gap-80 shadow-sm pl-20 top-0 left-0 w-full z-1000 bg-white/80 text-sky-900 px-4 py-3">
      <div className="flex gap-10">
        <img
          className="cursor-pointer"
          src="/logodark.png"
          alt="Company Logo"
          width={120}
          height={40}
        />
        <div
          className="relative group nav-item dropdown"
          // onMouseEnter={() => setOpen(true)}
          // onMouseLeave={() => setOpen(false)}
          // onMouseEnter={() => setOpen(true)}
          // onMouseLeave={() => setOpen(false)}
        >
          <Link href="/">
            <p
              className="cursor-pointer text-l font-semibold border-b-2 border-transparent
           hover:border-sky-900
            transition-colors duration-300 nav-link dropdown-toggle"
            >
              Home
            </p>
          </Link>
          {open && (
            <div
              className="
            absolute left-0 top-full w-44
            bg-white text-gray-900
            rounded-md shadow-2xl shadow-black/60
            z-1000
          "
            >
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Item 1
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Item 2
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Item 3
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Item 4
              </p>
            </div>
          )}
        </div>
        <p
          className="cursor-pointer text-l font-semibold h-6/12 border-b-2 border-transparent
  hover:border-sky-900
  transition-colors duration-300"
        >
          Pages
        </p>
        <p
          className="cursor-pointer text-l font-semibold h-6/12 border-b-2 border-transparent
  hover:border-sky-900
  transition-colors duration-300"
        >
          News
        </p>
        <p
          className="cursor-pointer text-l font-semibold h-6/12 border-b-2 border-transparent
  hover:border-sky-900
  transition-colors duration-300"
        >
          Elements
        </p>
        <Link href="/contact">
          <p
            className="cursor-pointer text-l font-semibold border-b-2 border-transparent
  hover:border-sky-900
  transition-colors duration-300"
          >
            Contact
          </p>
        </Link>
      </div>
      <div>
        <button
          onClick={() => window.open("https://example.com", "_blank")}
          className="text-sky-900 text-sm font-bold py-1.5 px-5 mr-20 cursor-pointer border-2 rounded-4xl hover:bg-indigo-900 hover:text-white/90 duration-300"
        >
          Purchase
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
