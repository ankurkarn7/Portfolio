import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 ">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left: Name & Year */}
        <p className="text-sm">
          © {new Date().getFullYear()} Ankur. All rights reserved.
        </p>

        {/* Middle: Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/project" className="hover:text-white transition">Projects</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Right: Note */}
        <p className="text-sm">
          Built with <span className="text-indigo-400">React</span> & <span className="text-teal-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
