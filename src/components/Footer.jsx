import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Samm<span className="text-orange-500">unat</span>
          </h2>
          <p className="text-sm mb-6">
            © 2025 Sammunat.
            <br />
            All rights reserved.
          </p>

          <div className="flex gap-4 text-white">
            <FaFacebookF className="cursor-pointer hover:text-orange-500" />
            <FaTwitter className="cursor-pointer hover:text-orange-500" />
            <FaDribbble className="cursor-pointer hover:text-orange-500" />
            <FaInstagram className="cursor-pointer hover:text-orange-500" />
            <FaYoutube className="cursor-pointer hover:text-orange-500" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="leading-relaxed text-sm">
            Our Address –
            <br />
            127 N Higgins Ave Ste 307d
            <br />
            Missoula, MT 59802, USA
          </p>
          <p className="mt-4 text-sm">contact@sammunat.com</p>
          <p className="mt-2 text-sm">+971 588749689</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Learn More</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Story</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Newsletter
          </h3>
          <p className="text-sm mb-6">
            Subscribe to our newsletter to get our news & deals delivered to
            you.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-l-md bg-slate-700 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-r-md hover:bg-indigo-600 transition">
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
