import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800/50 overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:ml-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparet mb-4 text-[#00ff00]">
                CtrlHub
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Premium gaming peripherals and accessories for the ultimate
                gaming experience. Quality that speaks for itself.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 flex flex-col justify-center">
              <div className="flex items-center space-x-3 text-gray-300 justify-center">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <FiPhoneCall className="w-4 h-4" />
                </div>
                <span className="text-sm">9745752486</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 justify-center">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <FiMail className="w-4 h-4" />
                </div>
                <span className="text-sm">support@yourstore.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 justify-center">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Kochi, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Shop Section */}
          <div className="text-center">
            <h3 className="text-xl text-[#00ff00] font-bold  mb-6 relative">
              Shop
            </h3>
            <ul className="space-y-4">
              {[
                "Peripherals",
                "Audio",
                "Displays",
                "Aesthetics",
                "Console",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gray-800/0 group-hover:bg-gray-800/20 rounded-lg transition-all duration-300 -z-0 -m-2"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold  mb-6 relative text-[#00ff00]">
              Support
            </h3>
            <ul className="space-y-4">
              {[
                "Contact Us",
                "About Us",
                "FAQs",
                "Features",
                "Privacy Policy",
                "Terms of Service",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gray-800/0 group-hover:bg-gray-800/20 rounded-lg transition-all duration-300 -z-0 -m-2"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold  mb-6 relative text-[#00ff00]">
              Connect With Us
            </h3>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-8 justify-center">
              {[
                { Icon: TbBrandMeta, href: "#", color: "hover:text-blue-500" },
                {
                  Icon: RiTwitterXLine,
                  href: "#",
                  color: "hover:text-gray-300",
                },
                {
                  Icon: IoLogoInstagram,
                  href: "#",
                  color: "hover:text-pink-500",
                },
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 hover:border-gray-600/50 hover:shadow-lg group`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800/50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2025 Your Store. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
