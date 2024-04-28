import React, { useState, FC } from "react";

// import { useNavigate } from "react-router-dom";

import { AIWebcam } from "../UI/ai-webcam";
import close1 from "../../assets/close1.png";
import history1 from "../../assets/history1.png";

interface AISearchProps {
  onWordSelect: (word: string) => void;
  onHeader: string;
  onHeaderStyles: string;
}

export const AISearch: FC<AISearchProps> = ({
  onWordSelect,
  onHeader,
  onHeaderStyles,
}) => {
  const [wordPairs, setWordPairs] = useState<string[][]>([]);

  const handleWordPairsChange = (newWordPairs: string[]) => {
    setWordPairs((prevWord) => [...prevWord, newWordPairs]);
  };

  const handleHistory = () => {
    setWordPairs([]);
    onWordSelect("$");
  };

  const handleWord = (word: string) => {
    onWordSelect(word);
  };

  return (
    <>
      <div className="flex flex-col pt-14 bg-greyy rounded-tr-[17px] rounded-tl-[17px] rounded-br-[36px] rounded-bl-[36px] pb-8 relative shadow-xl font-circe">
        <h1 className={onHeaderStyles}>{onHeader}</h1>
        <div className="flex flex-row">
          <div className="z-40 flex flex-wrap content-start gap-2 pl-8 pr-4 w-[55%]">
            {wordPairs.map((pair: any, index: number) => (
              <div key={index} className="flex gap-2 text-[20px]">
                <button
                  className="flex flex-row px-3 py-1 my-auto transition duration-200 transform rounded-full bg-orange opacity-70 hover:scale-105"
                  onClick={() => handleWord(pair[0])}>
                  <p className="">{pair[0]}</p>
                  <button className="w-[10px] my-auto ml-2">
                    <img src={close1} alt="close" />
                  </button>
                </button>
                <button
                  className="flex flex-row px-3 py-1 my-auto transition duration-200 transform bg-red-300 rounded-full opacity-70 hover:scale-105"
                  onClick={() => handleWord(pair[1])}>
                  <p className="">{pair[1]}</p>
                  <button className="w-[10px] my-auto ml-2">
                    <img src={close1} alt="close" />
                  </button>
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

          <div className="w-[45%] pr-8 rounded-2xl">
            <AIWebcam
              onWordPairsChange={handleWordPairsChange}
              onHeight={720}
              onWidth={720}
            />
          </div>
        </div>
      </div>
    </>
  );
};
