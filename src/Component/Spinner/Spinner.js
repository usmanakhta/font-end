import React, { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { BsEmojiDizzy } from 'react-icons/bs';
import { CiBitcoin } from 'react-icons/ci';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDailyRewardHook } from '../context/DailyRewardContextProvider';
function Spinner() {
  const navigate = useNavigate();
  // Example initial value of reward
  const { navAmount ,reward} = useDailyRewardHook();
  // Determine the level and color based on reward value
  let levelText = 'Bronze';
  let helloLevel = '1';
  let clrLevelColor = 'bg-yellow-500'; // Default color
  let clrLevelWidth = 'w-[7%]'; // Default width

  if (reward >= 5000000) {
    levelText = 'Winner';
    helloLevel = '11';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[100%]';
  } else if (reward >= 4500000) {
    levelText = 'Heroic';
    helloLevel = '10';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[90%]';
  } else if (reward >= 4000000) {
    levelText = 'Master';
    helloLevel = '9';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[80%]';
  } else if (reward >= 3500000) {
    levelText = 'Ace';
    helloLevel = '8';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[70%]';
  } else if (reward >= 3000000) {
    levelText = 'Diamond';
    helloLevel = '7';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[60%]';
  } else if (reward >= 2500000) {
    levelText = 'Crown';
    helloLevel = '6';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[50%]';
  } else if (reward >= 2000000) {
    levelText = 'Firster';
    helloLevel = '5';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[40%]';
  } else if (reward >= 1500000) {
    levelText = 'Platinium';
    helloLevel = '4';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[30%]';
  } else if (reward >= 1000000) {
    levelText = 'Gold';
    helloLevel = '3';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[20%]';
  } else if (reward >= 500000) {
    levelText = 'Silver';
    helloLevel = '2';
    clrLevelColor = 'bg-yellow-600';
    clrLevelWidth = 'w-[15%]';
  }

  return (
    <>
      <div className='flex '>
        <div
          className='h-auto w-[48%]' // Default background color
          onClick={() => navigate('/level', { state: {} })}
        >
          <div className='flex items-center p-3 ms-2'>
            <p className='text-white font-medium'>{levelText}</p>
            <MdNavigateNext className='text-white text-xl' />
            <p className='text-white ms-12'>
              {helloLevel}
              <span className='text-gray-400'>/11</span>
            </p>
          </div>
          <div className='h-[10px] w-[80%] bg-[#494848] rounded-full mx-auto'>
            <div
              className={`h-[10px] ${clrLevelColor} ${clrLevelWidth} rounded-full`}
            ></div>
          </div>
        </div>
        <div className='h-[7vh] w-[50%] bg-[#494848] p-2 mt-4 rounded-full'>
          <div className='flex items-center justify-evenly'>
            <BsEmojiDizzy className='text-white text-[27px] border-r pe-2' />
            <CiBitcoin className='text-white bg-[#e9a830] ms-1 me-1 rounded-full text-[20px]' />
            <p className='font-medium text-white'>{navAmount}</p>

            <FaCircleInfo className='text-gray-400 text-[30px] border-r pe-2 ms-1' />
            <IoMdSettings className='text-white ms-1 text-[20px]' />
          </div>
        </div>
      </div>

      <div className='h-[7vh] w-[50%]  p-2 mt-4  mx-auto'>
        <div className='flex items-center justify-center gap-2'>
          <CiBitcoin className='text-white bg-[#e9a830] ms-1 me-1 rounded-full text-[20px]' />
          <p className='font-medium text-white'>{reward}</p>
        </div>
      </div>
    </>
  );
}

export default Spinner;
