/* eslint-disable react/prop-types */
import facebook from '/svgs/facebookLogo.svg';
import instagram from '/svgs/instaramLogo.svg';
import linkedIn from '/svgs/linkedInLogo.svg';
import bg from '/images/logo.png';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="foot w-full bg-primary overflow-hidden text-white relative p-[3.5%]"
      style={{
        backgroundImage: `linear-gradient(rgba(124, 148, 85, 0.5), rgba(124, 148, 85, 0.5)), url(${bg})`,

        backgroundPosition: ' center',
        backgroundSize: '45%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* <img
        className="md:w-[47%] w-full"
        style={{
          position: 'absolute',
          opacity: '0.1',
          left: '25%',
          top: '-50%',
          zIndex: '0',
        }}
        src={bg}
        alt=""
      /> */}
      <div className=" flex flex-col items-center justify-center md:pb-[4%]">
        <h1 className=" font-Sofadi_One lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl tracking-[.1em]">HerbaLuxe</h1>
        <div className="mt-6">
          <ul className="z-10 foot font-Nunito flex flex-col justify-between xl:text-xl md:me-0 me-5 md:flex-row md:space-x-5 rtl:space-x-reverse">
            <li>
              <Link
                to='aboutUs'
                smooth={true}
                offset={-70}
                duration={500}
                className="block hover:cursor-pointer  py-2 px-2 hover:font-bold md:bg-transparent md:border-0 "
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
      <div className="flex font-Nunito md:flex-row flex-col-reverse items-center justify-between foot p-[2.7%] pe-0 pb-[1.6%] gap-y-3">
        <p>COPYRIGHT ©2024. ALL RIGHTS RESERVED BY CG Rawand Al-Mahasneh</p>
        <div className="md:flex justify-between w-1/12 hidden">
          <img className="" src={facebook} alt="" />
          <img className="" src={instagram} alt="" />
          <img className="" src={linkedIn} alt="" />
        </div>
        <p>Privacy Policy | Terms and Conditions</p>
        <div className="md:hidden justify-between w-1/5 flex">
          <img className="w-[12%]" src={facebook} alt="" />
          <img className="w-[20%]" src={instagram} alt="" />
          <img className="w-[20%]" src={linkedIn} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
