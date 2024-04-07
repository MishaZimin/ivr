import { FC } from "react";

import Webcam from "react-webcam";
import { Link } from "react-router-dom";

// import { Search } from "./../UI/search";
// import { Button } from "../UI/button-link";
// import { StendCamera } from "./../SignLanguage/stend-camera";

import Rectangle3 from "../../assets/Rectangle3.png";

export const TestWebcam: FC = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className="flex flex-col pt-[6%] mx-auto">
          <h1 className="text-[35px] text-center mb-10">
            Чтобы начать, покажите в камеру жест “Говорить”
          </h1>
          <div className="relative flex w-3/4 mx-auto">
            <img src={Rectangle3} alt="Rectangle3" />
            <Webcam className="absolute w-1/4 bottom-1.5 left-1.5 "></Webcam>
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
