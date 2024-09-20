import React, { useRef, useState } from "react";
import "../Wheel/Wheel.css";
import { useDailyRewardHook } from "../context/DailyRewardContextProvider";

function Wheel() {
  const wheelRef = useRef(null);
  const innerRef = useRef(null);
  const [value1, setValue1] = useState(Math.ceil(Math.random() * -3600));
  const [value2, setValue2] = useState(Math.ceil(Math.random() * 3600));
  const [totalReward, setTotalReward] = useState(0); // State to track total reward
  
  const { handleReward } = useDailyRewardHook();

  const handleSpin = () => {
    const spinAmount1 = Math.ceil(Math.random() * 3600);
    const spinAmount2 = Math.ceil(Math.random() * 3600);
    
    const newValue1 = value1 + spinAmount1;
    const newValue2 = value2 + spinAmount2;

    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 4s ease-out";
      wheelRef.current.style.transform = `rotate(${newValue1}deg)`;
    }
    if (innerRef.current) {
      innerRef.current.style.transition = "transform 4s ease-out";
      innerRef.current.style.transform = `rotate(${newValue2}deg)`;
    }

    setTimeout(() => {
      const rewardCoins = calculateReward(newValue1);  // Determine the coins based on where it stops
      const innerWheelReward = calculateInnerReward(newValue2); // Optional inner wheel reward logic

      setTotalReward((prevTotal) => prevTotal + rewardCoins); // Update total reward
      handleReward(rewardCoins); // Call handleReward to update the reward state

      console.log(`Stopped at ${rewardCoins} coins`);
    }, 4000); // Match the timeout duration with the CSS transition
  };

  // Calculate reward based on outer wheel stop
  const calculateReward = (rotationValue) => {
    const normalizedValue = (rotationValue % 360 + 360) % 360; // Normalize rotation value
    if (normalizedValue >= 0 && normalizedValue < 45) return 50000;
    if (normalizedValue >= 45 && normalizedValue < 90) return 100000;
    if (normalizedValue >= 90 && normalizedValue < 135) return 200000;
    if (normalizedValue >= 135 && normalizedValue < 180) return 300000;
    if (normalizedValue >= 180 && normalizedValue < 225) return 400000;
    if (normalizedValue >= 225 && normalizedValue < 270) return 500000;
    if (normalizedValue >= 270 && normalizedValue < 315) return 600000;
    if (normalizedValue >= 315 && normalizedValue < 360) return 700000;
    return 0; // Default if no segment matches
  };

  // Calculate reward for inner wheel (if needed)
  const calculateInnerReward = (rotationValue) => {
    const normalizedValue = (rotationValue % 360 + 360) % 360; 
    // Example inner rewards (modify as needed)
    if (normalizedValue >= 0 && normalizedValue < 45) return 1;
    if (normalizedValue >= 45 && normalizedValue < 90) return 3;
    if (normalizedValue >= 90 && normalizedValue < 135) return 5;
    if (normalizedValue >= 135 && normalizedValue < 180) return 8;
    if (normalizedValue >= 180 && normalizedValue < 225) return 9;
    if (normalizedValue >= 225 && normalizedValue < 270) return 2;
    if (normalizedValue >= 270 && normalizedValue < 315) return 7;
    if (normalizedValue >= 315 && normalizedValue < 360) return 8;
    return 0;
  };

  return (
    <>
      <div className="h-[42vh] w-full my-5 flex justify-center items-center">
        <div className="container">
          <div className="spinbtn" onClick={handleSpin}>
            Spin
          </div>
          <div className="wheel" ref={wheelRef}>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <div className="number">
              <b style={{ "--i": 0 }}>50000</b>
              <b style={{ "--i": 1 }}>100000</b>
              <b style={{ "--i": 2 }}>200000</b>
              <b style={{ "--i": 3 }}>300000</b>
              <b style={{ "--i": 4 }}>400000</b>
              <b style={{ "--i": 5 }}>500000</b>
              <b style={{ "--i": 6 }}>600000</b>
              <b style={{ "--i": 7 }}>700000</b>
            </div>
          </div>
          <div className="wheel inner" ref={innerRef}>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <div className="number">
              <b style={{ "--i": 0 }}>5</b>
              <b style={{ "--i": 1 }}>3</b>
              <b style={{ "--i": 2 }}>8</b>
              <b style={{ "--i": 3 }}>9</b>
              <b style={{ "--i": 4 }}>5</b>
              <b style={{ "--i": 5 }}>2</b>
              <b style={{ "--i": 6 }}>1</b>
              <b style={{ "--i": 7 }}>8</b>
            </div>
          </div>
          <div className="reward-display">
            <p>Total Reward: {totalReward}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wheel;
