import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { CiBitcoin } from "react-icons/ci";
import { useDailyRewardHook } from "../context/DailyRewardContextProvider";
import { ImCross } from "react-icons/im";
import Hamster1 from "../../images/Hamster1.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
function DailyCombo() {
  const {
    reward,
    redeemReward,
    handleRedeem,
    findingRedeemArray,
    matchedElement,
    singleRedeem,
    navAmount,
  } = useDailyRewardHook();
  const [showCard, setShowCard] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openModal = (id) => {
    const findRedeem = redeemReward.find((item) => item.id === id).level;

    if (reward > 1000 && findRedeem > 1) {
      setShowCard(true);
      setSelectedId(id);
    }
  };

  const triggerRedeem = () => {
    setShowCard(false);
    if (selectedId !== null) {
      handleRedeem(selectedId);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="h-[88vh] w-full bg-[#0c0c1d] overflow-hidden overflow-y-auto">
      <IoIosArrowBack className="text-white text-2xl my-2" onClick={()=> navigate("/home", {state:{}})}/>
        <div className="flex flex-col w-full gap-6 ">
          <div className="flex bg-[#26263a] justify-between items-center w-[95%] mx-auto p-1.5 px-2 rounded-lg">
            <p className="text-white font-semibold">Daily combo</p>
            <div className="flex gap-1 text-gray-600">
              <FaRegCircle size={12} />
              <FaRegCircle size={12} />
              <FaRegCircle size={12} />
            </div>
            <div className="flex items-center gap-1 bg-fuchsia-800 p-1.5 rounded-lg">
              <CiBitcoin className="text-[20px] text-[#fff] bg-[#e9a830] rounded-full" />
              <p className="text-[#fff] font-semibold text-[14px]">
                +{navAmount}
              </p>
            </div>
          </div>

          {/* Check if findingRedeemArray has values or is null */}
          {findingRedeemArray === null || findingRedeemArray.length === 0 ? (
            <h2 className="text-white text-center mt-4">Please buy packages</h2>
          ) : (
            <div className="flex gap-1.5 justify-center items-center w-[95%] mx-auto">
              {findingRedeemArray.map((item) => {
                const { id, title, image, price } = item;
                return (
                  <div
                    key={id}
                    className="flex justify-center items-center bg-[#26263a] h-[80px] w-[33%] text-white border-yellow-600 shadowdiv1 rounded-lg border-[2px] border-b-0"
                  >
                    {singleRedeem?.id === id ? (
                      <div className="flex items-center overflow-hidden gap-1">
                        <img
                          src={image}
                          alt={title}
                          className="w-[35px] h-[35px]"
                        />
                        <div>
                          <p className="">{title}</p>
                          <p className="text-sm">Price: {price}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-5xl font-semibold text-yellow-600">
                        ?
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="flex items-center justify-center gap-2">
            <CiBitcoin className="text-[40px] text-[#fff] bg-[#e9a830] rounded-full" />
            <p className="text-white text-[26px] font-bold">+{reward}</p>
          </div>

          <div className="w-[95%] bg-[#26263a] mx-auto rounded-lg flex text-white items-center justify-center py-2">
            <div className="w-[20%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg bg-[#0c0c20]">
              PR&Team
            </div>
            <div className="w-[19.5%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg">
              Markets
            </div>
            <div className="w-[19.5%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg">
              Legal
            </div>
            <div className="w-[19.5%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg">
              Web3
            </div>
            <div className="w-[19.5%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg">
              Specials
            </div>
          </div>
      
          <div className="grid grid-cols-2 gap-2 w-[95%] mx-auto">
            {redeemReward?.map((item) => {
              const { id, title, image, price, level, deductAmount } = item;

              return (
                <div
                  className="rounded-3xl flex flex-col bg-[#26263a] w-[100%]"
                  key={id}
                  onClick={() => openModal(id)}
                >
                  <div className="flex w-[80%] py-2">
                    <img src={image} className="w-[60px] h-[60px]" alt="" />
                    <div className="flex flex-col text-white">
                      <p className="text-[14px]">{title}</p>
                      <div className="flex flex-col">
                        <p className="text-[12px] text-gray-500">
                          Profit per hour
                        </p>
                        <div className="flex items-center gap-1">
                          <CiBitcoin className="text-[16px] bg-[#e9a830] rounded-full" />
                          <p className="text-[12px] font-medium">{price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] border-t-[1px] border-t-slate-600">
                    <div className="w-[80%] text-white flex gap-2 items-center justify-start py-2 px-4">
                      <p className="text-[12px] font-medium ">lvl {level}</p>
                      <div className="flex gap-1 border-l-[1px] border-l-slate-600 pl-2">
                        <CiBitcoin className="text-[22px] bg-[#e9a830] rounded-full" />
                        <p className="text-[12px] font-medium">
                          {deductAmount}k
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {showCard && (
              <div className="fixed bottom-0 left-0 w-full h-[60%] text-[#fff] bg-[#0c0c1d] border-t-2 rounded-t-3xl border-t-[#e9a830]">
                <div>
                  <ImCross
                    className="text-[#fff] text-[22px] bg-slate-500 p-1 rounded-full absolute top-3 right-3"
                    onClick={() => setShowCard(false)}
                  />

                  <img
                    src={Hamster1}
                    alt=""
                    className="h-[100px] w-[100px] m-auto my-2"
                  />
                  <p className="text-2xl text-center">CEO</p>
                  <p className="text-center">
                    Develop your management skills as a company founder.Improve
                    your leadership skills.
                  </p>
                  <p className="text-center text-lg my-2">Profit per hour</p>
                  <div className="flex gap-1 justify-center items-center mb-1">
                    <CiBitcoin className="text-[22px] bg-[#e9a830] rounded-full" />
                    <p>90</p>
                  </div>
                  <button
                    className=" bg-yellow-500 px-6 py-2 rounded-lg text-white font-bold ms-[100px]"
                    onClick={triggerRedeem}
                  >
                    Redeem Selected
                  </button>
                </div>
              </div> 
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyCombo;
