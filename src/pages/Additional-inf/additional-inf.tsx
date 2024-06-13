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
};

export const AdditionalPage: FC = () => {
  const navigate = useNavigate();
  const header = useLocation();
  const language = localStorage.getItem("language");

  const [subcatalog, setSubcatalog] = useState<Subcatalog | null>(null);
  const [discriptionVideo, setDiscriptionVideo] = useState<string>("");

  const [discription, setDiscription] = useState<string[]>([]);

  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearchUpdate = (searchState: boolean) => {
    setIsSearching(searchState);
    console.log("Search state updated:", searchState);
  };

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
      console.log(result);
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

      // setTopic(data.topic);

      const subcatalogData: any = {
        // img:
        //   language === "sign"
        //     ? data.description_video
        //     : data.description_video_sl,
        img: language === "sign" ? data.full_video : "",
        text: language === "sign" ? data.question : data.question_sl,
      };

      const discriptionVideoData = language === "sign" ? data.full_video : "";

      function splitString(input: string): string[] {
        return input ? input.split("\n") : [];
      }

      const discriptionData = splitString(
        language === "sign" ? data.description : data.description_sl
      );
      console.log("1", discriptionVideoData);

      setSubcatalog(subcatalogData);
      setDiscriptionVideo(discriptionVideoData);
      setDiscription(discriptionData);
    };

    loadData();
  }, []);

  return (
    <>
      <div className="flex flex-col bg-white font-circe">
        <Search onSearchUpdate={handleSearchUpdate} />

        <div className={isSearching ? "blur-[2px]" : "blur-none"}>
          {subcatalog && (
            <div className="relative mb-20">
              <BackBtn
                video={
                  subcatalog.text === "Дополнительная информация"
                    ? ""
                    : subcatalog.img
                }
                text={subcatalog.text}
                back={header.state.back}
              />
            </div>
          )}

          {language === "sign" && discriptionVideo && (
            <div className="mx-auto max-w-[60%] mb-12">
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
      </div>
    </>
  );
};
