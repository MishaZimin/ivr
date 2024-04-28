import React, { useState, useEffect, FC } from "react";
// import WebSocket from "ws";

import { Link, useNavigate } from "react-router-dom";

// import { Search } from "./../UI/search";
// import { Button } from "../UI/button-link";
// import { StendCamera } from "./../SignLanguage/stend-camera";
import { AISearch } from "../AI-search/ai-search";

import { AIWebcam } from "../UI/ai-webcam";

import Rectangle_3 from "../../assets/Rectangle_3.png";

export const TestWebcam: FC = () => {
  const [wordPairs, setWordPairs] = useState<string[][]>([]);
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState<string>("");

  const handleWordSelection = (word: string) => {
    word === "$"
      ? setSelectedWord("")
      : setSelectedWord((prevWord) => prevWord + " " + word);
  };
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
        <div className="flex flex-col pt-[5%] mx-auto">
          <h1 className="text-[35px] text-center mb-10 font-circe font-bold">
            Чтобы начать, покажите в камеру жест "привет"
          </h1>
          <div className="relative flex w-3/4 mx-auto">
            <AIWebcam
              onWordPairsChange={handleWordPairsChange}
              onHeight={720}
              onWidth={1080}
            />
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
