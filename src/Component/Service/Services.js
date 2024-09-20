import React from "react";
import { FaConnectdevelop } from "react-icons/fa6";

function Services() {
  return (
    <>
    <div id="service" className="">
      <p
        className="text-4xl font-semibold text-[#E96429] text-center mt-5"
        data-aos="zoom-in"
      >
        What I'm Doing
      </p>
      <p className="text-xl text-center mt-2" data-aos="fade-down">
        I love what I do. I take great pride in what I do.
      </p>

      <div className="flex justify-center gap-8 mt-5">
        <div className="relative transition-transform duration-[800ms] hover:-translate-y-5 h-[70vh] w-[25%]">
          <div
            className="h-[70vh] w-[100%] rounded-xl bg-gradient-to-r from-[#0A0A0A] to-[#5A2D13] py-8 p-3 text-white text-center relative transition-transform duration-[800ms] hover:-translate-y-5"
            data-aos="flip-left"
          >
            <FaConnectdevelop className="text-5xl m-auto " />
            <p className="text-2xl font-semibold mt-3 mb-3  text-[#E96429]">
              Full Stack Developer
            </p>
            <p className="text-gray-300">
              "Bringing together frontend and backend technologies, I offer
              comprehensive full-stack development services. Using Node.js,
              Express.js, and MongoDB, I create a solid foundation for your web
              application's functionality and data management needs. Meanwhile,
              on the frontend, I design intuitive user interfaces tailored to
              your project's specifications, ensuring a seamless and visually
              appealing user experience from start to finish."
            </p>
          </div>
        </div>
        <div className="relative transition-transform duration-[800ms] hover:-translate-y-5 h-[70vh] w-[25%]">
          <div
            className="h-[70vh] w-[100%] rounded-xl bg-gradient-to-r from-[#5A2D13] to-[#0A0A0A] py-8 p-3 text-white text-center relative transition-transform duration-[800ms] hover:-translate-y-5"
            data-aos="zoom-in"
          >
            <FaConnectdevelop className="text-5xl m-auto " />
            <p className="text-2xl font-semibold mt-3 mb-3  text-[#E96429]">
              Front End Developer
            </p>
            <p className="text-gray-300">
              "I specialize in crafting engaging and responsive user interfaces
              using custom CSS, Sass, Tailwind CSS, or Bootstrap, depending on
              project requirements. With a keen eye for design and attention to
              detail, I ensure that the frontend of your web application is
              visually appealing and optimized for usability across various
              devices and screen sizes."
            </p>
          </div>
        </div>
        <div className="relative transition-transform duration-[800ms] hover:-translate-y-5 h-[70vh] w-[25%]">
          <div
            className="h-[70vh] w-[100%] rounded-xl bg-gradient-to-r from-[#0A0A0A] to-[#5A2D13] py-8 p-3 text-white text-center relative transition-transform duration-[800ms] hover:-translate-y-5"
            data-aos="flip-right"
          >
            <FaConnectdevelop className="text-5xl m-auto " />
            <p className="text-2xl font-semibold mt-3 mb-3  text-[#E96429]">
              Back End Developer
            </p>
            <p className="text-gray-300">
              "On the backend, I leverage the power of Node.js and Express.js to
              build robust and scalable server-side applications. With MongoDB
              as the database management system, I ensure efficient data storage
              and retrieval. Additionally, I implement authentication and
              authorization systems to safeguard your application's data and
              resources, providing peace of mind for both you and your users."
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-[75%] mt-8 border-b m-auto"></div>
      </div>
    </>
  );
}

export default Services;
