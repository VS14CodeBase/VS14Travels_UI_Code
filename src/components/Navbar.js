import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/LogoVS14.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-blue-900 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center" style={{ maxWidth: "100%"}}>

        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Travels"
              className="h-12 w-auto rounded-lg bg-transparent"
            />
            <h1 className="text-2xl font-semibold tracking-wide italic">
              TOURS & TRAVELS
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {["/", "/services", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`hover:text-gray-300 transition ${location.pathname === path ? "border-b-2 border-white pb-1" : ""
                }`}
            >
              {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 text-center space-y-3 py-4">
          {["/", "/services", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`block hover:text-gray-300 ${location.pathname === path ? "font-bold text-white" : ""
                }`}
            >
              {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
