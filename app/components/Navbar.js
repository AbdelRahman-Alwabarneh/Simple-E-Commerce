// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-800">
              MyWebsite
            </Link>
            <div className="hidden md:flex space-x-4 ml-10 ">
              <Link href="/" className="text-gray-700 hover:text-blue-800 transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-800 transition-colors duration-300">
                About
              </Link>
=
            </div>
          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
