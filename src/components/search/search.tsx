import { FC, useState } from "react";
import { AISearch } from "../ai/ai-search";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { PiUserFocus } from "react-icons/pi";

interface SearchProps {
  onSearchUpdate?: (isSearching: boolean) => void;
}

export const Search: FC<SearchProps> = ({ onSearchUpdate }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<string>("");
  const [shake, setShake] = useState<boolean>(false);

  const handleAISearch = () => {
    const newSearchState = !search;
    if (!search) setSelectedWord("");
    setSearch(newSearchState);
    if (onSearchUpdate) {
      onSearchUpdate(newSearchState);
    }
  };

  const handleSearch = async () => {
    if (search) setSearch(false);

    console.log(selectedWord);

    const fetchData = async (url: string) => {
      try {
        const response = await fetch("https://pincode-dev.ru/ivr-unt" + url, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`err: ${response.status}`);
        }
        const result = await response.json();
        return result;
      } catch (err) {
        console.log("err:", err);
        return "";
      }
    };

    const response = await fetchData("/search?info=" + selectedWord);
    console.log("--selectedWord--", selectedWord);

    if (!response.error) {
      console.log("---", response.error);
      const searchData = response.rsl.topic + " " + response.rsl.question;

      console.log("---", searchData);

      navigate("/discriptionsub", {
        state: {
          header: "header",
          video: "video",
          search: searchData,
        },
      });
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      // alert("Nothing found by your request");
    }
  };

  const handleCleare = () => {
    setSelectedWord("");
  };

  const handleWordSelection = (word: string) => {
    word === "$"
      ? setSelectedWord("")
      : setSelectedWord((prevWord) => prevWord + " " + word);
  };

  // Вызов метода обратного вызова при изменении selectedWord
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedWord(event.target.value);
  };

  return (
    <>
      <div className="mb-40">
        <div
          className={`absolute flex flex-row mt-20 justify-between w-[80%] h-16 bg-darkgreyy rounded-full left-[10%] z-20 mx-auto ${
            shake ? "animate-shake" : ""
          }`}>
          <input
            className="w-full px-8 text-3xl rounded-[36px] bg-darkgreyy focus:border-redd mr-2"
            placeholder="Найти..."
            value={selectedWord}
            onChange={handleInputChange} // Обновление input и вызов метода обратного вызова
          />
          <div className="flex flex-row w-[18%] justify-end">
            {selectedWord ? (
              <button
                onClick={handleCleare}
                className="flex my-auto pr-0 mr-0 justify-end transition duration-200 transform hover:scale-105 w-[25%]">
                <IoCloseOutline className="h-[50px] w-[50px] opacity-20 mx-auto" />
              </button>
            ) : (
              <div className="w-[50px]"></div>
            )}

            <button
              onClick={handleSearch}
              className="flex justify-end pr-0 my-auto transition duration-200 transform hover:scale-105">
              <IoSearchOutline className="h-[43px] w-[43px] opacity-20 mx-auto" />
            </button>

            <button
              onClick={handleAISearch}
              className="flex  mr-[9px] justify-center m-2 bg-white rounded-full hover:scale-105 transition duration-200 transform w-[80px]">
              <PiUserFocus className="my-auto h-[35px] w-[35px]" />
            </button>
          </div>
        </div>
        {search ? (
          <div className="absolute ml-[10%] w-[80%] top-24 z-10 rounded-xl">
            <AISearch
              onWordSelect={handleWordSelection}
              onHeader="Покажите ваш запрос"
              onHeaderStyles="text-[50px] mb-0 text-normal mx-auto font-circeb"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
