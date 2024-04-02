import { FC } from "react";
import { Button } from "../UI/button-link";

export const Welcome: FC = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto text-center animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
          <h1 className="mb-6 text-2xl text-center">
            Помощь для людей с нарушением слуха
          </h1>
          <div className="flex justify-center gap-10">
            <Button text="Начать" to="/selection" />
          </div>
        </div>
      </div>
    </>
  );
};
