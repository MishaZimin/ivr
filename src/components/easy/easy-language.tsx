import { FC } from "react";
import { Button } from "../ui/button-link";

export const EasyLanguage: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center mt-72 animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
        <div className="text-center">
          <p>easy language</p>
        </div>
        <div className="mt-16 text-center">
          <Button text="Закончить" to="/" />
        </div>
      </div>
    </>
  );
};
