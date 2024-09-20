import React from "react";
import { FaGift } from "react-icons/fa";
import { CiBitcoin } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Friend() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[90vh] w-full bg-[#0c0c20]">

      <IoIosArrowBack className="text-white text-[40px] py-2" onClick={()=> navigate("/home", {state:{}})}/>


        <p className="text-white text-2xl font-semibold text-center py-3">
          Invite friends!
        </p>
        <p className="text-gray-300 text-center">
          You and your friend will receive bonouses
        </p>

        <div className="h-[12vh] w-[90%] rounded-xl m-auto bg-[#171725] my-5">
          <div className="flex justify-around items-center">
            <FaGift className="text-gray-500 text-3xl" />
            <div className="div">
              <p className="text-white text-lg font-medium py-2">
                Invite a friend
              </p>
              <div className="flex">
                <CiBitcoin className="text-white text-2xl me-2 bg-[#e9a830] rounded-full" />
                <p className="text-gray-300">
                  <span className="text-[#e9a830] font-medium">+5,000</span> for
                  you and your friend
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[12vh] w-[90%] rounded-xl m-auto bg-[#171725] my-5">
          <div className="flex justify-around items-center">
            <FaGift className="text-gray-500 text-3xl" />
            <div className="div">
              <p className="text-white text-lg font-medium py-2">
                Invite with Telegram Premium
              </p>
              <div className="flex">
                <CiBitcoin className="text-white text-2xl me-2 bg-[#e9a830] rounded-full" />
                <p className="text-gray-300">
                  <span className="text-[#e9a830] font-medium">+5,000</span> for
                  you and your friend
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="text-white text-lg font-medium w-[250px] h-[60px] border rounded-lg hover: bg-[#171725] mt-[180px] ">
            Invite a friend
          </button>
          <MdContentCopy className="text-white text-lg bg-[#171725] border rounded-lg w-[80px] mt-[180px] p-3 h-[60px]" />

        </div>
      </div>
    </>
  );
}

export default Friend;
