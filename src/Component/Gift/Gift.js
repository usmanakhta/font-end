import React, { useState } from 'react';
import { FaGift } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Gift() {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate(); // Moved here, outside of handleGiftClick

  const handleGiftClick = () => {
    setIsOpened(!isOpened); // Toggle the gift open/close
  };

  return (
    <div className="h-[88vh] w-full bg-[#0c0c20]">
      <MdOutlineClear
        className='text-white p-3 text-5xl'
        onClick={() => navigate("/home", { state: {} })} // Navigate on click
      />
      <p className='text-white text-3xl text-center py-5 font-semibold'>
        Your Gift
      </p>
      {/* Gift Box */}
      <div
        className={`gift-box ${isOpened ? 'opened' : ''} transition-all duration-500`}
        onClick={handleGiftClick}
      >
        <FaGift className={`text-gray-300 text-8xl m-auto ${isOpened ? 'hidden' : 'block'}`} />
      </div>

      {/* Gift Reveal */}
      {isOpened ? (
        <div className="gift-reveal text-center transition-opacity duration-1000 ease-in">
          <p className="text-yellow-400 text-4xl font-bold mt-8">🎉 Congratulations! 🎉</p>
          <p className="text-white text-2xl mt-4">You've unlocked your special gift!</p>
        </div>
      ) : (
        <div className="gift-reveal text-center transition-opacity duration-1000 ease-in">
          <p className="text-yellow-400 text-4xl font-bold mt-8">🎁 Tap to open your gift! 🎁</p>
        </div>
      )}
   
    </div>
  );
}

export default Gift;
