import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#0B3E2A] text-white transition-shadow duration-300 ${
        scrolled ? "shadow-2xl" : "shadow-md"
      }`}
    >
      <div className="pl-6 pr-6 py-2 flex justify-between items-center">

        {/* Logo & Brand Name */}
        <div className="flex-shrink-0 flex items-center gap-4">
          <Link to="/" className="transition-transform duration-200 hover:scale-110 flex items-center gap-3">
            <img src={logo} alt="GreenGrow Logo" className="h-16 w-auto max-h-16" />
            <span className="text-2xl font-semibold text-[#FFA336] hidden sm:inline-block">
              HEMANT FERTILIZERS PVT. LTD.
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-xl">
          <Link to="/" className="hover:text-[#FFA336] transition relative after:content-[''] after:block after:h-0.5 after:bg-[#FFA336] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            HOME
          </Link>
          <Link to="/services" className="hover:text-[#FFA336] transition relative after:content-[''] after:block after:h-0.5 after:bg-[#FFA336] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            PRODUCTS
          </Link>
          <Link to="/aboutus" className="hover:text-[#FFA336] transition relative after:content-[''] after:block after:h-0.5 after:bg-[#FFA336] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            ABOUT US
          </Link>
          <Link to="/contactus" className="hover:text-[#FFA336] transition relative after:content-[''] after:block after:h-0.5 after:bg-[#FFA336] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            CONTACT
          </Link>
        </div>

        {/* CTA Button */}
       {/* CTA Button */}
<div className="hidden md:block">
  <Link
    to="/contactus"
    className="bg-[#FFA336] text-[#0B3E2A] px-5 py-2 rounded-full hover:bg-[#e6952d] transition text-xl font-semibold transform hover:scale-105 duration-200 shadow-md hover:shadow-xl"
  >
    Contact
  </Link>
</div>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="md:hidden text-3xl text-white">
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0B3E2A] text-white px-6 py-4 shadow-lg text-xl space-y-3">
          <Link to="/" onClick={toggleMenu} className="block py-1 hover:text-[#FFA336]">
            HOME
          </Link>
          <Link to="/services" onClick={toggleMenu} className="block py-1 hover:text-[#FFA336]">
            Products
          </Link>
          <Link to="/aboutus" onClick={toggleMenu} className="block py-1 hover:text-[#FFA336]">
            About Us
          </Link>
          <Link to="/contactus" onClick={toggleMenu} className="block py-1 hover:text-[#FFA336]">
            Contact
          </Link>
          <a
            href="#quote"
            onClick={toggleMenu}
            className="block mt-3 bg-[#FFA336] text-[#0B3E2A] text-center py-2 rounded-full font-semibold hover:bg-[#e6952d] transition transform hover:scale-105 duration-200 shadow-md hover:shadow-xl"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
