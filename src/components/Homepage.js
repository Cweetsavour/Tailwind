import React from "react";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="text-gray-900 relative z-10 py-50 px-20">
      <div>
        <h1 className="text-7xl font-bold">Expert Consultants</h1>
        <p className="text-3xl max-w-2xl mt-10">
          Over 10 years of experience in providing top-notch consulting services
          to businesses worldwide.
        </p>
        <div className="flex gap-5 mt-20">
          <Link href="/about">
            <button className="bg-gray-800 text-sm font-bold text-white py-3 px-10 rounded cursor-pointer hover:bg-gray-900">
              About us {">"}
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-yellow-300 text-black text-sm font-bold py-3 px-10 rounded cursor-pointer hover:bg-yellow-200/95">
              Contact us {">"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
