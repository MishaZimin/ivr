import { FC } from "react";
import { Link } from "react-router-dom";

export const EasyLanguage: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center mt-72 animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
        <div className="text-center">
          <p>easy language</p>
        </div>
        <div className="mt-16 text-center">
          <Link
            className="px-6 py-4 text-center transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105"
            to="/">
            Закончить
          </Link>
        </div>
      </div>
    </>
  );
};
