import { FC } from "react";
import { Link } from "react-router-dom";

export const Finish: FC = () => {
  return (
    <>
      <Link
        className="px-6 py-4 text-center transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105"
        to="/">
        Закончить
      </Link>
    </>
  );
};
