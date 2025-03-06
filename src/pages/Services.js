import React from "react";
import CorportTrvImage from "../assets/CorportTrvImage.jpg";
import AirpoetTrvImage from "../assets/AirpoetTrvImage.jpg";
import CabImage from "../assets/CabImage.jpg";
import OutstationImage from "../assets/OutstationImage.jpg";


const services = [
  {
    title: "Corporate Travel",
    image: CorportTrvImage,
    description:
      "We offer professional and reliable corporate travel solutions to ensure your business trips are seamless and stress-free. Travel in comfort with our premium fleet.",
  },
  {
    title: "Airport Travel",
    image: AirpoetTrvImage,
    description:
      "Hassle-free airport transfers with on-time pickups and drop-offs. Our well-maintained vehicles and professional drivers make your journey smooth and relaxing.",
  },
  {
    title: "Company Cabs / Employee Travels",
    image: CabImage,
    description:
      "Safe and convenient daily commute solutions for employees. We provide company cabs with flexible routes and schedules tailored to your organization’s needs.",
  },
  {
    title: "Outstation Travels",
    image: OutstationImage,
    description:
      "Planning a getaway? Our outstation travel services offer well-maintained cars and professional drivers for a smooth and enjoyable long-distance journey.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">
          Experience comfortable and reliable travel solutions tailored for your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>

              <p className="text-gray-600 mt-2">{service.description}</p>

              <a
                href="tel:7090085353"
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition inline-block"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
