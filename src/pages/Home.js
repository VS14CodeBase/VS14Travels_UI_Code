import heroImage from "../assets/HeroBanner.jpg";
import aboutImage from "../assets/AboutUs.jpg";
import CorportTrvImage from "../assets/CorportTrvImage.jpg";
import AirpoetTrvImage from "../assets/AirpoetTrvImage.jpg";
import CabImage from "../assets/CabImage.jpg";
import OutstationImage from "../assets/OutstationImage.jpg";
import Lottie from "lottie-react";
import cleanCarIcon from "../assets/CarCleaning.json";
import reliableIcon from "../assets/ReliableIcon.json";
import comfortIcon from "../assets/ComfortIcon.jpg";
import safetyIcon from "../assets/SafetyIcon.json";
import pricingIcon from "../assets/PricingIcon.jpg";
import bookingIcon from "../assets/bookingIcon.jpg";
import customerIcon from "../assets/CustomerIcon.json";
import ContactUsPage from "./Contect";


const Home = () => {

  const services = [
    {
      title: "Corporate Travel",
      image:  CorportTrvImage ,
      description:
        "We offer professional and reliable corporate travel solutions to ensure your business trips are seamless and stress-free. Travel in comfort with our premium fleet.",
    },
    {
      title: "Airport Travel",
      image:  AirpoetTrvImage ,
      description:
        "Hassle-free airport transfers with on-time pickups and drop-offs. Our well-maintained vehicles and professional drivers make your journey smooth and relaxing.",
    },
    {
      title: "Company Cabs / Employee Travels",
      image:  CabImage ,
      description:
        "Safe and convenient daily commute solutions for employees. We provide company cabs with flexible routes and schedules tailored to your organization’s needs.",
    },
    {
      title: "Outstation Travels",
      image: OutstationImage ,
      description:
        "Planning a getaway? Our outstation travel services offer well-maintained cars and professional drivers for a smooth and enjoyable long-distance journey.",
    },
  ];

  const benefits = [
    {
      title: "Clean and Well-Maintained Vehicles",
      icon: cleanCarIcon, // JSON Animation
      type: "lottie",
      description: "We ensure that all our 5-seater and 7-seater cars are regularly cleaned and well-maintained for a hygienic and pleasant travel experience."
    },
    {
      title: "Reliable Service",
      icon: reliableIcon, // JSON Animation
      type: "lottie",
      description: "Punctuality and dependability are at the heart of our service. We guarantee on-time pickups and drop-offs, making your journey stress-free."
    },
    {
      title: "Comfortable Rides",
      icon: comfortIcon, // Static Image
      type: "image",
      description: "Our spacious and well-equipped vehicles provide a smooth and relaxing ride, ensuring maximum comfort for every passenger."
    },
    {
      title: "Safety First",
      icon: safetyIcon, // JSON Animation
      type: "lottie",
      description: "Your safety is our priority. Our vehicles undergo regular inspections, and we have experienced drivers who follow all safety regulations."
    },
    {
      title: "Affordable Pricing",
      icon: pricingIcon, // Static Image
      type: "image",
      description: "Enjoy competitive and transparent pricing with no hidden charges, making quality travel accessible to everyone."
    },
    {
      title: "Easy Booking Process",
      icon: bookingIcon, // Static Image
      type: "image",
      description: "Hassle-free booking options through our simple and user-friendly platform ensure a smooth start to your journey."
    },
    {
      title: "Customer-Centric Approach",
      icon: customerIcon, // JSON Animation
      type: "lottie",
      description: "We value our customers and strive to provide personalized services to meet your unique travel needs."
    }
  ];

  return (
    <>
      {/* // { Hero Banner section Start } */}
      <section className="relative w-full flex justify-center items-center bg-gray-100 py-10">
        <div className="relative w-[1180px] h-[450px]">
          <img
            src={heroImage}
            alt="Travel Banner"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />

          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-lg">
            <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
              Here, There & Everywhere<br />
              <span className="text-yellow-300">Making travel easy...</span>
            </h1>
          </div>
        </div>
      </section>
      {/* // {Hero Banner section Ends } */}

      {/* // {About Us section Start } */}
      <section className="w-full flex justify-center items-center bg-white py-16">
        <div className="max-w-6xl px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              VS14 Tours and Travels is committed to providing professional travel solutions in Bangalore.
              With years of experience in the travel industry, we offer a seamless and hassle-free journey
              with our well-maintained 5-seater and 7-seater cars. Our transparent pricing, easy booking options,
              and reliable service ensure a comfortable ride for both regional and outstation travel.
              Whether for business or leisure, we strive to make your travel experience smooth, safe, and enjoyable.
            </p>
          </div>
        </div>
      </section>
      {/* // {About Us section Ends } */}

      {/* // {Our Services section Start } */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            Experience comfortable and reliable travel solutions tailored for your needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                {/* Service Title */}
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>

                {/* Service Description */}
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* {Our Services section Ends } */} 

      {/* {Why Choose Us section Starts } */} 
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Why Choose VS14 Tours and Travels?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                {/* Conditionally Render Lottie JSON or Image */}
                {benefit.type === "lottie" ? (
                  <Lottie animationData={benefit.icon} className="w-24 h-24 mb-4" />
                ) : (
                  <img src={benefit.icon} alt={benefit.title} className="w-24 h-24 mb-4" />
                )}
                <h3 className="text-xl font-semibold text-gray-700">{benefit.title}</h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* {Why Choose Us section Ends } */} 

      {/* {Contact Us section Start } */} 
        <ContactUsPage />
      {/* {Contact Us section Ends } */} 
    </>
  );
};

export default Home;
