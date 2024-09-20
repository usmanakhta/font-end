import React, { useState } from "react";
import { AiTwotoneDollar } from "react-icons/ai";
import { useDailyRewardHook } from "../context/DailyRewardContextProvider";
import { CiBitcoin } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Daily_reward() {
  const { dailyrewardarraystate, setDailyRewardArrayState, handleReward } =
    useDailyRewardHook();

  const [showcheckcard, setShowCheckCard] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState("");
  const [selectedCardInnerText, setSelectedInnerCardText] = useState("");
  const [selectedCardOuterText, setSelectedOuterCardText] = useState("");
  const [selectedCardOuterIcone, setSelectedOuterCardIcone] = useState("");
  const [selectedCardCoins, setSelectedCardCoins] = useState("");
  const [selectedCardButton, setSelectedCardButton] = useState("");
  const [selectedCardReward, setSelectedCardReward] = useState("");
  const [showCoinAnimation, setShowCoinAnimation] = useState(false);

  const navigate = useNavigate();

  const handleCoinCollect = (coins) => {
    handleReward(coins);
    setShowCoinAnimation(true);
    setTimeout(() => setShowCoinAnimation(false), 1000);
  };

  return (
    <>
      <div className="h-[90vh] w-full bg-[#0c0c1d] fixed overflow-hidden overflow-y-auto">
        <IoIosArrowBack
          className="text-white text-2xl my-2"
          onClick={() => navigate("/home", { state: {} })}
        />
        <div className="w-full h-[100%] flex flex-col text-[#fff]">
          <div className="h-[30%] py-6 flex flex-col gap-10 justify-center items-center">
            <CiBitcoin
              className="text-[50px] bg-[#e9a830] rounded-full"
              style={{
                boxShadow: ` rgba(233, 168, 48, 0.3) 0px 10px 30px 10px,
  rgba(233, 168, 48, 0.3) 0px -10px 30px 10px,
  rgba(233, 168, 48, 0.3) 10px 0px 30px 10px,
  rgba(233, 168, 48, 0.3) -10px 0px 30px 10px,
  rgba(233, 168, 48, 0.3) 0px 0px 30px 10px`,
              }}
            />
            <p className="font-bold text-[26px]">Earn more coins</p>
          </div>

          <div>
            <div className="flex flex-col gap-5">
              {dailyrewardarraystate.map((elem, i) => {
                return (
                  <div
                    className="w-[96%] mx-auto flex flex-col gap-5 items-start"
                    key={i}
                  >
                    <p className="font-semibold text-[16px]">{elem.title}</p>
                    <div className="w-[100%] mx-auto flex flex-col gap-2 items-start">
                      {elem.detail.map((curr) => {
                        return (
                          <>
                            <div
                              className="p-2 w-[96%] mx-auto flex items-center justify-between bg-[#26263a] rounded-2xl"
                              key={curr.id}
                              onClick={() => {
                                setShowCheckCard(!showcheckcard);
                                setSelectedCardId(curr.id);
                                setSelectedInnerCardText(curr.inner_text);
                                setSelectedOuterCardText(curr.outer_text);
                                setSelectedOuterCardIcone(curr.outer_icone);
                                setSelectedCardCoins(curr.coins);
                                setSelectedCardButton(curr.button);
                                setSelectedCardReward(curr.rewards);
                              }}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-[40px]">
                                  {curr.outer_icone}
                                </span>
                                <div className="flex flex-col gap-1">
                                  <p className="text-[15px]">
                                    {curr.outer_text}
                                  </p>
                                  <div className="flex flex-row items-center gap-1">
                                    <CiBitcoin className="text-2xl bg-[#e9a830] rounded-full" />
                                    <p>+{curr.coins}</p>
                                  </div>
                                </div>
                              </div>

                              {curr.id === "dr" ? (
                                <FaCheck className="bg-green-600 rounded-full text-[22px] p-[3px]" />
                              ) : (
                                <IoIosArrowForward
                                  size={24}
                                  onClick={() => {
                                    setShowCheckCard(!showcheckcard);
                                    setSelectedCardId(curr.id);
                                    setSelectedInnerCardText(curr.inner_text);
                                    setSelectedOuterCardText(curr.outer_text);
                                    setSelectedOuterCardIcone(curr.outer_icone);
                                    setSelectedCardCoins(curr.coins);
                                    setSelectedCardButton(curr.button);
                                  }}
                                />
                              )}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {showcheckcard &&
          (selectedCardId === "dr" ? (
            <div className="fixed bottom-0 left-0 w-full h-[60%] text-[#fff] bg-[#0c0c1d] border-t-[6px] rounded-t-3xl border-[#e9a830]">
              <div>
                <ImCross
                  className="text-[#fff] text-[22px] bg-slate-500 p-1 rounded-full absolute  right-3"
                  onClick={() => setShowCheckCard(false)}
                />
              </div>

              <div className="flex flex-col gap-4 items-center w-[100%] h-[100%] justify-center">
                <div className="grid grid-cols-4 gap-2">
                  {selectedCardReward.map((element) => {
                    return (
                      <div
                        className="relative"
                        onClick={() => handleCoinCollect(selectedCardCoins)}
                      >
                        <div
                          className="w-[22vw] py-2 relative flex flex-col justify-center items-center gap-1 bg-[#171725] rounded-lg"
                          onClick={() => handleReward(element.coins)}
                        >
                          <p className="text-[12px]">{element.day}</p>
                          <CiBitcoin className="text-2xl bg-[#e9a830] rounded-full" />
                          <p className="text-[12px]">{element.coins}</p>
                        </div>
                        {showCoinAnimation && (
                          <div className="coin-animation">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="coin"></div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="py-4 w-[95%] text-center rounded-2xl bg-[#26263a]">
                  <a className=" text-[#fff] font-bold">Come back tomorrow</a>
                </div>
              </div>
            </div>
          ) : (
            <div className="fixed pb-[120px] bottom-0 left-0 w-full h-[60%] text-[#fff] bg-[#171725] border-t-[6px] rounded-t-3xl border-[#e9a830]">
              <div>
                <ImCross
                  className="text-[#fff] text-[22px] bg-slate-500 p-1 rounded-full absolute top-3 right-3"
                  onClick={() => setShowCheckCard(false)}
                />
              </div>

              <div className="flex flex-col gap-2 items-center h-[100%] justify-center">
                <span className="text-[60px]">{selectedCardOuterIcone}</span>
                <p className="w-[90%] font-bold text-[25px] text-center">
                  {selectedCardOuterText}
                </p>
                <p className="text-center w-[77%]">{selectedCardInnerText}</p>
                <a href="https://www.linkedin.com/in/imranfarooqqaisrani/">
                  <div className="py-2 px-8 rounded-2xl bg-[#0861F2]">
                    <button className=" text-[#fff] font-bold ">
                      {selectedCardButton}
                    </button>
                  </div>
                </a>
                <div
                  className="flex gap-2"
                  onClick={() => handleReward(100000)}
                >
                  <CiBitcoin className="text-2xl bg-[#e9a830] rounded-full" />
                  <p className="font-bold">+{selectedCardCoins}</p>
                </div>
                <div
                  className="py-4 w-[95%] relative text-center rounded-2xl bg-[#0861F2]"
                  onClick={() => handleCoinCollect(selectedCardCoins)}
                >
                  <a className=" text-[#fff] font-bold">Check</a>
                  {showCoinAnimation && (
                    <div className="coin-animation">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="coin"></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Daily_reward;
