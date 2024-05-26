import React, { FC } from "react";

import { SignCatalogButton } from "../../components/catalog-button/catalog-button";
import { Search } from "../../components/search/search";
import { useLocation } from "react-router-dom";
import sign2_1 from "../../app/img/sign2_1.png";

type IBtn = {
  img: string;
  text: string;
  count: number;
};

export const SearchScreen: FC = () => {
  const location = useLocation();
  // console.log(location.state);

  const buttons: IBtn[] = [
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Консультация по паспорту РФ",
      count: 5,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/10.1.mp4",
      text: "Консультация по ИНН",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/11.1.mp4",
      text: "Консультация по загранпаспорту",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/12.1.mp4",
      text: "Консультация по водительскому удостоверению",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/13.1.mp4",
      text: "Консультация по регистрационному учету",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/14.1.mp4",
      text: "Консультация по судимости",
      count: 10,
    },
    {
      img: "https://storage.yandexcloud.net/akhidov-ivr/15.1.mp4",
      text: "Консультация по СНИЛС",
      count: 10,
    },
  ];

  return (
    <>
      <div className="flex flex-col bg-white font-circe">
        <Search />

        <div className="flex flex-col mb-12">
          <div className="w-[90%] mx-auto mt-12 h-20 mb-12 flex justify-center font-extrabold text-[45px] font-circe">
            <h1>По какому вопросу ваше обращение?</h1>
          </div>
          <div>
            <div className="container grid grid-cols-2 gap-8 mx-auto ">
              <SignCatalogButton
                route="/subcatalog"
                select={location.state}
                buttons={buttons}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//<div className={search ? "blur-[2px]" : "blur-none"}></div>
