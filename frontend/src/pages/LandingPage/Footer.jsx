// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-blue-600 text-white py-8">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h3 className="text-xl font-bold mb-2">Join Us in Making a Difference</h3>
//         <p className="mb-6">
//   Empowering women with financial access and opportunities through trusted lending partnerships.
// </p>
//         <div className="space-x-4">
//           <Link to="/register">
//             <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg">
//               Register Now
//             </button>
//           </Link>
//           <Link to="/signin">
//             <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-lg">
//               Sign In
//             </button>
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8f959c] text-[#212121] py-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">

        {/* Heading */}
        <h3 className="text-3xl font-bold text-[#3b4141]">
          Building Financial Confidence for Everyone
        </h3>
        <p className="text-lg text-[#3b4141]">
          Achieve your goals with secure, flexible, and inclusive loan solutions.
        </p>

        {/* Register & Sign In Buttons */}
        <div className="flex justify-center flex-wrap gap-4">
          <Link to="/register">
            <button className="bg-[#2c68b7] hover:bg-[#1e4c84] text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300 shadow-md">
              Register Now
            </button>
          </Link>
          <Link to="/signin">
            <button className="border border-[#2c68b7] text-[#2c68b7] px-6 py-3 rounded-full text-base font-medium hover:bg-[#2c68b7] hover:text-white transition-all duration-300">
              Sign In
            </button>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-2xl mt-4">
          <a href="https://facebook.com" className="text-[#2c68b7] hover:text-[#1e4c84] transition">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-[#2c68b7] hover:text-[#1e4c84] transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" className="text-[#2c68b7] hover:text-[#1e4c84] transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Inclusive Loan Management System. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
