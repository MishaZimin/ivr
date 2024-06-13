import { useState, FC } from "react";

import { AIWebcam } from "./ai-webcam";

import close1 from "../../app/img/close1.png";
import history1 from "../../app/img/history1.png";

interface AISearchProps {
  onWordSelect: (word: string) => void;
  onHeader: string;
  onHeaderStyles: string;
}

export const AISearch: FC<AISearchProps> = ({
  onWordSelect,
  onHeader,
  onHeaderStyles,
}) => {
  const [search, setSearch] = useState<string[]>([]);

  const handleWordPairsChange = (newsearch: string[]) => {
    setSearch((prevWord) => [...prevWord, newsearch[0], newsearch[1]]);
  };

  const handleHistory = () => {
    setSearch([]);
    onWordSelect("$");
  };

  const handleWord = (word: string) => {
    onWordSelect(word);
  };

  const handleDelete = (index: number) => {
    // const a = search[index].splice(indexWord, 1);
    const newArr = [...search.slice(0, index), ...search.slice(index + 1)];
    setSearch(newArr);
    console.log(index);
  };

  return (
    <>
      <div className=" flex flex-col pt-14 bg-greyy rounded-tr-[17px] rounded-tl-[17px] rounded-br-[36px] rounded-bl-[36px] pb-8 relative shadow-xl font-circe">
        <h1 className={onHeaderStyles}>{onHeader}</h1>
        <div className="flex flex-row">
          <div className="z-40 flex flex-wrap content-start gap-2 pl-8 pr-4 w-[57%]">
            {search.map((word: string, index: number) => (
              <div
                className="flex flex-row gap-0 text-[20px] transition duration-200 transform rounded-full bg-orange hover:scale-105"
                key={index}>
                <button
                  className={` pl-4 py-1 rounded-lb-full  rounded-lt-full  opacity-70 `}
                  onClick={() => handleWord(word)}>
                  <p className="">{word}</p>
                </button>
                <button
                  className="h-full my-auto w-[10px] ml-2 mr-4"
                  onClick={() => handleDelete(index)}>
                  <img src={close1} alt="close" />
                </button>
              </div>
            ))}
            {search.length > 0 ? (
              <button
                className="flex flex-row px-3 py-2 my-auto transition duration-200 transform bg-black rounded-full opacity-70 hover:scale-105"
                onClick={handleHistory}>
                <img
                  src={history1}
                  alt="history1"
                  className="w-[20px] my-auto ml-1 mr-1"
                />
              </button>
            ) : null}
          </div>

          <div className="w-[43%] pr-8 rounded-2xl mx-auto">
            <AIWebcam
              onWordPairsChange={handleWordPairsChange}
              onHeight={720}
              onWidth={720}
            />
          </div>
        </div>
      </div>
    </>
  );
};
