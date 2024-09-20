import React from 'react'
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
    <div id='contact' className="">
    <p className="text-4xl font-semibold text-center text-[#E96429] mt-5" data-aos="zoom-in">
        Contact Info
      </p>
      <div className="flex justify-center items-center mt-5 gap-5">
      <div className="flex flex-col gap-6">
        <div className="relative transition-transform duration-[800ms] hover:-translate-y-5">
      <div className="h-[10vh] w-[100%]  bg-gradient-to-r from-[#0A0A0A] to-[#5A2D13] rounded-lg" data-aos="fade-down">
        <a href="/">
        <div className="flex justify-center items-center py-3 gap-3">
      <MdAddIcCall className='text-3xl text-white'/>
      <p className='text-lg text-white'>03016981096</p>
      </div>
      </a>
      </div>
      </div>
      <div className="relative transition-transform duration-[800ms] hover:-translate-y-5">
      <div className="h-[10vh] w-[100%] ps-2 pe-2 bg-gradient-to-r from-[#0A0A0A] to-[#5A2D13] rounded-lg"  data-aos="fade-right">
        <a href="/">
        <div className="flex justify-center items-center py-3 gap-3">
      <MdEmail className='text-3xl text-white'/>
      <p className='text-lg text-white'>usamajoiya9@gmail.com</p>
      </div>
      </a>
      </div>
      </div>
      <div className="relative transition-transform duration-[800ms] hover:-translate-y-5">
      <div className="h-[10vh] w-[100%]  bg-gradient-to-r from-[#0A0A0A] to-[#5A2D13] rounded-lg">
        <a href="/">
        <div className="flex justify-center items-center py-3 gap-3">
      <FaLocationDot className='text-3xl text-white'/>
      <p className='text-lg text-white'>Bahawalpur, Pakistan</p>
      </div>
      </a>
      </div>
      </div>
      </div>


      <div className="h-[auto] w-[40%] border-l ps-5 rounded-lg">
        <form action="">
<label htmlFor="" className='block text-lg '>Your Name</label>
<input type="text" placeholder='Enter Your Name' className='border rounded-md p-3 w-[80%]' data-aos="fade-left"/>
<label htmlFor="" className='block text-lg'>Your Email</label>
<input type="text" placeholder='Enter Your Email' className='border rounded-md p-3 w-[80%]' data-aos="fade-left" />
<label htmlFor="" className='block text-lg'>Phone</label>
<input type="text" placeholder='Enter Your Phone' className='border rounded-md p-3 w-[80%]' data-aos="fade-left" />
<label htmlFor="" className='block'>Your Message</label>
<textarea name="" id="" className='border rounded-md w-[80%] h-[20vh]' data-aos="fade-left">

</textarea>
<button className="border  h-[50px] w-[120px] ms-2 mt-2 p-1 rounded-lg text-[#E96429] hover:bg-[#E96429] hover:text-white text-lg font-semibold">
          Send
        </button>
</form>

      </div>
      </div>
      <div className="h-[1px] w-[75%] mt-8 border-b m-auto"></div>
      </div>
    </>
  )
}

export default Contact