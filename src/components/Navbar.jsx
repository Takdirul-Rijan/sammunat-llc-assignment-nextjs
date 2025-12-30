import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* <div className="text-xl font-bold text-blue-600">Sammunat</div> */}
        <h2 className="text-2xl font-bold mb-4">
          Samm<span className="text-orange-500">unat</span>
        </h2>

        <ul className="hidden md:flex items-center gap-6 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Why Us</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        <button className="hidden md:block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>
    </header>
  );
}
