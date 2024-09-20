import React, { createContext, useState, useContext } from "react";
import { GrNext } from "react-icons/gr";
import Hamster1 from "../../images/Hamster1.png";
import Hamster2 from "../../images/Hamster2.png";
import Hamster3 from "../../images/Hamster3.png";
import { MdOutlineClear } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Create a context
const LevelContext = createContext();

// Create a provider component
const LevelProvider = ({ children }) => {
  const levels = [
    { img: Hamster1, title: "Bronze", description: "From 0" },
    { img: Hamster2, title: "Silver", description: "From 100" },
    { img: Hamster3, title: "Gold", description: "From 200" },
  ];

  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

  const nextLevel = () => {
    setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levels.length);
  };

  return (
    <LevelContext.Provider
      value={{ level: levels[currentLevelIndex], nextLevel }}
    >
      {children}
    </LevelContext.Provider>
  );
};

// Level Component
function Level() {
  const { level, nextLevel } = useContext(LevelContext);
  const navigate = useNavigate();

  return (
    <div className="h-[583px] w-full bg-[#0c0c20] text-white">
      <MdOutlineClear
        className="text-white text-4xl font-medium ms-3 pt-3"
        onClick={() => navigate("/home", { state: {} })}
      />
      <div className="flex items-center justify-evenly py-6">
        <GrNext
          className="text-gray-300 text-2xl cursor-pointer"
          onClick={nextLevel}
        />
        <div className="h-[25vh] w-[40%] bg-[#171725] rounded-xl shadowdiv flex justify-center items-center">
          <img
            src={level.img}
            alt={level.title}
            className="h-[110px] w-[110px]"
          />
        </div>
        <GrNext
          className="text-gray-300 text-2xl cursor-pointer"
          onClick={nextLevel}
        />
      </div>
      <p className="text-4xl text-center font-semibold">{level.title}</p>
      <p className="text-gray-300 font-medium text-lg text-center py-2">
        {level.description}
      </p>
    </div>
  );
}

// App Component
function App() {
  return (
    <LevelProvider>
      <Level />
    </LevelProvider>
  );
}

export default App;
