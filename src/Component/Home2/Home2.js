import React, { useEffect } from 'react'
import "../Home2/Home2.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pic1 from "../../images/usama4.png";
import AOS from "aos";

function Home2() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Customize the animation duration (optional)
          easing: "ease", // Easing option (optional)
          once: true, // Whether animation should happen only once (optional)
        });
      }, []);
  return (
   <>
   
   <div className="h-screen w-full bg-[#0a0a16]">

   <header className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[80%] bg-[#1f1f25] text-white rounded-b-3xl  p-3 rounded-lg border z-50">
          <nav className="flex items-center justify-between w-full m-auto">
            <h1
              data-aos="flip-up"
              className="font-semibold text-3xl hover:text-white"
            >
              Portfolio
            </h1>
            <ul className="flex gap-8 items-center text-lg">
              <li className="hover:text-white">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-white">
                <a href="/">About</a>
              </li>
              <li className="hover:text-white">
                <a href="/">Services</a>
              </li>
              <li className="hover:text-white">
                <a href="/">Portfolio</a>
              </li>
              <li className="hover:text-white">
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex justify-center pt-[80px]">
        <div className="h-[60vh] w-[40%] flex flex-col justify-end text-center content text-white">
            <p className="text-2xl" data-aos="fade-up" data-aos-duration="3000">
              Hello
            </p>
            <p className="text-6xl font-semibold" data-aos="zoom-in">
              I am <span className="text-[#14143a]" data-aos="zoom-in"> Waseem Malik</span>
            </p>
            <p className="text-2xl mt-2" data-aos="fade-up">
              Full Stack Developer, App Developer
            </p>
            <div className="flex gap-3 justify-center mt-5" data-aos="flip-left">
              <a href='/'>
                <div className="h-[35px] w-[35px] bg-[#3D281B] flex justify-center items-center rounded-full hover:bg-white">
                  <CiLinkedin className="text-lg" />
                </div>
              </a>

              <a href='/'>
                <div className="h-[35px] w-[35px] bg-[#3D281B] flex justify-center items-center rounded-full hover:bg-white">
                  <FaGoogle className="text-lg" />
                </div>
              </a>
              <a href='/'>
                <div className="h-[35px] w-[35px] bg-[#3D281B] flex justify-center items-center rounded-full hover:bg-white">
                  <FaWhatsapp className="text-lg" />
                </div>
              </a>
              <a href='/'>
                <div  className="h-[35px] w-[35px] bg-[#3D281B] flex justify-center items-center rounded-full hover:bg-white">
                  <FaGithub className="text-lg" />
                </div>
              </a>
            </div>
          </div>
          <img
            src={pic1}
            alt=""
            className="h-[87vh]"
          />
          </div>

   </div>
   
   
   </>
  )
}

export default Home2