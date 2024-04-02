import { FC } from "react";
import { Button } from "../UI/button-link";

export const SelectionLanguage: FC = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className="m-auto pb-[50px] animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
          <h1 className="mb-6 text-2xl text-center">
            Выберите способ взаимодействия
          </h1>
          <div className="flex justify-center gap-10">
            <Button text="Ясный язык" to="/easy" />
            <Button text="Жестовый язык" to="/sign" />
            <Button text="Текст" to="/text" />
          </div>
        </div>
      </div>
    </>
  );
};
