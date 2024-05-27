import { FC, useState } from "react";
// import sign2_1 from "../../app/img/sign2_1.png";
import portrait1 from "../../app/img/portrait1.png";
import close from "../../app/img/close.png";
import SearchSymbol from "../../app/img/search-symbol.png";
import { IoMdClose } from "react-icons/io";
import { AISearch } from "../ai/ai-search";

export const Search: FC = () => {
  const [search, setSearch] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<string>("");

  const handleAISearch = () => {
    if (!search) setSelectedWord("");
    setSearch(search ? false : true);
  };

  const handleSearch = () => {
    if (search) setSearch(false);
  };

  const handleCleare = () => {
    setSelectedWord("");
  };

  const handleWordSelection = (word: string) => {
    word === "$"
      ? setSelectedWord("")
      : setSelectedWord((prevWord) => prevWord + " " + word);
  };

  return (
    <>
      <div className="z-200 flex flex-row mt-20 justify-between w-[80%] h-16 bg-darkgreyy rounded-full left-[10%] z-30 mx-auto">
        <input
          className="w-[80%] px-8 text-3xl rounded-[36px] bg-darkgreyy focus:border-redd"
          placeholder="Найти..."
          value={selectedWord}
          onChange={(event) => setSelectedWord(event.target.value)}
        />
        <div className="flex flex-row w-[20%] justify-end">
          <button
            onClick={handleCleare}
            className="flex my-auto pr-0 mr-0 justify-end transition duration-200 transform hover:scale-105 w-[35%]">
            <img className="h-6 " src={close} alt="close" />
          </button>
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
            onHeaderStyles="text-[50px] text-normal mx-auto font-circeb"
          />
        </div>
      ) : null}
    </>
  );
};
