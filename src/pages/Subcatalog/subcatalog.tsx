import { FC, useState } from "react";

import sign2_1 from "../../app/img/sign2_1.png";
import return1 from "../../app/img/return1.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SignCatalogButton } from "../../components/catalog-button/catalog-button";
import { Search } from "../../components/search/search";
import { BackBtn } from "../../components/btn/back-btn";
import { AutoPlayVideo } from "../../components/sign-video/sign-video";

type IBtn = {
  img: string;
  text: string;
  count: number;
};

export const Subcatalog: FC = () => {
  const navigate = useNavigate();
  const select = useLocation();
  // console.log(select.state);

  const subcatalog = {
    img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
    text: "Консультация по паспорту РФ",
    count: 10,
  };
  const buttons: IBtn[] = [
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Достижение 14 лет",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Достижение 20 лет/40 лет",
      count: 5,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Изменились персональные данные",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Изменение внешности",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Непригодность пастпорта",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Опечатка в паспорте",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Паспорт украден/утерян",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Смена пола",
      count: 10,
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col bg-starlite font-circe">
        <Search />

        <BackBtn
          state={select.state}
          video={subcatalog.img}
          text={subcatalog.text}
        />

        <div className="flex flex-col mb-12 font-circe">
          <div className="w-[90%] mx-auto mt-12 h-20 mb-12 flex justify-center font-extrabold text-[45px] ">
            <h1 className={false ? "blur-[2px]" : "blur-none"}>
              Какая у вас жизненная ситуация?
            </h1>
          </div>
          <div className={false ? "blur-[2px]" : "blur-none"}>
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-8 ">
                <SignCatalogButton
                  route="/discriptionsub"
                  select={select.state}
                  buttons={buttons}
                />

                {/* {buttons.map((button, index) => (
                  <button
                    key={index}
                    onClick={handleDiscriptionSub}
                    className="flex flex-col items-center px-4 pt-4 font-bold text-black transition duration-200 transform rounded-[40px] bg-white hover:scale-[1.025] shadow-xl">
                    <div className="flex flex-col justify-between pb-8 mt-6 ml-4 text-3xl text-left">
                      <p>{button.text}</p>
                    </div>
                    <img
                      src={button.img}
                      alt={button.text}
                      className="w-3/4 my-auto "
                    />
                  </button>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
