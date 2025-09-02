import React from "react";
import { Link  } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow z-50">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center py-4">
        
        {/* Logo / Name */}
        <Link to="/" className="text-lg font-bold text-indigo-400">
          Ankur Karn
        </Link >

        {/* Navigation Link s */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-indigo-300 transition">Home</Link >
          <Link to="/about" className="hover:text-indigo-300 transition">About</Link >
          <Link to="/" className="hover:text-indigo-300 transition">Projects</Link >
          <Link to="/contact" className="hover:text-indigo-300 transition">Contact</Link >
        </div>
      </div>
    </nav>
  );
}

export default Navbar
