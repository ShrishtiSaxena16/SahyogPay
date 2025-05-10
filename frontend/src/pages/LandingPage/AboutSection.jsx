// import React from 'react';
// import about from '../../assets/about.jpg';

// const AboutSection = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//           Why Choose Us?
//         </h2>
//         <p className="text-lg md:text-xl text-gray-600 mb-8">
//           At our bank, we believe in making your money work for you. 
//           Whether you're an individual or part of a group, we provide 
//           solutions that help you invest and save with confidence. 
//           Join thousands who trust us to secure their financial future.
//         </p>
//         <img src={about} alt="About Us" className="mx-auto rounded-lg shadow-lg" />
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
// import React from "react";
// import about from "../../assets/about.jpg";

// const AboutSection = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-[#1D2B36] to-[#2F3E2E] text-white mb-20">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
//         {/* Left: Text Content */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-4xl font-bold mb-6 text-[#D9E3DA]">Why Choose Us?</h2>
//           <p className="text-lg leading-relaxed text-[#C2D1BD]">
//             This is more than just finances; it's about building a foundation for your dreams. We believe in empowering women to take control of their financial narratives, fostering a supportive community where aspirations are nurtured and realized. It's about owning your future, defining your own path, and knowing that every financial step you take is an investment in your personal legacy. Join us, and discover the confidence that comes with financial well-being, where your potential is not just recognized, but celebrated.
//           </p>
//         </div>

//         {/* Right: Image */}
//         <div className="md:w-1/2">
//           <img
//             src={about}
//             alt="About Us"
//             className="w-full rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React from "react";
import about from "../../assets/about.jpg";

const AboutSection = () => {
  return (
    <section className="py-32 bg-[#F8F9FA] text-[#212121] mb-28">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Text Section - now on the left */}
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-[#212121]">
            Why Choose Us?
          </h2>
          <p className="text-xl leading-relaxed text-[#3b4141]">
            Our platform is more than just a place to manage finances—it's a community built on support, trust, and empowerment.
            We enable you to define your own success through tools that help you grow your wealth and confidence.
          </p>
          <p className="text-xl leading-relaxed text-[#3b4141]">
            Whether you're starting out or scaling up, every decision you make here is a step forward. Join a platform where your goals are heard,
            your progress is celebrated, and your journey is supported.
          </p>
        </div>

        {/* Image Section - now on the right */}
        <div className="relative group">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 group-hover:scale-105">
            <img
              src={about}
              alt="About Us"
              className="w-full h-[500px] object-cover md:rounded-2xl"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#2c68b7]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
