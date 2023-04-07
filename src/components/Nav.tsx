import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";

const Nav: React.FC = () => {
  // const toggleName = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <nav className="bg-black h-16 flex justify-center items-center text-white sticky top-0 z-10">
      <div className="flex justify-between h-full z-1 w-full max-w-screen-lg px-4">
        <Link to="/" className="flex items-center text-lg font-bold">
          shaadi.x
        </Link>
        <div className="hidden lg:block">
          <ul className="flex items-center h-full list-none">
            <li className="h-full">
              <Link
                to="matches"
                // smooth={true}
                // duration={500}
                // spy={true}
                // exact={true}
                // offset={-80}
                className="flex items-center h-full px-4"
              >
                Matches
              </Link>
            </li>
            <li className="h-full">
              <Link
                to="discover"
                // smooth={true}
                // duration={500}
                // spy={true}
                // exact={true}
                // offset={-80}
                className="flex items-center h-full px-4"
              >
                Discover
              </Link>
            </li>
            <li className="h-full">
              <Link
                to="contribute"
                // smooth={true}
                // duration={500}
                // spy={true}
                // exact={true}
                // offset={-80}
                className="flex items-center h-full px-4"
              >
                Contribute
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Link to='login' className="hidden lg:block mr-4">
            Sign Up
          </Link>
          <button className="lg:hidden">
            <HiMenu className="text-2xl" />
          </button>
          <Link to='login' className="hidden lg:block ml-4">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
