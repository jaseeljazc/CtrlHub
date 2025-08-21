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
      <div
        className="absolute pb-10 inset-0 bg-blac flex items-center
         justify-center"
      >
        <div className="text-center text--500 pb-0 lg:pb-30 p-6 ">
          {/* <h6 className="md:text-3xl font-bold sm:text-3xl">WELCOME TO </h6> */}
          <h1
            className="text-6xl sm:text-3xl md:text-7xl lg:text-9xl font-bold tracking-tighter
            uppercase mb-4 animate-gradient-text drop-shadow-lg"
          >
            CTRLHUB <br /> 
          </h1>
          

          <p className="text-md  tracking-tighter font-medium md:text-xl mb-6">
            Explore our gaming accessories with fast world wide shipping
          </p>
          <Link
            to="#"
            className="bg-gray-
             hover:text-lime-500 hover:bg-transparent  border border-lime-500 rounded-[-7px] p-3
            text-lg bg-lime-500 text-gray-950 transform transition-colors duration-300 ease-in-out "
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
