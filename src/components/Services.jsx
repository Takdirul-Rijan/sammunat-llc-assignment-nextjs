export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom, responsive websites built with React, Next.js, and modern technologies.",
    },
    {
      title: "Web Design & UI/UX",
      description:
        "Engaging and user-centered interfaces that provide a seamless experience.",
    },
    {
      title: "E-Commerce & Shopify",
      description:
        "Complete e-commerce solutions with Shopify integration and optimization.",
    },
    {
      title: "Digital Growth & AI Tools",
      description:
        "AI-powered solutions, CRM tools, and digital strategies for business growth.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
