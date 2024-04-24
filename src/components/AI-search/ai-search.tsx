import React, { useState, useEffect, FC } from "react";

import { useNavigate } from "react-router-dom";

import { AIWebcam } from "../UI/ai-webcam";
import close1 from "../../assets/close1.png";
import history1 from "../../assets/history1.png";

export const AISearch: FC = () => {
  const [wordPairs, setWordPairs] = useState<string[][]>([]);
  const navigate = useNavigate();

  const handleWordPairsChange = (newWordPairs: string[][]) => {
    setWordPairs(newWordPairs);
  };
  const handleHistory = () => {
    console.log("handle history");
  };

  // useEffect(() => {
  //   // const foundGoodbye = wordPairs.some((pair) => pair.includes("до свидание"));

  //   // if (foundGoodbye) {
  //   //   // history.push("/search");
  //   //   navigate("/search");
  //   // }
  // }, [navigate, wordPairs]);

  return (
    <>
      <div className="flex flex-col pt-20 bg-starlite rounded-[36px] pb-10 relative shadow-xl">
        <h1 className="text-[35px] text-center mb-6 text-black opacity-70">
          Покажите ваш запрос
        </h1>
        <div className="z-40 flex flex-wrap gap-2 left-2 top-40 w-[90%] ml-[5%] absolute ">
          {wordPairs.map((pair: any, index: number) => (
            <div key={index} className="flex gap-2 ">
              <button className="flex flex-row px-3 py-1 my-auto transition duration-200 transform bg-green-400 rounded-full opacity-70 hover:scale-105">
                <p className="">{pair[0]}</p>
                <img
                  src={close1}
                  alt="close"
                  className="w-[10px] my-auto ml-2"
                />
              </button>
              <button className="flex flex-row px-3 py-1 my-auto transition duration-200 transform rounded-full bg-redd opacity-70 hover:scale-105">
                <p className="">{pair[1]}</p>
                <img
                  src={close1}
                  alt="close"
                  className="w-[10px] my-auto ml-2"
                />
              </button>
            </div>
          ))}
          {wordPairs.length > 0 ? (
            <button
              className="flex flex-row px-2 py-1 my-auto transition duration-200 transform bg-black rounded-full opacity-70 hover:scale-105"
              onClick={handleHistory}>
              {/* <p>a</p> */}
              <img
                src={history1}
                alt="history1"
                className="w-[20px] my-auto ml-2 mr-1"
              />
            </button>
          ) : null}
        </div>

        <div className="w-1/2 mx-auto rounded-2xl">
          <AIWebcam onWordPairsChange={handleWordPairsChange} />
        </div>
      </div>
    </>
  );
};
