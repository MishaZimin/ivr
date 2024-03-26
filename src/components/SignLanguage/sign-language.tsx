import { FC } from "react";
import { StendCamera } from "./stend-camera";
import { Search } from "./../UI/search";
import { Finish } from "./../UI/finish-button";

export const SignLanguage: FC = () => {
  return (
    <>
      <div className="flex flex-row pb-[40px]">
        <div className="w-1/2 mt-8 mx-8">
          <StendCamera />
        </div>
        <div className="w-1/2 mt-12 mx-8">
          <Search />
        </div>
      </div>
      <div className="text-center">
        <Finish />
      </div>
    </>
  );
};
