import { FC, useState, useEffect } from "react";

import SearchSymbol from "../../app/img/search-symbol.png";
import portrait1 from "../../app/img/portrait1.png";
import sign2_1 from "../../app/img/sign2_1.png";
import return1 from "../../app/img/return1.png";
import { useLocation } from "react-router-dom";
import { AISearch } from "../../components/ai/ai-search";
import { useNavigate } from "react-router-dom";
import { SignCatalogButton } from "../../components/catalog-button/catalog-button";
import { Search } from "../../components/search/search";
import { BackBtn } from "../../components/btn/back-btn";
import { GrayBlock } from "../../components/gray-block/gray-block";
type IBtn = {
  img: string;
  text: string;
};

export const AdditionalCatalog: FC = () => {
  const navigate = useNavigate();

  const header = useLocation();

  const language = localStorage.getItem("language");
  const data = JSON.parse(localStorage.getItem("data") || "[]");
  const [buttons, setButtons] = useState<IBtn[]>([]);

  const getAdditionalSignSections = (
    topic: string,
    data: any
  ):
    | { sections1_additional: string[]; sections1_additional_url: string[] }
    | undefined => {
    const item = data.find((d: { topic: string }) => d.topic === topic);
    if (item) {
      return {
        sections1_additional: item.sections1_additional
          ? item.sections1_additional
          : [""],
        sections1_additional_url: item.sections1_additional_videos
          ? item.sections1_additional_videos
          : [""],
      };
    }
    return undefined;
  };

  const getAdditionalSections = (
    topic: string,
    data: any
  ):
    | { sections1_additional: string[]; sections1_additional_url: string[] }
    | undefined => {
    const topic1 =
      topic === "Консультация по паспорту РФ"
        ? "Консультация по паспорту Российской Федерации"
        : topic;
    const item = data.find((d: { topic: string }) => d.topic === topic1);
    console.log("item", item, data);
    if (item) {
      return {
        sections1_additional: item.sections1_additional
          ? item.sections1_additional
          : [""],
        sections1_additional_url: item.sections1_additional_icons
          ? item.sections1_additional_icons
          : [""],
      };
    }
    return undefined;
  };

  const formatSignButtons = (
    additional: string[],
    videos: string[]
  ): IBtn[] => {
    return additional.map((text: string, index) => ({
      img: videos[index] !== null ? videos[index] : "",
      text: text,
    }));
  };

  const formatButtons = (additional: string[], icons: string[]): IBtn[] => {
    return additional.map((text, index) => ({
      img: icons[index] !== null ? icons[index] : "",
      text: text,
    }));
  };

  useEffect(() => {
    const result =
      language === "sign"
        ? getAdditionalSignSections(header.state.topic, data)
        : getAdditionalSections(header.state.topic, data);

    console.log(result, header.state.topic);
    if (result) {
      const buttons: IBtn[] =
        language === "sign"
          ? formatSignButtons(
              result.sections1_additional,
              result.sections1_additional_url
            )
          : formatButtons(
              result.sections1_additional,
              result.sections1_additional_url
            );
      console.log(header.state.topic + " Дополнительная информация");
      console.log("buttons", buttons);

      if (buttons.length <= 1)
        navigate("/addinf", {
          state: {
            header: "",
            video: null,
            search: header.state.topic + " Дополнительная информация",
            data: data,
            back: 2,
          },
        });

      setButtons(buttons);
    }

    // const buttons: any = data?.buttons;
    // const subcatalog: any = "Дополнительная инф";

    // setHeader(subcatalog);
    // setButtons(buttons);
  }, []);

  return (
    <>
      <div className="flex flex-col bg-white font-circe">
        <Search />

        <div className="relative mb-12 ">
          <GrayBlock />
          <BackBtn video={""} text={"Дополнителтная информация"} />
        </div>

        <div className="flex flex-col mb-12 font-circe">
          {buttons.length > 1 ? (
            <div className="w-[90%] mx-auto mt-12 h-20 mb-12 flex justify-center font-extrabold text-[45px] ">
              <h1>Какая у вас жизненная ситуация?</h1>
            </div>
          ) : null}
          <div className={false ? "blur-[2px]" : "blur-none"}>
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-8 ">
                <SignCatalogButton
                  route="/addinf"
                  buttons={buttons}
                  topic={header.state.topic}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
