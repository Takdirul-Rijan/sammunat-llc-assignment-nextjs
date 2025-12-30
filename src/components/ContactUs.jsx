"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all required fields!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: `Thank you, ${formData.name}. We'll get back to you soon.`,
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="w-11/12 mx-auto py-16 px-3 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Have questions or want to work with us? Fill out the form below or
          reach us via our office details.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Office Address</h3>
            <p className="text-gray-600">
              Sammunat LLC
              <br />
              123 Digital Avenue,
              <br />
              Missoula, Montana 59801, USA
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Email & Phone</h3>
            <p className="text-gray-600">
              Email: info@sammunat.com <br />
              Phone: +1 971-588-749689
            </p>
          </div>

          <div className="w-full h-64">
            <iframe
              title="Sammunat Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.901729796031!2d-114.012345678!3d46.872345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536f95e8c1234567%3A0xabcdef1234567890!2sMissoula%2C%20Montana!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
