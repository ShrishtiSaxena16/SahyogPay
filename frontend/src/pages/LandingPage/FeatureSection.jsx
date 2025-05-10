// import React from 'react';
// import investing from '../../assets/investing.jpg';
// import saving from '../../assets/saving.png';
// import group from '../../assets/group.png';

// const FeatureSection = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
//           Our Services
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
//             <img src={investing} alt="Investing" className="w-full mb-4 rounded-lg" />
//             <h3 className="text-xl font-bold mb-2">Personalized Investments</h3>
//             <p className="text-gray-600">
//               Grow your wealth with tailored investment plans that meet your financial goals.
//             </p>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
//             <img src={saving} alt="Saving" className="w-full mb-4 rounded-lg" />
//             <h3 className="text-xl font-bold mb-2">Smart Savings</h3>
//             <p className="text-gray-600">
//               Save for your future with high-interest savings accounts that ensure your money works for you.
//             </p>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
//             <img src={group} alt="Group Saving" className="w-full mb-4 rounded-lg" />
//             <h3 className="text-xl font-bold mb-2">Group Savings Plans</h3>
//             <p className="text-gray-600">
//               Join group savings schemes and benefit from collective investments for greater returns.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

import React from 'react';
import { FaChartLine, FaPiggyBank, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine size={48} className="text-[#3b4141]" />,
    title: "Personalized Planning",
    description:
      "Craft your financial journey with insights and smart tools tailored to your unique goals and loan needs.",
  },
  {
    icon: <FaPiggyBank size={48} className="text-[#3b4141]" />,
    title: "Smart Savings",
    description:
      "Track, grow, and manage your funds effortlessly. Empower your future with intelligent saving strategies.",
  },
  {
    icon: <FaUsers size={48} className="text-[#3b4141]" />,
    title: "Community Support",
    description:
      "Join collective savings groups or loan circles. Collaborate, grow together, and unlock flexible financial options.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="services" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-14">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-[#e6eefb] p-4 rounded-full mx-auto mb-6 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#3b4141] mb-3">{feature.title}</h3>
              <p className="text-[#3b4141] text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
