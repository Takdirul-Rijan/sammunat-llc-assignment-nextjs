"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Samm<span className="text-orange-500">unat</span>
        </h2>

        <ul className="hidden md:flex items-center gap-6 text-gray-700">
          <li>
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#why-us" className="hover:text-blue-600">
              Why Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        <button className="hidden md:block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700">
            <li>
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#why-us" onClick={() => setOpen(false)}>
                Why Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>

            <button className="mt-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
