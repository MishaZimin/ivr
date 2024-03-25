import { FC } from "react";
import { Link } from "react-router-dom";

export const Welcome: FC = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <h1 className="mb-6 text-2xl text-center">
            Помощь для людей с нарушением слуха
          </h1>
          <Link
            className="px-6 py-4 text-center rounded-md shadow-lg "
            to="/selection">
            начать
          </Link>
        </div>
      </div>
    </>
  );
};
