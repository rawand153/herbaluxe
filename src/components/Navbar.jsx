/* eslint-disable react/prop-types */
import { useState } from 'react';
import logo from '/images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-[#F9F5F1] text-secondary fixed w-full z-20 top-0 start-0 border-b border-gray-200 drop-shadow-md">
      <div className="flex flex-wrap justify-between items-center p-[1%] px-[5%]  ">
        <img src={logo} className=" lg:h-16 md:h-8 h-5" alt="Flowbite Logo" />
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            {isOpen ? (
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 1h11M3 7h11M3 13h11"
              />
            )}
          </svg>
        </button>
        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="navLinks font-Nunito text-xl flex flex-col md:p-0 md:flex-row md:space-x-5 rtl:space-x-reverse">
            <li>

              <Link
                to='aboutUs'
                smooth={true}
                offset={-70}
                duration={500}
                className="block hover:cursor-pointer  py-2 px-2 hover:font-bold md:hover:bg-transparent md:border-0 "
              >
                About Us
              </Link>

            </li>
            <li>
              <Link
                to="story"
                smooth={true}
                duration={500}
                offset={-70}
                className="block hover:cursor-pointer py-2 px-2 hover:font-bold md:hover:bg-transparent md:border-0"
              >
                Story
              </Link>
            </li>
            <li>
              <Link
                to="whyUs"
                smooth={true}
                duration={500}
                offset={-70}
                className="block hover:cursor-pointer  py-2 px-2 hover:font-bold md:hover:bg-transparent md:border-0 "

              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="ingredients"
                smooth={true}
                duration={500}
                offset={-70}
                className="block hover:cursor-pointer  py-2 px-2 hover:font-bold md:hover:bg-transparent md:border-0 "

              >
                Ingredients
              </Link>
            </li>
            <li>
              <Link
                to="commitment"
                smooth={true}
                duration={500}
                offset={-70}
                className="block hover:cursor-pointer  py-2 px-2 hover:font-bold md:hover:bg-transparent md:border-0 "

              >
                Commitment
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
