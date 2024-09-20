import React, { useEffect } from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pic1 from "../../images/usama4.png";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the animation duration (optional)
      easing: "ease", // Easing option (optional)
      once: true, // Whether animation should happen only once (optional)
    });
  }, []);

  return (
    <>
      <div id="tag" className="h-screen w-full bg-gradient-to-r from-[#5A2D13] to-[#0A0A0A] text-[#E96429]">
        <header className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[80%] bg-[#3D281B]  p-3 rounded-lg border z-50">
          <nav className="flex items-center justify-between w-full m-auto">
            <h1
              data-aos="flip-up"
              className="font-semibold text-3xl hover:text-white"
            >
              Portfolio
            </h1>
            <ul className="flex gap-8 items-center text-lg">
              <li className="hover:text-white">
                <a href="#tag">Home</a>
              </li>
              <li className="hover:text-white">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-white">
                <a href="#service">Services</a>
              </li>
              <li className="hover:text-white">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="hover:text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="flex justify-center pt-[80px]"> {/* Adjust padding to account for the fixed navbar */}
          <div className="h-[60vh] w-[40%] flex flex-col justify-end text-center content">
            <p className="text-2xl" data-aos="fade-up" data-aos-duration="3000">
              Hello
            </p>
            <p className="text-6xl font-semibold" data-aos="zoom-in">
              I am <span className="text-white" data-aos="zoom-in"> Usama Joiya</span>
            </p>
            <p className="text-2xl mt-2" data-aos="fade-up" data-aos-duration="3000">
              Full Stack Developer, App Developer
            </p>
            <div className="flex gap-3 justify-center mt-5" data-aos="flip-left">
              <Link>
                <div className="h-[35px] w-[35px] bg-[#3D281B] flex justify-center items-center rounded-full hover:bg-white">
                  <CiLinkedin className="text-lg" />
                </div>
              </Link>

              <Link>
                <div className="h-[35px] w-[35px] bg-[#3D281B] flex justify-center items-center rounded-full hover:bg-white">
                  <FaGoogle className="text-lg" />
                </div>
              </Link>
              <Link>
                <div className="h-[35px] w-[35px] bg-[#3D281B] flex justify-center items-center rounded-full hover:bg-white">
                  <FaWhatsapp className="text-lg" />
                </div>
              </Link>
              <Link>
                <div  className="h-[35px] w-[35px] bg-[#3D281B] flex justify-center items-center rounded-full hover:bg-white">
                  <FaGithub className="text-lg" />
                </div>
              </Link>
            </div>
          </div>
          <img
            src={pic1}
            alt=""
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="h-[87vh]"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
