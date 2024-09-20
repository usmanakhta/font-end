import React from "react";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import project5 from "../../images/project5.png";
import project6 from "../../images/project6.png";
import { FaLink } from "react-icons/fa";

function Portfolio() {
  return (
    <>
      <div id="portfolio" className="">
        <p
          className="text-4xl font-semibold text-[#E96429] text-center mt-5"
          data-aos="zoom-in"
        >
          My Portfolio
        </p>
        <p className="text-xl text-center mt-2" data-aos="fade-down">
          I love what I do. I take great pride in what I do.
        </p>
        <div className="flex items-center w-[79%] mt-5 m-auto gap-5">
          <div className="" data-aos="flip-left">
            <div className="relative transition-transform duration-[800ms] hover:-translate-y-5 ">
              <a href="https://www.clikkle.com/">
                <img
                  src={project1}
                  alt=""
                  className="h-[35vh] w-[100%] rounded-lg absolute "
                />
                <div className="h-[35vh] w-[100%]  bg-[#5A2D13] rounded-lg relative opacity-0 hover:opacity-60 p-3 text-center py-5">
                  <FaLink className="text-white text-4xl m-auto" />
                  <p className="text-white text-lg">
                    Developed A Saas platform offering cloud storage, hosting, e
                    signauutre, and services presentation tool, and secure
                    email.
                  </p>
                  <p></p>
                </div>
              </a>
            </div>
          </div>
          <div className="" data-aos="zoom-in">
            <div className="relative transition-transform duration-[800ms] hover:-translate-y-5 ">
              <a href="https://www.codesthinker.com/">
                <img
                  src={project2}
                  alt=""
                  className="h-[35vh] w-[100%] rounded-lg absolute "
                />
                <div className="h-[35vh] w-[100%]  bg-[#5A2D13] rounded-lg relative opacity-0 hover:opacity-60 p-3 text-center py-5">
                  <FaLink className="text-white text-4xl m-auto" />
                  <p className="text-white text-lg">
                    Developed A Saas platform offering cloud storage, hosting, e
                    signauutre, and services presentation tool, and secure
                    email.
                  </p>
                  <p></p>
                </div>
              </a>
            </div>
          </div>
          <div className="" data-aos="flip-right">
            <div className="relative transition-transform duration-[800ms] hover:-translate-y-5 ">
              <a href="https://mvpdemo.info/">
                <img
                  src={project3}
                  alt=""
                  className="h-[35vh] w-[100%] rounded-lg absolute "
                />
                <div className="h-[35vh] w-[100%]  bg-[#5A2D13] rounded-lg relative opacity-0 hover:opacity-60 p-3 text-center py-5">
                  <FaLink className="text-white text-4xl m-auto" />
                  <p className="text-white text-lg">
                    Developed A Saas platform offering cloud storage, hosting, e
                    signauutre, and services presentation tool, and secure
                    email.
                  </p>
                  <p></p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[79%] mt-5 m-auto gap-5">
          <div className="" data-aos="flip-up">
            <div className="relative transition-transform duration-[800ms] hover:-translate-y-5 ">
              <a href="/">
                <img
                  src={project4}
                  alt=""
                  className="h-[35vh] w-[100%] rounded-lg absolute "
                />
                <div className="h-[35vh] w-[100%]  bg-[#5A2D13] rounded-lg relative opacity-0 hover:opacity-60 p-3 text-center py-5">
                  <FaLink className="text-white text-4xl m-auto" />
                  <p className="text-white text-lg">
                    Developed A Saas platform offering cloud storage, hosting, e
                    signauutre, and services presentation tool, and secure
                    email.
                  </p>
                  <p></p>
                </div>
              </a>
            </div>
          </div>
          <div className="" data-aos="zoom-in">
            <div className="relative transition-transform duration-[800ms] hover:-translate-y-5 ">
              <a href="/">
                <img
                  src={project5}
                  alt=""
                  className="h-[35vh] w-[100%] rounded-lg absolute "
                />
                <div className="h-[35vh] w-[100%]  bg-[#5A2D13] rounded-lg relative opacity-0 hover:opacity-60 p-3 text-center py-5">
                  <FaLink className="text-white text-4xl m-auto" />
                  <p className="text-white text-lg">
                    Developed A Saas platform offering cloud storage, hosting, e
                    signauutre, and services presentation tool, and secure
                    email.
                  </p>
                  <p></p>
                </div>
              </a>
            </div>
          </div>
          <div className="" data-aos="flip-down">
            <div className="relative transition-transform duration-[800ms] hover:-translate-y-5 ">
              <a href="/">
                <img
                  src={project6}
                  alt=""
                  className="h-[35vh] w-[100%] rounded-lg absolute "
                />
                <div className="h-[35vh] w-[100%]  bg-[#5A2D13] rounded-lg relative opacity-0 hover:opacity-60 p-3 text-center py-5">
                  <FaLink className="text-white text-4xl m-auto" />
                  <p className="text-white text-lg">
                    Developed A Saas platform offering cloud storage, hosting, e
                    signauutre, and services presentation tool, and secure
                    email.
                  </p>
                  <p></p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-[75%] mt-8 border-b m-auto"></div>
      </div>
    </>
  );
}

export default Portfolio;
