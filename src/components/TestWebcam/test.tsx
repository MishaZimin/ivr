import React, { FC } from "react";
// import WebSocket from "ws";

import { Link } from "react-router-dom";

// import { Search } from "./../UI/search";
// import { Button } from "../UI/button-link";
// import { StendCamera } from "./../SignLanguage/stend-camera";

import { AIWebcam } from "../UI/aiwebcam";

import Rectangle3 from "../../assets/Rectangle3.png";

export const TestWebcam: FC = () => {
  return (
    <>
      <div className="flex h-full ">
        <div className="flex flex-col pt-[6%] mx-auto">
          <h1 className="text-[35px] text-center mb-10">
            Чтобы начать, покажите в камеру жест “Говорить”
          </h1>
          <div className="relative flex w-3/4 mx-auto">
            <img src={Rectangle3} alt="Rectangle3" />
            <AIWebcam />
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
