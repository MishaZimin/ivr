import { FC } from "react";
import { Link } from "react-router-dom";

export const Welcome: FC = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto text-center animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
          <h1 className="mb-6 text-2xl text-center">
            Помощь для людей с нарушением слуха
          </h1>
          <div className="flex justify-center gap-10">
            <Link
              className="px-6 py-4 text-center transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105"
              to="/selection">
              Начать
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
