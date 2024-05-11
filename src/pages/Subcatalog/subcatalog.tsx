import { FC, useState } from "react";

import SearchSymbol from "../../app/img/search-symbol.png";
import portrait1 from "../../app/img/portrait1.png";
import sign2_1 from "../../app/img/sign2_1.png";
import return1 from "../../app/img/return1.png";
import { useLocation } from "react-router-dom";
import { AISearch } from "../../widgets/ai/ai-search";
import { useNavigate } from "react-router-dom";
import { SignCatalogButton } from "../../widgets/catalog-button/catalog-button";
import { Search } from "../../widgets/search/search";

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
    img: sign2_1,
    text: "Консультация по паспорту РФ",
    count: 10,
  };
  const buttons: IBtn[] = [
    { img: sign2_1, text: "Достижение 14 лет", count: 10 },
    { img: sign2_1, text: "Достижение 20 лет/40 лет", count: 5 },
    { img: sign2_1, text: "Изменились персональные данные", count: 10 },
    { img: sign2_1, text: "Изменение внешности", count: 10 },
    { img: sign2_1, text: "Непригодность пастпорта", count: 10 },
    { img: sign2_1, text: "Опечатка в паспорте", count: 10 },
    { img: sign2_1, text: "Паспорт украден/утерян", count: 10 },
    { img: sign2_1, text: "Смена пола", count: 10 },
    // { img: sign2_1, text: "Достижение 14 лет", count: 10 },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col bg-starlite font-circe">
        <Search />

        <div className={false ? "blur-[2px]" : "blur-none"}>
          <button
            onClick={handleBack}
            style={{ boxShadow: "4px 4px 24px 0px rgba(0, 0, 0, 0.25)" }}
            className="flex flex-row relative w-[90%] mt-16 mx-auto items-center px-4 pt-4 font-bold text-black transition duration-200 transform rounded-[40px] bg-gradient-to-b from-starlite to-white hover:scale-[1.025] shadow-xl ">
            <img
              className="absolute w-8 mr-12 top-14 left-8"
              src={return1}
              alt="return1"
            />

            {select.state === "sign" ? (
              <img
                src={subcatalog.img}
                alt={subcatalog.text}
                className="w-1/2 pl-40 my-auto"
              />
            ) : null}
            <div className="flex flex-col justify-between pb-32 pl-20 pr-24 pt-6  text-[45px] text-left">
              <p>{subcatalog.text}</p>
            </div>
          </button>
        </div>

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
