import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Experienced Team",
      description:
        "Our team has expertise in web development, design, and digital growth solutions.",
    },
    {
      title: "Client-Focused Solutions",
      description:
        "We create websites and tools that are tailored to meet client needs and goals.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We use the latest technologies like React, Next.js, AI tools, and CRMs to deliver results.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
