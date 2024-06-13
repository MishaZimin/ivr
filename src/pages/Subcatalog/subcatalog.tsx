import { FC, useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SignCatalogButton } from "../../components/catalog-button/catalog-button";
import { Search } from "../../components/search/search";
import { BackBtn } from "../../components/btn/back-btn";
import { GrayBlock } from "../../components/gray-block/gray-block";

type IBtn = {
  img: string;
  text: string;
};

export const Subcatalog: FC = () => {
  const navigate = useNavigate();
  const topic = useLocation();

  const language = localStorage.getItem("language");

  const [header, setHeader] = useState<IBtn | null>(null);
  const [buttons, setButtons] = useState<IBtn[]>([]);

  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearchUpdate = (searchState: boolean) => {
    setIsSearching(searchState);
    console.log("Search state updated:", searchState);
  };

  const data = JSON.parse(localStorage.getItem("data") || "[]");

  const createSections = (
    topic: string
  ): { subcatalog: IBtn; buttons: IBtn[] } | null => {
    const selectedTopic = data.find(
      (item: { topic: string }) => item.topic === topic
    );
    if (!selectedTopic) return null;

    const subcatalog: IBtn = {
      img:
        language === "sign"
          ? selectedTopic.topic_video || "default_image_url"
          : selectedTopic.topic_icon || "default_image_url",
      text: selectedTopic.topic,
    };

    const buttons: IBtn[] = selectedTopic.sections1.map(
      (section: any, index: string | number) =>
        language === "sign"
          ? {
              img:
                selectedTopic.sections1_videos &&
                selectedTopic.sections1_videos[index]
                  ? selectedTopic.sections1_videos[index]
                  : "default_image_url",
              text: section,
            }
          : {
              img:
                selectedTopic.sections1_icons &&
                selectedTopic.sections1_icons[index]
                  ? selectedTopic.sections1_icons[index]
                  : "default_image_url",
              text: section,
            }
    );

    return { subcatalog, buttons };
  };

  useEffect(() => {
    const data = createSections(topic.state.header);

    const buttons: any = data?.buttons;
    const subcatalog: any = data?.subcatalog;

    setHeader(subcatalog);
    setButtons(buttons);
  }, []);

  return (
    <>
      <div className="flex flex-col bg-white font-circe">
        <Search onSearchUpdate={handleSearchUpdate} />

        {header && (
          <div className={isSearching ? "blur-[2px]" : "blur-none"}>
            <div className="relative mb-12 ">
              {language !== "sign" ? <GrayBlock /> : null}

              <BackBtn video={header.img} text={header.text} />
            </div>
          </div>
        )}

        <div className="flex flex-col mb-12 font-circe">
          <div className="w-[90%] mx-auto mt-12 h-20 mb-12 flex font-circeb justify-center font-normal text-[45px] ">
            <h1 className={isSearching ? "blur-[2px]" : "blur-none"}>
              Какая у вас жизненная ситуация?
            </h1>
          </div>
          <div className={isSearching ? "blur-[2px]" : "blur-none"}>
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-8 ">
                <SignCatalogButton
                  route="/discriptionsub"
                  buttons={buttons}
                  topic={header?.text}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
