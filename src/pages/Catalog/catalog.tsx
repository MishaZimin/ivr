import React, { FC, useState } from "react";

import SearchSymbol from "../../app/img/search-symbol.png";
import portrait1 from "../../app/img/portrait1.png";

import { AISearch } from "../../widgets/ai/ai-search";
import { CatalogButton } from "../../widgets/catalog-button/catalog-button";

export const SearchScreen: FC = () => {
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
      <div className="flex flex-col bg-white font-circe">
        <div className="flex flex-row mt-20 justify-between w-[80%] h-16 bg-darkgreyy rounded-full left-[10%] z-30 mx-auto">
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
          <div className="absolute ml-[10%] w-[80%] top-24 z-20 rounded-xl">
            <AISearch
              onWordSelect={handleWordSelection}
              onHeader="Покажите ваш запрос"
              onHeaderStyles="text-[50px] text-extrabold mx-auto"
            />
          </div>
        ) : null}

        <div className="flex flex-col mb-12">
          <div className="w-[90%] mx-auto mt-12 h-20 mb-12 flex justify-center font-extrabold text-[45px] font-circe">
            <h1 className={search ? "blur-[2px]" : "blur-none"}>
              По какому вопросу ваше обращение?
            </h1>
          </div>
          <div className={search ? "blur-[2px]" : "blur-none"}>
            <div className="container grid grid-cols-2 gap-8 mx-auto ">
              <CatalogButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};