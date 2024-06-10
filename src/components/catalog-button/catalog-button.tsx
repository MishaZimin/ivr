import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { AutoPlayVideo } from "../sign-video/sign-video";

type IBtn = {
  img: string;
  text: string;
};

interface ISelection {
  route: string;
  buttons: IBtn[];
  data?: any;
  topic?: string;
}

export const SignCatalogButton: FC<ISelection> = ({
  route,
  buttons,
  data,
  topic,
}) => {
  const navigate = useNavigate();
  const language = localStorage.getItem("language");

  const handkeNext = (header: string, video: string) => {
    console.log(topic + " " + header);
    let search: string = "";

    if (topic) {
      search = topic + " " + header;
    }
    // console.log("route: ", route);
    navigate(route, {
      state: { header: header, video: video, search: search, data: data },
    });
  };

  return (
    <>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handkeNext(button.text, button.img)}
          style={{ boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.25)" }}
          className="flex flex-col items-center px-4 py-4 font-bold text-black transition duration-200 transform rounded-[28px] bg-gradient-to-b from-white to-white hover:scale-[1.020]">
          <div className="flex flex-col justify-between pt-8 pb-10 text-[35px] text-center font-circe my-auto">
            <p>{button.text}</p>
          </div>
          {language === "sign" && button.img ? (
            <AutoPlayVideo video={button.img} />
          ) : (
            <img src={button.img} alt="" />
          )}
        </button>
      ))}
    </>
  );
};
