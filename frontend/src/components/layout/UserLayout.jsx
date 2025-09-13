import React, { useEffect, useState } from 'react';
import Navbar from '../commen/Navbar';
import Footer from '../commen/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [lastScrollY]);

  return (
    <>
      {/* Fixed + Hide-on-Scroll Navbar */}
      <header
        className={` top-0 left-0 right-0 z-50 transition-transform duration-300
          bg-black text-white border-b-4 border-[#00FF00] `}
      >
        <Navbar />
      </header>

      {/* Space for fixed navbar */}
      <main className="">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default UserLayout;
