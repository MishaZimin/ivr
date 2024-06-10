import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Search } from "../../components/search/search";
import { AdditionalInf } from "../../components/additional-inf/additional-inf";
import { BackBtn } from "../../components/btn/back-btn";
import { AutoPlayVideo } from "../../components/sign-video/sign-video";

type Subcatalog = {
  img: string;
  text: string;
};

export const DiscriptionSubcatalog: FC = () => {
  const header = useLocation();
  const language = localStorage.getItem("language");
  const data = JSON.parse(localStorage.getItem("data") || "[]");

  const [subcatalog, setSubcatalog] = useState<Subcatalog | null>(null);
  const [discriptionVideo, setDiscriptionVideo] = useState<string>("");
  const [discription, setDiscription] = useState<string[]>([]);

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
      return null;
    }
  };

  useEffect(() => {
    const loadData = async () => {
      console.log("search", header.state.search);

      const url =
        language === "sign"
          ? "/get-description?info="
          : "/get-description-sl?info=";

      const data = await fetchData(url + header.state.search);

      if (data) {
        console.log("data: ", data);

        console.log("topic: ", data.topic);
        console.log("question: ", data.question);
        console.log("description: ", data.description_sl);
      }

      const subcatalogData: Subcatalog = {
        img:
          language === "sign"
            ? data.description_video
            : data.description_video_sl,
        text: language === "sign" ? data.question : data.question_sl,
      };

      const discriptionVideoData =
        "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4";

      // const discriptionData = [
      //   "Подать заявление на оформление паспорта подостижению 14 лет можно на следующий день после наступления события.",
      //   "",
      //   "Для этого Вам потребуется:",
      //   "- 2 личные фотографии 3,5 на 4,5 см матовые на белом фоне в цветном или чёрно-беломисполнении",
      //   "",
      //   "- Свидетельство о рождении заявителя;",
      //   "- Документ подтверждающий наличие гражданства РФ;",
      //   "- Документ, подтверждающий регистрацию по месту жительства несовершеннолетнего при наличии",
      //   "- Госпошлина 300 р, оплачивается в МФЦНесовершеннолетний гражданин приходит лично",
      // ];

      function splitString(input: string): string[] {
        return input ? input.split("\n") : [];
      }

      const discriptionData = splitString(
        language === "sign" ? data.description : data.description_sl
      );

      setSubcatalog(subcatalogData);
      setDiscriptionVideo(discriptionVideoData);
      setDiscription(discriptionData);
    };

    loadData();
  }, []);

  return (
    <div className="flex flex-col bg-white font-circe">
      <Search />

      <div className="mb-20 ">
        {subcatalog && (
          <BackBtn video={subcatalog.img} text={subcatalog.text} />
        )}
      </div>

      {language === "sign" && (
        <div className="mx-auto max-w-[65%] mb-12">
          <AutoPlayVideo video={discriptionVideo} />
        </div>
      )}
      <div className="h-[1px] w-[78%] mx-auto bg-black mb-8"></div>
      <div className="mx-auto w-[83%] text-2xl mb-20">
        {discription.map((text, index) => (
          <div key={index}>{text ? <p>{text}</p> : <br />}</div>
        ))}
      </div>
      {}
      <div className="w-full">
        <AdditionalInf />
      </div>
    </div>
  );
};
