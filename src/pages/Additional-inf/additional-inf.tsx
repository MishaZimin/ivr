import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Search } from "../../components/search/search";
import { BackBtn } from "../../components/btn/back-btn";
import { AutoPlayVideo } from "../../components/sign-video/sign-video";
import Rectangle_3 from "../../app/img/Rectangle_3.png";

import { GrayBlock } from "../../components/gray-block/gray-block";

type Subcatalog = {
  img: string;
  text: string;
  count: number;
};

export const AdditionalPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [subcatalog, setSubcatalog] = useState<Subcatalog | null>(null);
  const [discriptionVideo, setDiscriptionVideo] = useState<string>("");

  const [discription, setDiscription] = useState<string[]>([]);

  useEffect(() => {
    const subcatalogData: Subcatalog = {
      img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
      text: "Дополнительная информация",
      count: 10,
    };
    const discriptionVideoData =
      "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4";

    const discriptionData = [
      "Госпошлина",
      "",
      "За выдачу российского национального водительского удостоверения размер государственной пошлины составляет 2000 рублей.",
      "",
      "За выдачу международного водительского удостоверения составляет 1600 рублей",
    ];

    setSubcatalog(subcatalogData);
    setDiscriptionVideo(discriptionVideoData);

    setDiscription(discriptionData);
  }, []);

  return (
    <>
      <div className="flex flex-col bg-white font-circe">
        <Search />

        {subcatalog && (
          <div className="relative mb-20">
            {location.state !== "sign" ? <GrayBlock /> : null}

            <BackBtn
              state={location.state}
              video={subcatalog.img}
              text={subcatalog.text}
            />
          </div>
        )}

        {/* <div className="absolute z-10 w-full h-40 bg-darkgreyy top-[350px]"></div> */}

        {location.state === "sign" && discriptionVideo && (
          <div className="mx-auto max-w-[65%] mb-12">
            <AutoPlayVideo video={discriptionVideo} />
          </div>
        )}

        <div className="h-[1px] w-[78%] mx-auto bg-black mb-12"></div>

        <div className="mx-auto w-[83%] text-2xl mb-20">
          {discription.map((text, index) => (
            <div key={index}>{text ? <p>{text}</p> : <br />}</div>
          ))}
        </div>
      </div>
    </>
  );
};
