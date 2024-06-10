/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";

import { useNavigate } from "react-router-dom";
import return1 from "../../app/img/return1.png";
import { AutoPlayVideo } from "../../components/sign-video/sign-video";

interface IBackBtn {
  video: string;
  text: string;
}

export const BackBtn: FC<IBackBtn> = ({ video, text }) => {
  const navigate = useNavigate();
  const language = localStorage.getItem("language");

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={false ? "blur-[2px]" : "blur-none"}>
        <button
          style={{ boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={handleBack}
          className={`flex flex-row justify-between min-h-[150px] relative w-[90%] mt-16 mx-auto  px-4 py-4 font-bold text-black transition duration-200 transform rounded-[25px] ${language !== "sign" ? "bg-gradient-to-b from-lightred2 to-white" : "bg-white"}  hover:scale-[1.02] shadow-xl `}>
          <img
            className="absolute w-8 mr-12 top-14 left-8"
            src={return1}
            alt="return1"
          />
          {video ? (
            language === "sign" ? (
              <div className="w-full h-full pl-24 my-auto">
                <AutoPlayVideo video={video} />
              </div>
            ) : (
              <img
                className=" pl-24 my-auto max-h-[200px] py-0"
                src={video}
                alt=""></img>
            )
          ) : null}

          <div className="flex flex-col w-full justify-between  pl-20 pr-24 pt-0  text-[45px] text-left">
            <p>{text}</p>
          </div>
        </button>
      </div>
    </>
  );
};
