import { FC } from "react";
import { Search } from "./../UI/search";
import { Finish } from "./../UI/finish-button";

export const TextLanguage: FC = () => {
  return (
    <>
      <div className=" ">
        <div className="pt-[50px] w-1/2 mx-auto">
          {/* <p>text language</p> */}
          <Search />
        </div>
      </div>

      <div className="text-center mt-16">
        <Finish />
      </div>
    </>
  );
};
