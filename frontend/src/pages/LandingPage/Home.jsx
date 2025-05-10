// import React from "react";
// import HeroSection from "./HeroSection";
// import Navbar from './Navbar';
// import FeatureSection from "./FeatureSection";
// import AboutSection from "./AboutSection";
// import Footer from "./Footer";

// const Home = () => {
//   return (
    
//     <div className="bg-[#F5F7F2]">
//       <Navbar /> 
//       <div id="hero">
//         <HeroSection />
//       </div>
//       <div id="services">
//         <FeatureSection />
//       </div>
//       <div id="about">
//         <AboutSection />
//       </div>
//       <div id="contact">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import HeroSection from "./HeroSection";
import Navbar from './Navbar';
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-[#F5F7F2] scroll-smooth scroll-p-20">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-20">
        <HeroSection />
      </section>

      {/* Features / Services Section */}
      <section id="services" className="py-12">
        <FeatureSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-12">
        <AboutSection />
      </section>

      {/* Contact / Footer Section */}
      <section id="contact" className="pt-12">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
