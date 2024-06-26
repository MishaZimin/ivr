import { FC } from "react";
import { NextButton } from "../../components/next-button/next-button";
import happyWomen from "../../app/img/happyWomen.png";
import Ellipse3 from "../../app/img/Ellipse.png";

export const Welcome: FC = () => {
  return (
    <>
      {/* Сообщение для мобильных устройств */}
      <div className="flex items-center justify-center h-screen font-circe md:hidden">
        <h1 className="text-center text-[20px] font-bold">
          Доступ к сайту с мобильных устройств ограничен. Пожалуйста,
          используйте компьютер или планшет.
        </h1>
      </div>

      {/* Основной контент для устройств, больших чем мобильные */}
      <div className="hidden h-screen md:flex font-circe ">
        <div className="absolute flex flex-col right-4 top-16 w-[50%]">
          <h1 className="mb-6 text-[65px] font-circe font-extrabold z-100 w-[70%] ml-[17%]">
            Здесь
          </h1>
          <h2 className="mb-6 text-[65px] font-circe font-extrabold z-100 leading-none w-[70%] ml-[17%]">
            Ты можешь обратиться на языке жестов
          </h2>
        </div>

        <div className="absolute bottom-0 w-full align-middle">
          <NextButton />
        </div>

        <img
          className="absolute bottom-0 left-0 z-50 h-[90%]"
          src={happyWomen}
          alt="happyWomen"
        />
        <img
          className="absolute bottom-0 left-0 z-0 h-[98%]"
          src={Ellipse3}
          alt="Ellipse3"
        />
      </div>
    </>
  );
};
