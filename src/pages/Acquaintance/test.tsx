import { useState, useEffect, FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AIWebcam } from "../../features/next-button/ai/ai-webcam";

export const TestWebcam: FC = () => {
  const [wordPairs, setWordPairs] = useState<string[][]>([]);
  const navigate = useNavigate();

  const handleWordPairsChange = (newWordPairs: string[]) => {
    setWordPairs((prevWord) => [...prevWord, newWordPairs]);
  };

  useEffect(() => {
    const word = "дом";
    const foundWord = wordPairs.some((pair) => pair.includes(word));

    if (foundWord) navigate("/successfully");
  }, [navigate, wordPairs]);

  return (
    <>
      <div className="flex h-full ">
        <div className="flex flex-col pt-[5%] mx-auto">
          <h1 className="text-[35px] text-center mb-10 font-circe font-bold">
            Чтобы начать, покажите в камеру жест "Дом"
          </h1>
          <div className="relative flex w-3/4 mx-auto">
            <AIWebcam
              onWordPairsChange={handleWordPairsChange}
              onHeight={720}
              onWidth={1080}
            />
          </div>
        </div>
        <Link
          className="absolute bg-white text-[25px] font-normal bottom-1/2 right-12 font-circe"
          to="/successfully">
          next
        </Link>
      </div>
    </>
  );
};
