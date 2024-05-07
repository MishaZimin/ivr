import { FC, useState } from "react";

import SearchSymbol from "../../app/img/search-symbol.png";
import portrait1 from "../../app/img/portrait1.png";
import sign2_1 from "../../app/img/sign2_1.png";
import return1 from "../../app/img/return1.png";

import { AISearch } from "../../widgets/ai/ai-search";
import { useNavigate } from "react-router-dom";

type IBtn = {
  img: string;
  text: string;
  count: number;
};

export const Subcatalog: FC = () => {
  const navigate = useNavigate();

  const subcatalog = {
    img: sign2_1,
    text: "Консультация по паспорту РФ",
    count: 10,
  };
  const buttons: IBtn[] = [
    { img: sign2_1, text: "Достижение 14 лет", count: 10 },
    { img: sign2_1, text: "Достижение 14 лет", count: 5 },
    { img: sign2_1, text: "Достижение 14 лет", count: 10 },
    { img: sign2_1, text: "Достижение 14 лет", count: 10 },
    { img: sign2_1, text: "Достижение 14 лет", count: 10 },
    { img: sign2_1, text: "Достижение 14 лет", count: 10 },
    { img: sign2_1, text: "Достижение 14 лет", count: 10 },
    { img: sign2_1, text: "Достижение 14 лет", count: 10 },
    { img: sign2_1, text: "Достижение 14 лет", count: 10 },
  ];

  const [search, setSearch] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<string>("");

  const handleAISearch = () => {
    if (!search) setSelectedWord("");
    setSearch(search ? false : true);
  };

  const handleSearch = () => {
    if (search) setSearch(false);
  };

  const handleWordSelection = (word: string) => {
    word === "$"
      ? setSelectedWord("")
      : setSelectedWord((prevWord) => prevWord + " " + word);
  };

  const handleDiscriptionSub = () => {
    navigate("/discriptionsub");
  };

  const handleCatalog = () => {
    navigate("/search");
  };

  return (
    <>
      <div className="flex flex-col bg-starlite font-circe">
        <div className="flex flex-row mt-20 justify-between w-[80%] h-16 bg-darkgreyy rounded-full left-[10%] z-30 mx-auto font-circe">
          <input
            className="w-[85%] px-8 text-3xl rounded-[36px] bg-darkgreyy focus:border-redd"
            placeholder="Найти..."
            value={selectedWord}
            onChange={(event) => setSelectedWord(event.target.value)}
          />

          <div className="flex flex-row w-[15%] justify-end">
            <button
              onClick={handleSearch}
              className="flex my-auto pr-2 justify-end transition duration-200 transform hover:scale-105 w-[35%]">
              <img className="h-8" src={SearchSymbol} alt="SearchSymbol" />
            </button>

            <button
              onClick={handleAISearch}
              className="flex justify-center m-2 bg-white rounded-full hover:scale-105 transition duration-200 transform w-[50%]">
              <img
                className="h-8 p-1 my-auto"
                src={portrait1}
                alt="SearchSymbol"
              />
            </button>
          </div>
        </div>

        {search ? (
          <div className="absolute ml-[10%] w-[80%] top-24 z-20 rounded-xl font-circe">
            <AISearch
              onWordSelect={handleWordSelection}
              onHeader="Покажите ваш запрос"
              onHeaderStyles="text-[50px] text-extrabold mx-auto"
            />
          </div>
        ) : null}

        <div className={search ? "blur-[2px]" : "blur-none"}>
          <button
            onClick={handleCatalog}
            className="flex flex-row relative w-[90%] mt-16 mx-auto items-center px-4 pt-4 font-bold text-black transition duration-200 transform rounded-[40px] bg-gradient-to-b from-starlite to-white hover:scale-[1.025] shadow-xl ">
            <img
              className="absolute top-14 left-8"
              src={return1}
              alt="return1"
            />
            <img
              src={subcatalog.img}
              alt={subcatalog.text}
              className="w-1/2 pl-40 my-auto"
            />
            <div className="flex flex-col justify-between pb-32 pl-20 pr-24 pt-6  text-[60px] text-left">
              <p>{subcatalog.text}</p>
            </div>
          </button>
        </div>

        <div className="flex flex-col mb-12 font-circe">
          <div className="w-[90%] mx-auto mt-12 h-20 mb-12 flex justify-center font-extrabold text-[45px] ">
            <h1 className={search ? "blur-[2px]" : "blur-none"}>
              Какая у вас жизненная ситуация?
            </h1>
          </div>
          <div className={search ? "blur-[2px]" : "blur-none"}>
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-8 ">
                {buttons.map((button, index) => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};