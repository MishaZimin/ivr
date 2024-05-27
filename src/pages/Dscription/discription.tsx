import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Search } from "../../components/search/search";
import { AdditionalInf } from "../../components/additional-inf/additional-inf";
import { BackBtn } from "../../components/btn/back-btn";
import { AutoPlayVideo } from "../../components/sign-video/sign-video";

type Subcatalog = {
  img: string;
  text: string;
  count: number;
};

export const DiscriptionSubcatalog: FC = () => {
  const location = useLocation();
  const [subcatalog, setSubcatalog] = useState<Subcatalog | null>(null);
  const [discriptionVideo, setDiscriptionVideo] = useState<string>("");
  const [discription, setDiscription] = useState<string[]>([]);

  useEffect(() => {
    const subcatalogData: Subcatalog = {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Достижение 14 лет",
      count: 10,
    };

    const discriptionVideoData =
      "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4";

    const discriptionData = [
      "Подать заявление на оформление паспорта подостижению 14 лет можно на следующий день после наступления события.",
      "",
      "Для этого Вам потребуется:",
      "- 2 личные фотографии 3,5 на 4,5 см матовые на белом фоне в цветном или чёрно-беломисполнении",
      "",
      "- Свидетельство о рождении заявителя;",
      "- Документ подтверждающий наличие гражданства РФ;",
      "- Документ, подтверждающий регистрацию по месту жительства несовершеннолетнего при наличии",
      "- Госпошлина 300 р, оплачивается в МФЦНесовершеннолетний гражданин приходит лично",
    ];

    setSubcatalog(subcatalogData);
    setDiscriptionVideo(discriptionVideoData);
    setDiscription(discriptionData);
  }, []);

  return (
    <div className="flex flex-col bg-white font-circe">
      <Search />

      <div className="mb-20 ">
        {subcatalog && (
          <BackBtn
            state={location.state}
            video={subcatalog.img}
            text={subcatalog.text}
          />
        )}
        {/* <div className=" z-0 w-full h-40 bg-darkgreyy top-[350px]"></div> */}
      </div>

      {location.state === "sign" && discriptionVideo && (
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
      <div className="w-full">
        <AdditionalInf language={location.state} />
      </div>
    </div>
  );
};
