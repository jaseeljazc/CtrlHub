import React from "react";
import heroImg from "/images/Keyboard2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt=""
        className="w-full h-[400px]
         md-h-[600px] lg:h-[750px] object-cover
         "
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/70 to-black/55"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/40"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>
      <div
        className="absolute pb-10 inset-0 bg-blac flex items-center
         justify-center"
      >
        <div className="text-center text--500 pb-0 lg:pb-30 p-6 ">
          {/* <h6 className="md:text-3xl font-bold sm:text-3xl">WELCOME TO </h6> */}
          {/* Clean, Professional Title */}
          <h1 className=" flex sm:flex-col justify-center mt-15 text-5xl lg:text-8xl xl:text-9xl font-light tracking-tight text-white mb-2 sm:mb-5 leading-none">
            <span className="block font-extralight sm:mt-7 ">CTRL</span>
            <span className="block font-bold bg-gradient-tor text-[#00ff00] from-[#00ff00] to-gray-300 bg-clip-text ">
              HUB
            </span>
          </h1>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl lg:text-3xl text-gray-300 font-light leading-relaxed">
              Elevate Your Gaming Experience with
            </h2>

            <p className="text-md text-center text-gray-400 max-w-2xl leading-relaxed mb-12 font-light">
              Discover our curated collection of professional-grade gaming
              peripherals. Engineered for precision, built for performance,
              designed for champions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center items-center">
            <Link
              to="/collections/all"
              className="group w-60 inline-flex items-center px-2 mx-9 sm:mx-0 py-4 bg-[#00ff00] text-black font-semibold tracking-wide hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              EXPLORE COLLECTION
              <svg
                className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Secondary Professional Button */}
            <Link
              to="/about"
              className="hidden group sm:inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              LEARN MORE
              <svg
                className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";
// import heroImg from "/images/Keyboard2.jpg";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden min-h-screen text-center">
//       {/* Professional Background with Subtle Overlay */}
//       <div className="relative">
//         <img
//           src={heroImg}
//           alt="Professional Gaming Setup"
//           className="w-full h-screen object-cover"
//         />

//         {/* Sophisticated Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85"></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>

//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       {/* Professional Hero Content */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="container mx-auto px-6 lg:px-12 ">
//           <div className="max-w-full ">

//             {/* Professional Badge */}
//             <div className="inline-flex items-center px-4 py-20 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg text-gray-300 font-medium text-sm mb-8 tracking-wide">
//               PROFESSIONAL GAMING EQUIPMENT
//             </div>

//             {/* Clean, Professional Title */}
//             <h1 className="text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight text-white mb-8 leading-none">
//               <span className="block font-extralight">CTRL</span>
//               <span className="block font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">HUB</span>
//             </h1>

//             {/* Professional Subtitle */}
//             <div className="mb-12 space-y-4">
//               <h2 className="text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
//                 Elevate Your Gaming Experience with
//               </h2>
//               <p className="text-4xl lg:text-5xl font-semibold text-white">
//                 Premium Peripherals
//               </p>
//               <div className="w-24 h-0.5 bg-white mt-6"></div>
//             </div>

//             {/* Professional Description */}
//             <p className="text-lg text-center text-gray-400 max-w-2xl leading-relaxed mb-12 font-light">
//               Discover our curated collection of professional-grade gaming peripherals.
//               Engineered for precision, built for performance, designed for champions.
//             </p>

//             {/* Professional CTA Section */}
<div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center">
  {/* Primary Professional Button */}
  <Link
    to="/collections/all"
    className="group inline-flex items-center px-8 py-4 bg-white text-black font-semibold tracking-wide hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
  >
    EXPLORE COLLECTION
    <svg
      className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </Link>

  {/* Secondary Professional Button */}
  <Link
    to="/about"
    className="group inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
  >
    LEARN MORE
    <svg
      className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </Link>
</div>;

//             {/* Professional Stats/Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//               {[
//                 { number: "10K+", label: "Satisfied Gamers", desc: "Worldwide community" },
//                 { number: "99.9%", label: "Uptime Reliability", desc: "Professional grade" },
//                 { number: "24/7", label: "Expert Support", desc: "Always here to help" }
//               ].map((stat, index) => (
//                 <div key={index} className="group">
//                   <div className="border-l-2 border-white/20 pl-6 group-hover:border-white/40 transition-colors duration-300">
//                     <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
//                     <div className="text-lg font-medium text-gray-300 mb-1">{stat.label}</div>
//                     <div className="text-sm text-gray-500">{stat.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Professional Side Element */}
//         <div className="absolute right-12 top-1/2 transform -translate-y-1/2 hidden xl:block">
//           <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent mb-8"></div>
//           <div className="text-right space-y-4">
//             <div className="text-white/60 text-sm font-light tracking-widest transform rotate-90 origin-right">SCROLL</div>
//           </div>
//         </div>
//       </div>

//       {/* Minimal Scroll Indicator */}
//       <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
//         <div className="flex flex-col items-center text-white/40">
//           <div className="w-0.5 h-16 bg-gradient-to-b from-white/40 to-transparent mb-4"></div>
//           <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </div>

//       {/* Professional Corner Accents */}
//       <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/10"></div>
//       <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/10"></div>
//     </section>
//   );
// };

// export default Hero;
