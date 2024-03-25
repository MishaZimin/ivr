import { FC } from "react";
import { Link } from "react-router-dom";

export const SelectionLanguage: FC = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className="m-auto pb-[50px] animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
          <h1 className="mb-6 text-2xl text-center">
            Выберите способ взаимодействия
          </h1>
          <div className="flex justify-center gap-10">
            <Link
              to="/easy"
              className="w-auto px-6 py-4 text-black transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105">
              Ясный язык
            </Link>
            <Link
              to="/sign"
              className="w-auto px-6 py-4 text-black transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105">
              Жестовый язык
            </Link>
            <Link
              to="/text"
              className="w-auto px-6 py-4 text-black transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105">
              Текст
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
