import { FC } from "react";
import { Search } from "./../UI/search";
import { Button } from "../UI/button-link";

export const TextLanguage: FC = () => {
  return (
    <>
      <div className="animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
        <div className="">
          <div className="pt-[50px] w-1/2 mx-auto">
            {/* <p>text language</p> */}
            <Search />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button text="Закончить" to="/" />
        </div>
      </div>
    </>
  );
};
