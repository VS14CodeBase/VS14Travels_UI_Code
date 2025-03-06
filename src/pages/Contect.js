import React from "react";
import ContactUS from "../assets/Contact-us1.jpg"

const ContactUsPage = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: `url(${ContactUS})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <span className="text-3xl">📞</span>
            <h3 className="text-xl font-semibold mt-2">Call Us</h3>
            <p className="text-lg">70900 85353</p>
            <a href="tel:7090085353" className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
              Call Now
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <span className="text-3xl">📧</span>
            <h3 className="text-xl font-semibold mt-2">Email Us</h3>
            <p className="text-lg">Vs14toursandtravels@gmail.com</p>
            <a href="mailto:Vs14toursandtravels@gmail.com" className="mt-3 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
              Send Email
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <span className="text-3xl">📍</span>
            <h3 className="text-xl font-semibold mt-2">Visit Us</h3>
            <p className="text-lg text-center">
              #01, 2nd Cross, 2nd Phase, <br />
              Amrith Nagar, near Amrith College, <br />
              A Krishnappa Nagar, Carmelaram, <br />
              Bengaluru South - 560035
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
