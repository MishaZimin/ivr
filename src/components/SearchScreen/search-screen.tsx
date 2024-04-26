import React, { FC, useState } from "react";
import { ButtonGrid } from "./btn-grid";

import SearchSymbol from "../../assets/search-symbol.png";
import portrait1 from "../../assets/portrait1.png";

import { AISearch } from "../AI-search/ai-search";

export const SearchScreen: FC = () => {
  type IBtn = {
    img: string;
    text: string;
    count: number;
  };

  const buttons: IBtn[] = [
    { img: portrait1, text: "text text text text text ", count: 5 },
    { img: portrait1, text: "text text text", count: 10 },
    { img: portrait1, text: "text text texttext text texttext", count: 10 },
    { img: portrait1, text: "text text", count: 10 },
    { img: portrait1, text: "text text text text", count: 10 },
    { img: portrait1, text: "texttexttext", count: 10 },
    { img: portrait1, text: "text text", count: 10 },
    { img: portrait1, text: "text", count: 10 },
    { img: portrait1, text: "text text text", count: 10 },
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

  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        <div className="w-full h-32 bg-white"></div>
        <div className="absolute flex flex-row justify-between w-[80%] h-16 bg-greyy rounded-full left-[10%] top-24 z-30">
          <input
            className="w-[80%] pl-8 text-3xl rounded-[36px] bg-greyy focus:border-redd"
            placeholder="Найти..."
            value={selectedWord}
            onChange={(event) => setSelectedWord(event.target.value)}
          />

          <div className="flex flex-row w-[20%] justify-end">
            <button
              onClick={handleSearch}
              className="pr-4 transition duration-200 transform hover:scale-105">
              <img className="h-8" src={SearchSymbol} alt="SearchSymbol" />
            </button>

            <button
              onClick={handleAISearch}
              className="flex justify-center m-2 bg-white rounded-full hover:scale-105 w-[40%] transition duration-200 transform">
              <img
                className="h-8 p-1 my-auto"
                src={portrait1}
                alt="SearchSymbol"
              />
            </button>
          </div>
        </div>

        {search ? (
          <div className="absolute ml-[10%] w-[80%] top-24 z-20 rounded-xl">
            <AISearch onWordSelect={handleWordSelection} />
          </div>
        ) : null}

        <div>
          <div className="w-[90%] mx-auto mt-20 h-20 mb-8 flex justify-center font-extrabold text-[45px] ">
            <h1 className={search ? "blur-[2px]" : "blur-none"}>
              По какому вопросу ваше обращение?
            </h1>
          </div>
          <div className={search ? "blur-[2px]" : "blur-none"}>
            <ButtonGrid buttons={buttons}></ButtonGrid>
          </div>
        </div>
      </div>
    </>
  );
};
