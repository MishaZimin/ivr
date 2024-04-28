import React, { useState, FC } from "react";

// import { useNavigate } from "react-router-dom";

import { AIWebcam } from "../UI/ai-webcam";
// import close1 from "../../assets/close1.png";
import history1 from "../../assets/history1.png";

interface AISearchProps {
  onWordSelect: (word: string) => void;
}

export const AISearch: FC<AISearchProps> = ({ onWordSelect }) => {
  const [wordPairs, setWordPairs] = useState<string[][]>([]);

  const handleWordPairsChange = (newWordPairs: string[]) => {
    console.log("Новые пары слов:", newWordPairs);
    setWordPairs((prevWord) => {
      console.log("Предыдущие пары слов:", prevWord);
      return [...prevWord, newWordPairs];
    });
  };

  const handleHistory = () => {
    console.log("handle history");
    console.log(wordPairs);
    setWordPairs([]);
    console.log(wordPairs);

    onWordSelect("$");
  };

  const handleWord = (word: string) => {
    console.log(word);
    onWordSelect(word);
  };

  return (
    <>
      <div className="flex flex-col pt-20 bg-starlite rounded-[36px] pb-10 relative shadow-xl">
        <h1 className="text-[35px] text-center mb-6 text-black opacity-70 text-[50px]">
          Покажите ваш запрос
        </h1>
        <div className="z-40 flex flex-wrap gap-2 left-2 top-48 w-[90%] ml-[5%] absolute ">
          {wordPairs.map((pair: any, index: number) => (
            <div key={index} className="flex gap-2 text-[20px]">
              <button
                className="flex flex-row px-3 py-1 my-auto transition duration-200 transform bg-green-400 rounded-full opacity-70 hover:scale-105"
                onClick={() => handleWord(pair[0])}>
                <p className="">{pair[0]}</p>
                {/* <button className="w-[10px] my-auto ml-2">
                  <img src={close1} alt="close" />
                </button> */}
              </button>
              <button
                className="flex flex-row px-3 py-1 my-auto transition duration-200 transform rounded-full bg-redd opacity-70 hover:scale-105"
                onClick={() => handleWord(pair[1])}>
                <p className="">{pair[1]}</p>
                {/* <button className="w-[10px] my-auto ml-2">
                  <img src={close1} alt="close" />
                </button> */}
              </button>
            </div>
          ))}
          {wordPairs.length > 0 ? (
            <button
              className="flex flex-row px-3 py-2 my-auto transition duration-200 transform bg-black rounded-full opacity-70 hover:scale-105"
              onClick={handleHistory}>
              <img
                src={history1}
                alt="history1"
                className="w-[20px] my-auto ml-1 mr-1"
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
