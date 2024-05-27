import { useState, useEffect, FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AIWebcam } from "../../components/ai/ai-webcam";
import { Search } from "../../components/search/search";

import { AISearch } from "../../components/ai/ai-search";

export const TestWebcam: FC = () => {
  const navigate = useNavigate();

  const handleWordSelection = (word: string) => {
    const wordNext = "привет";
    if (word === wordNext) navigate("/successfully");
  };

  return (
    <>
      <div className="flex h-screen ">
        <div className="flex flex-col w-[70%] pb-8 mx-auto my-auto">
          <AISearch
            onWordSelect={handleWordSelection}
            onHeader="Чтобы начать, покажите в камеру жест Привет"
            onHeaderStyles="text-[35px] font-light mx-auto font-circeb mb-8"
          />
        </div>
        <Link
          className="absolute bg-white text-[25px] font-normal bottom-1/2 right-12 font-circe"
          to="/successfully">
          next
        </Link>
      </div>
    </>
  );
};
