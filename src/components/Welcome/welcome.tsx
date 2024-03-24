import { FC } from "react";
import { Link } from "react-router-dom";

export const Welcome: FC = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto ">
          <h1 className="mb-6 text-center ">welcome</h1>
          <Link
            className="px-6 py-4 text-black bg-white rounded-md shadow-lg"
            to="/selection">
            начать
          </Link>
        </div>
      </div>
    </>
  );
};
