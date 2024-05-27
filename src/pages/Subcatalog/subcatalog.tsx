import { FC, useEffect, useState } from "react";

import sign2_1 from "../../app/img/sign2_1.png";
import return1 from "../../app/img/return1.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SignCatalogButton } from "../../components/catalog-button/catalog-button";
import { Search } from "../../components/search/search";
import { BackBtn } from "../../components/btn/back-btn";
import { AutoPlayVideo } from "../../components/sign-video/sign-video";
import { GrayBlock } from "../../components/gray-block/gray-block";

type IBtn = {
  img: string;
  text: string;
  count: number;
};

export const Subcatalog: FC = () => {
  const navigate = useNavigate();
  const select = useLocation();
  const [header, setHeader] = useState<IBtn | null>(null);
  const [buttons, setButtons] = useState<IBtn[]>([]);

  useEffect(() => {
    const subcatalog: IBtn = {
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
        text: "Непригодность паспорта",
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

    setHeader(subcatalog);
    setButtons(buttons);
  }, []);

  return (
    <>
      <div className="flex flex-col bg-white font-circe">
        <Search />

        {/* {header && (
          <BackBtn state={select.state} video={header.img} text={header.text} />
        )} */}

        {/* <div className="z-20 ">
          {header && (
            <BackBtn
              state={select.state}
              video={header.img}
              text={header.text}
            />
          )}
        </div> */}

        {header && (
          <div className="relative mb-12 ">
            {select.state !== "sign" ? <GrayBlock /> : null}

            <BackBtn
              state={select.state}
              video={header.img}
              text={header.text}
            />
          </div>
        )}
        {/* <GrayBlock /> */}
        {/* <div className="absolute z-10 w-full h-40 bg-darkgreyy top-[350px]"></div> */}

        <div className="flex flex-col mb-12 font-circe">
          <div className="w-[90%] mx-auto mt-12 h-20 mb-12 flex font-circeb justify-center font-normal text-[45px] ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
