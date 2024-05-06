import { FC } from "react";
import { NextButton } from "../../features/next-button/next-button";

export const Welcome: FC = () => {
  return (
    <>
      <div className="flex h-screen font-circe">
        <div className="flex flex-col justify-between w-7/12 mx-auto text-center animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
          <div className="pt-[7%] h-1/2">
            <h1 className="mb-6 text-[70px] font-circe font-extrabold">
              Здесь
            </h1>
            <h2 className="mb-6 text-[50px] font-circe font-normal">
              Ты можешь обратиться на языке жестов
            </h2>
          </div>
          <NextButton />
        </div>
      </div>
    </>
  );
};
