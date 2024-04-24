import React, { useState, useEffect, FC } from "react";
// import WebSocket from "ws";

import { Link, useNavigate } from "react-router-dom";

// import { Search } from "./../UI/search";
// import { Button } from "../UI/button-link";
// import { StendCamera } from "./../SignLanguage/stend-camera";

import { AIWebcam } from "../UI/ai-webcam";

import Rectangle3 from "../../assets/Rectangle3.png";

export const TestWebcam: FC = () => {
  const [wordPairs, setWordPairs] = useState<string[][]>([]);
  const navigate = useNavigate();

  const handleWordPairsChange = (newWordPairs: string[][]) => {
    setWordPairs(newWordPairs);
  };

  useEffect(() => {
    const foundGoodbye = wordPairs.some((pair) => pair.includes("до свидание"));

    if (foundGoodbye) {
      // history.push("/search");
      navigate("/search");
    }
  }, [navigate, wordPairs]);

  return (
    <>
      <div className="flex h-full ">
        <div className="flex flex-col pt-[6%] mx-auto">
          <h1 className="text-[35px] text-center mb-10">
            Чтобы начать, покажите в камеру жест "до свидание"
          </h1>
          <div className="relative flex w-3/4 mx-auto">
            <img src={Rectangle3} alt="Rectangle3" />
            <div className="absolute w-1/4 bottom-1.5 left-1.5">
              <AIWebcam onWordPairsChange={handleWordPairsChange} />
            </div>
            {/* <div className="absolute flex flex-row gap-2 left-2 top-2 max-w-3/4">
              {wordPairs.map((pair: any, index: number) => (
                <div key={index} className="flex gap-2">
                  <button>
                    <p className="px-2 py-1 bg-green-400 rounded-full">
                      {pair[0]}
                    </p>
                  </button>
                  <button>
                    <p className="px-2 py-1 bg-green-400 rounded-full">
                      {pair[1]}
                    </p>
                  </button>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        <Link
          className="absolute bg-white text-[25px] font-normal bottom-1/2 right-12"
          to="/search">
          next
        </Link>
      </div>
    </>
  );
};
