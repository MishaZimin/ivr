import { FC, useState } from "react";
// import sign2_1 from "../../app/img/sign2_1.png";
import portrait1 from "../../app/img/portrait1.png";
import close from "../../app/img/close.png";
import SearchSymbol from "../../app/img/search-symbol.png";
import { IoMdClose } from "react-icons/io";
import { AISearch } from "../ai/ai-search";
import { useNavigate } from "react-router-dom";

export const Search: FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<string>("");

  const handleAISearch = () => {
    if (!search) setSelectedWord("");
    setSearch(search ? false : true);
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
      alert("Nothing found by your request");
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

  return (
    <>
      <div className="mb-40">
        <div className=" absolute flex flex-row mt-20 justify-between w-[80%] h-16 bg-darkgreyy rounded-full left-[10%] z-20 mx-auto">
          <input
            className="w-[85%] px-8 text-3xl rounded-[36px] bg-darkgreyy focus:border-redd mr-2"
            placeholder="Найти..."
            value={selectedWord}
            onChange={(event) => setSelectedWord(event.target.value)}
          />
          <div className="flex flex-row w-[15%] justify-end">
            <button
              onClick={handleCleare}
              className="flex my-auto pr-0 mr-0 justify-end transition duration-200 transform hover:scale-105 w-[25%]">
              <img className="h-6 mx-auto" src={close} alt="close" />
            </button>
            <button
              onClick={handleSearch}
              className="flex my-auto pr-0 justify-end transition duration-200 transform hover:scale-105 w-[25%]">
              <img
                className="h-8 mx-auto"
                src={SearchSymbol}
                alt="SearchSymbol"
              />
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
          <div className="absolute ml-[10%] w-[80%] top-24 z-10 rounded-xl">
            <AISearch
              onWordSelect={handleWordSelection}
              onHeader="Покажите ваш запрос"
              onHeaderStyles="text-[50px] text-normal mx-auto font-circeb"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
