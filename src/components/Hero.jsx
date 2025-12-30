import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build Smarter Digital Solutions
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          We help startups and businesses grow with modern, scalable web
          solutions built using cutting-edge technologies.
        </p>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
