import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left" style={{ maxWidth: "90%"}}>
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold">About VS14 Tours & Travels</h2>
          <p className="mt-3 text-gray-300">
            Your trusted travel partner in Bangalore, providing professional, comfortable, and reliable travel solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-3 text-gray-300">📍 #01, 2nd Cross, 2nd Phase, Amrith Nagar, Bengaluru - 560035</p>
          <p className="text-gray-300">📞 <a href="tel:7090085353" className="hover:text-yellow-400">70900 85353</a></p>
          <p className="text-gray-300">📧 <a href="mailto:Vs14toursandtravels@gmail.com" className="hover:text-yellow-400">Vs14toursandtravels@gmail.com</a></p>
        </div>

        {/* Social Media Links */}
        <div style={{ textAlign: "center"}}>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-6 mt-3" style={{ justifyContent: "center"}}>
            <a href="https://www.facebook.com/vs14_travels/#" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/vs14_travels/#" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://wa.me/7090085353" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-400">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} VS14 Tours & Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
