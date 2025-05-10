// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/SVGLOGO.jpeg";
// import { FaGlobe } from "react-icons/fa";

// const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// };

// const Navbar = () => {
//   const [language, setLanguage] = useState("English");
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     setDropdownOpen(false);
//   };

//   return (
//     <nav className="bg-[#050606] opacity-90 text-white fixed w-full z-10 shadow-lg">
//       <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 py-4">

//         {/* Logo Section */}
//         <div>
//           <Link to="/" className="hover:opacity-85 transition-all duration-300">
//             <div className="w-[200px] h-[72px] flex items-center overflow-hidden">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="w-[260px] h-[90px] object-cover object-center -mt-2"
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-6 text-lg font-medium tracking-wide mr-16">
//           <Link to="/" onClick={() => scrollToSection("hero")} className="hover:text-[#2E3736] transition-all duration-300">
//             Home
//           </Link>
//           <Link to="/" onClick={() => scrollToSection("services")} className="hover:text-[#2E3736] transition-all duration-300">
//             Services
//           </Link>
//           <Link to="/" onClick={() => scrollToSection("about")} className="hover:text-[#2E3736] transition-all duration-300">
//             About
//           </Link>
//           <Link to="/" onClick={() => scrollToSection("contact")} className="hover:text-[#2E3736] transition-all duration-300">
//             Contact
//           </Link>
//         </div>

//         {/* Language Dropdown Button */}
//         <div className="relative flex items-center ml-6">
//           <button
//             onClick={() => setDropdownOpen(!isDropdownOpen)}
//             className="text-sm text-white flex items-center p-2 px-4 rounded hover:bg-[#2E3736] transition-all duration-300"
//           >
//             <FaGlobe className="text-2xs mr-2" />
//             {language} <span className="ml-2 text-2xs">| भाषा बदलिए</span>
//           </button>

//           {/* Dropdown menu */}
//           {isDropdownOpen && (
//             <div className="absolute top-10 right-0 bg-[#F5F7F2] text-black p-3 rounded-lg shadow-xl w-36">
//               <ul className="space-y-2 text-xs font-medium">
//                 <li>
//                   <button onClick={() => handleLanguageChange("English")} className="hover:text-[#2E3736] w-full text-left transition-colors">
//                     English
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => handleLanguageChange("मराठी")} className="hover:text-[#2E3736] w-full text-left transition-colors">
//                     मराठी
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => handleLanguageChange("ਪੰਜਾਬੀ")} className="hover:text-[#2E3736] w-full text-left transition-colors">
//                     ਪੰਜਾਬੀ
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => handleLanguageChange("தமிழ்")} className="hover:text-[#2E3736] w-full text-left transition-colors">
//                     தமிழ்
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SVGLOGO from "../../assets/SVGLOGO.jpeg";
import { FaGlobe } from "react-icons/fa";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-[#2e3232] opacity-95 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-10 py-6 h-[120px]">

        {/* Logo Section */}
        <div className="flex items-center justify-start h-full">
  <Link to="/" className="hover:opacity-85 transition-opacity flex items-center h-full">
    <img
      src={SVGLOGO}
      alt="Platform Logo"
      className="h-[110px] w-auto object-contain"
    />
  </Link>
</div>


        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 text-2xl font-bold tracking-wide items-center">
          <button onClick={() => scrollToSection("hero")} className="hover:text-[#0c0b0f] transition-colors duration-300">
            Home
          </button>
          <button onClick={() => scrollToSection("services")} className="hover:text-[#0c0b0f] transition-colors duration-300">
            Services
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-[#0c0b0f] transition-colors duration-300">
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-[#0c0b0f] transition-colors duration-300">
            Contact
          </button>
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-lg px-5 py-3 rounded-md hover:bg-[#2E3736] transition"
          >
            <FaGlobe className="mr-2 text-xl" />
            {language}
            <span className="ml-2 text-base hidden sm:inline-block">| भाषा बदलें</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-16 right-0 bg-[#F5F7F2] text-black rounded-md shadow-lg py-2 w-40 z-20">
              {["English", "मराठी", "ਪੰਜਾਬੀ", "தமிழ்"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className="block w-full text-left px-4 py-2 text-base hover:bg-[#E6EAE3] hover:text-[#2E3736] transition"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
