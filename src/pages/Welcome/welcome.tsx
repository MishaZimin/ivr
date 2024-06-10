import { FC } from "react";
import { NextButton } from "../../components/next-button/next-button";
import happyWomen from "../../app/img/happyWomen.png";
import Ellipse3 from "../../app/img/Ellipse.png";

export const Welcome: FC = () => {
  return (
    <>
      <div className="flex h-screen font-circe ">
        {/* <div className="z-40 flex flex-col justify-between w-7/12 text-center align-bottom ml-5/12 animate-fade-up animate-once animate-duration-700 animate-ease-in-out ">
          <div className="pt-[7%] h-1/2 text-start">
            <h1 className="mb-6 text-[70px] font-circe font-extrabold w-[60%] ml-[40%]">
              Здесь
            </h1>
            <h2 className="mb-6 text-[50px] font-circe font-extrabold w-[60%] ml-[40%] ">
              Ты можешь обратиться на языке жестов
            </h2>
          </div>
        </div> */}

        <div className="absolute flex flex-col right-4 top-16 w-[50%]">
          <h1 className="mb-6 text-[65px] font-circe font-extrabold z-80 w-[70%] ml-[17%]">
            Здесь
          </h1>
          <h2 className="mb-6 text-[65px] font-circe font-extrabold z-80 leading-none w-[70%] ml-[17%]">
            Ты можешь обратиться на языке жестов
          </h2>
        </div>

        <div className="absolute bottom-0 w-full align-middle">
          <NextButton />
        </div>

        <img
          className="absolute bottom-0 left-0 z-50 h-[90%]"
          src={happyWomen}
          alt="happyWomen"
        />
        <img
          className="absolute bottom-0 left-0 z-0 h-[98%]"
          src={Ellipse3}
          alt="Ellipse3"
        />
      </div>
    </>
  );
};
