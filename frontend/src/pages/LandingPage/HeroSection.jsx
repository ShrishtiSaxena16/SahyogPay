// import React from "react";
// import { Link } from "react-router-dom";
// import Women from "../../assets/Women.png";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-16 py-12 bg-[#F5F7F2] text-[#3F4E4F]">
      
//       {/* Left Side - Text */}
//       <div className="md:w-[45%] flex flex-col justify-center space-y-6 text-center md:text-left">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide text-[#050606]">
//           Empower Your <span className="text-[#6A8D73]">Financial Future</span>
//         </h1>
//         <p className="text-lg md:text-xl text-[#050606] leading-relaxed">
//           Build confidence and stability with smart financial choices tailored for you.
//         </p>
//         <div className="flex justify-center md:justify-start gap-4 mt-6">
//           <Link to="/signin">
//             <button className="border border-[#6A8D73] bg-transparent px-6 md:px-8 py-3 rounded-lg text-lg font-medium text-[#6A8D73] hover:bg-[#A8C3A0] hover:text-white transition-all duration-300">
//               Sign In
//             </button>
//           </Link>

//           <Link to="/register">
//             <button className="bg-[#6A8D73] text-white px-6 md:px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[#557A66] transition-all duration-300">
//               Create an Account
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="md:w-[40%] flex justify-center md:justify-end mt-10 md:mt-0">
//         <div className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-[#6A8D73] shadow-lg">
//           <img
//             src={Women}
//             alt="Confident Investor"
//             className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
//           />
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";
import { Link } from "react-router-dom";
import Women from "../../assets/Women.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-16 py-12 bg-[#F8F9FA] text-[#212121]">

      {/* Left Side - Image */}
      <div className="md:w-[40%] flex justify-center md:justify-start mt-10 md:mt-0">
  <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-[#e6e6e6] shadow-lg transform transition-all duration-500 hover:scale-105">
    <img
      src={Women}
      alt="Confident Investor"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* Right Side - Text */}
      <div className="md:w-[45%] flex flex-col justify-center space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#3b4141]">
          Take Charge of Your <span className="text-[#3b4141]">Financial Path</span>
        </h1>
        <p className="text-lg md:text-xl text-[#212121] leading-relaxed">
          Build your financial foundation with solutions designed to help you grow. Whether you're just starting or looking to take your next big step, we offer tools and resources to support your ambitions.
        </p>
        <p className="text-lg md:text-xl text-[#212121] leading-relaxed">
          Step into a future where your financial potential is limitless. We're here to guide you every step of the way.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <Link to="/signin">
            <button className="border border-[#010d14] bg-transparent px-6 py-3 rounded-lg text-lg font-medium text-[#2c68b7] hover:bg-[#4d38c4] hover:text-white transition-all duration-300">
              Sign In
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-[#2c68b7] text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-[#4d38c4] transition-all duration-300">
              Create an Account
            </button>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;

