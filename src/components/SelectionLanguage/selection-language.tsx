import { FC } from "react";
import { Link } from "react-router-dom";

export const SelectionLanguage: FC = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto ">
          <p className="mb-6 text-2xl text-center">
            Выберите способ взаимодействия
          </p>
          <div className="flex gap-10">
            <Link
              to="/easy"
              className="w-auto px-6 py-4 text-black bg-white rounded-md shadow-lg">
              Ясный язык
            </Link>
            <Link
              to="/sign"
              className="w-auto px-6 py-4 text-black bg-white rounded-md shadow-lg">
              Жестовый язык
            </Link>
            <Link
              to="/text"
              className="w-auto px-6 py-4 text-black bg-white rounded-md shadow-lg">
              Текст
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
