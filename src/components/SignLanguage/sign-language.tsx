import { FC } from "react";
import { StendCamera } from "./stend-camera";
import { Search } from "./../UI/search";

export const SignLanguage: FC = () => {
  return (
    <>
      <div className="flex flex-col pb-[100px]">
        <StendCamera />
        <Search />
      </div>
    </>
  );
};
