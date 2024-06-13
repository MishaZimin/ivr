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
  const [topic, setTopic] = useState<string>("");

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
        console.log("description: ", data);

        console.log("topic: ", data.topic);
        console.log("question: ", data.question);
        console.log("description: ", data.description_sl);
      }

      setTopic(data.topic);

      const subcatalogData: Subcatalog = {
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

      setSubcatalog(subcatalogData);
      setDiscriptionVideo(discriptionVideoData);
      setDiscription(discriptionData);
    };

    loadData();
  }, [header.state.search, language]);

  return (
    <div className="flex flex-col bg-white font-circe">
      <Search />

      <div className="mb-20 ">
        {subcatalog && (
          <BackBtn video={subcatalog.img} text={subcatalog.text} />
        )}
      </div>

      {language === "sign" && discriptionVideo && (
        <div className="mx-auto max-w-[60%] mb-20">
          <AutoPlayVideo video={discriptionVideo} />
        </div>
      )}
      <div className="h-[1px] w-[78%] mx-auto bg-black mb-10"></div>
      <div className="mx-auto w-[83%] text-2xl mb-20">
        {discription.map((text, index) => (
          <div key={index}>{text ? <p>{text}</p> : <br />}</div>
        ))}
      </div>
      {}
      <div className="w-full">
        <AdditionalInf topic={topic} />
      </div>
    </div>
  );
};
