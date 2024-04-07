import { FC } from "react";

import { StendCamera } from "./stend-camera";
import { Search } from "./../UI/search";
import { Button } from "../UI/button-link";

export const SignLanguage: FC = () => {
  return (
    <>
      <div className="flex flex-row pb-[40px]">
        <div className="w-1/2 mx-8 mt-8 animate-fade-right animate-once animate-duration-500 animate-ease-in-out">
          <StendCamera />
        </div>
        <div className="w-1/2 mx-8 mt-12 animate-fade-left animate-once animate-duration-700 animate-ease-in-out">
          <Search />
        </div>
      </div>
      <div className="mb-12 text-center animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
        <Button text="Закончить" to="/" />
      </div>
    </>
  );
};
