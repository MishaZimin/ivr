import React, { useState, useEffect, FC } from "react";
// import WebSocket from "ws";

import { Link, useNavigate } from "react-router-dom";

// import { Search } from "./../UI/search";
// import { Button } from "../UI/button-link";
// import { StendCamera } from "./../SignLanguage/stend-camera";

import { AIWebcam } from "../UI/ai-webcam";

import Rectangle_3 from "../../assets/Rectangle_3.png";

export const TestWebcam: FC = () => {
  const [wordPairs, setWordPairs] = useState<string[][]>([]);
  const navigate = useNavigate();

  const handleWordPairsChange = (newWordPairs: string[]) => {
    setWordPairs((prevWord) => [...prevWord, newWordPairs]);
  };
  useEffect(() => {
    const foundGoodbye = wordPairs.some((pair) => pair.includes("привет"));

    if (foundGoodbye) {
      // history.push("/search");
      navigate("/search");
    }
  }, [navigate, wordPairs]);

  return (
    <>
      <div className="flex h-full ">
        <div className="flex flex-col pt-[6%] mx-auto">
          <h1 className="text-[35px] text-center mb-10 font-circe font-bold">
            Чтобы начать, покажите в камеру жест "привет"
          </h1>
          <div className="relative flex w-3/4 mx-auto">
            {/* <img
              className="absolute bottom-0 left-0 z-20 w-[38%] rounded-bl-3xl"
              src={Rectangle_3}
              alt="Rectangle_3"
            /> */}
            <div className="z-10 ">
              <AIWebcam onWordPairsChange={handleWordPairsChange} />
            </div>
          </div>
        </div>
        <Link
          className="absolute bg-white text-[25px] font-normal bottom-1/2 right-12 font-circe"
          to="/search">
          next
        </Link>
      </div>
    </>
  );
};
