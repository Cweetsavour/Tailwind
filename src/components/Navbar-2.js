import React from "react";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <nav className="sticky flex justify-between pl-20 top-0 left-0 w-full z-100 bg-white/90 text-sky-900 px-4 py-3">
      <div className="flex items-center gap-10">
        <img
          className="cursor-pointer"
          src="/logodark.png"
          alt="Company Logo"
          width={120}
          height={40}
        />
        <Link href="/">
          <p className="cursor-pointer text-l font-semibold hover:border-b-2">
            Home
          </p>
        </Link>
        <p className="cursor-pointer text-l font-semibold hover:border-b-2">
          Pages
        </p>
        <p className="cursor-pointer text-l font-semibold hover:border-b-2">
          News
        </p>
        <p className="cursor-pointer text-l font-semibold hover:border-b-2">
          Elements
        </p>
        <Link href="/contact">
          <p className="cursor-pointer text-l font-semibold hover:border-b-2">
            Contact
          </p>
        </Link>
      </div>

      <div>
        <button className="text-sky-900 text-sm font-bold py-1.5 px-5 mr-20 cursor-pointer border-2 rounded-4xl hover:bg-indigo-900 hover:text-white/90 transition-all">
          Purchase
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
