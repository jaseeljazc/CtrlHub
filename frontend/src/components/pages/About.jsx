import React from "react";
import {
  Monitor,
  Headphones,
  Mouse,
  Keyboard,
  Gamepad2,
  ShoppingCart,
  Users,
  Award,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const products = [
    { icon: Mouse, name: "Gaming Mice" },
    { icon: Keyboard, name: "Gaming Keyboards" },
    { icon: Monitor, name: "Gaming Monitors" },
    { icon: Headphones, name: "Gaming Headsets" },
    { icon: Gamepad2, name: "Controllers & Consoles" },
  ];

  const stats = [
    { number: "50K+", label: "Happy Gamers", icon: Users },
    { number: "1000+", label: "Gaming Products", icon: ShoppingCart },
    { number: "5 Years", label: "Gaming Excellence", icon: Award },
    { number: "24/7", label: "Gaming Support", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-black text-white ">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden ">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div> */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#00ff00] rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-[#00ff00] rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-[#00ff00] rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block p-3 bg-purple-700 bg-opacity-20 rounded-full mb-6">
            <Target className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-800 bg-clip-text text-transparent">
            Level Up Your Game
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to the ultimate destination for premium gaming accessories.
            We're passionate gamers who understand what it takes to dominate the
            battlefield.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#00ff00]">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We believe every gamer deserves the best equipment to unleash
                their full potential. Our mission is to provide top-tier gaming
                accessories that enhance performance, comfort, and style.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From competitive esports athletes to casual weekend warriors,
                we're here to elevate your gaming experience with cutting-edge
                technology and innovative design.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-700 to-black-600 p-8 rounded-2xl transform rotate-3 shadow-2xl">
                <div className="bg-black p-6 rounded-xl transform -rotate-3">
                  <Zap className="w-16 h-16 text-purple-700 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-center text-white mb-2">
                    Game Changing Quality
                  </h3>
                  <p className="text-gray-300 text-center">
                    Premium accessories for premium performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#00ff00]">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5  gap-6 justify-items-center">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-50 h-40 flex flex-col column text-center hover:border-purple-700 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300 group cursor-pointer"
                >
                  <IconComponent className="w-12 h-12 text-purple-700 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-semibold text-left">
                    {product.name}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              <span className="text-purple-700 font-semibold">
                Gaming Mice • Gaming Keyboards • Gaming Monitors • Gaming
                Headphones • Mousepads • Laptop Stands • LED Strips • Gaming
                Consoles • Controllers • Gaming Chairs
              </span>{" "}
              and much more! We stock everything you need to create the perfect
              gaming setup.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 px-4 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#00ff00]">Gaming by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[#00ff00] bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-[#00ff00]" />
                  </div>
                  <div className="text-4xl font-bold text-[#00ff00] mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-16 px-4 mx-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#00ff00]">
            Why Gamers Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-[#00ff00] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300">
              <div className="w-16 h-16 bg-purple-700 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Premium Quality
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We partner with the world's leading gaming brands to bring you
                only the highest quality accessories that pro gamers trust.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-[#00ff00] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300">
              <div className="w-16 h-16 bg-purple-700 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Quick shipping and instant customer support because we know you
                can't wait to get back in the game.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-[#00ff00] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300">
              <div className="w-16 h-16 bg-purple-700 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Gamer Community
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Built by gamers, for gamers. We understand your needs because we
                share your passion for gaming excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-700 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Dominate?
          </h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Join thousands of gamers who've already upgraded their setup with
            our premium accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="bg-black text-[#00ff00] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors duration-300">
                Shop Gaming Gear
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-[#00ff00] transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


