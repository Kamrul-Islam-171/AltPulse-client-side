import React, { useState, useEffect } from 'react';

const NavBar2 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Change background color after scrolling past 100vh
      if (position > window.innerHeight) {
        setNavbarBackground('red');
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-10" style={{ backgroundColor: navbarBackground }}>
      {/* Navbar content */}

      <p>Home</p>
    </nav>
  );
};

export default NavBar2;