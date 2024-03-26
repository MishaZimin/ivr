import { FC } from "react";
import { Finish } from "./../UI/finish-button";

export const EasyLanguage: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center mt-72">
        <div className="text-center">
          <p>easy language</p>
        </div>
        <div className="text-center mt-16">
          <Finish />
        </div>
      </div>
    </>
  );
};
