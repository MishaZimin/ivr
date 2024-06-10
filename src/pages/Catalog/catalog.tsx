import { FC, useEffect, useState } from "react";

import { SignCatalogButton } from "../../components/catalog-button/catalog-button";
import { Search } from "../../components/search/search";
import { useLocation } from "react-router-dom";

type IBtn = {
  img: string;
  text: string;
};

export const SearchScreen: FC = () => {
  const language = localStorage.getItem("language");

  const [buttons, setButtons] = useState<IBtn[]>([]);

  const data = JSON.parse(localStorage.getItem("data") || "[]");

  useEffect(() => {
    console.log("language:", language);
    console.log("data:", data);

    const buttonsData: IBtn[] = data.map(
      language === "sign"
        ? (item: { topic_video: any; topic: any }) => ({
            img: item.topic_video,
            text: item.topic,
          })
        : (item: { topic_icon: any; topic: any }) => ({
            img: item.topic_icon,
            text: item.topic,
          })
    );

    console.log(buttonsData);

    setButtons(buttonsData);
  }, []);

  return (
    <div className="flex flex-col bg-white font-circe">
      <Search />

      <div className="flex flex-col mb-12">
        <div className="w-[90%] mx-auto mt-12 h-20 mb-12 flex justify-center font-normal text-[45px] font-circeb">
          <h1>По какому вопросу ваше обращение?</h1>
        </div>
        <div>
          <div className="container grid grid-cols-2 gap-8 mx-auto">
            <SignCatalogButton route="/subcatalog" buttons={buttons} />
          </div>
        </div>
      </div>
    </div>
  );
};
