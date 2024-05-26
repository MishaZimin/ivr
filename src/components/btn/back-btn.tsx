/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import return1 from "../../app/img/return1.png";
import { AutoPlayVideo } from "../../components/sign-video/sign-video";

import { IoIosArrowRoundBack } from "react-icons/io";

interface IBackBtn {
  state: string;
  video: string;
  text: string;
}

export const BackBtn: FC<IBackBtn> = ({ state, video, text }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={false ? "blur-[2px]" : "blur-none"}>
        <button
          style={{ boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={handleBack}
          className="flex flex-row relative w-[90%] mt-16 mx-auto items-center px-4 py-4 font-bold text-black transition duration-200 transform rounded-[35px] bg-gradient-to-b from-white to-white hover:scale-[1.020] shadow-xl ">
          <img
            className="absolute w-8 mr-12 top-14 left-8"
            src={return1}
            alt="return1"
          />

          {state === "sign" ? (
            // <img
            //   src={subcatalog.img}
            //   alt={subcatalog.text}
            //   className="w-1/2 pl-40 my-auto"
            // />
            <div className="w-1/2 pl-40 my-auto">
              <AutoPlayVideo video={video} />
            </div>
          ) : null}
          <div className="flex flex-col justify-between pb-32 pl-20 pr-24 pt-6  text-[45px] text-left">
            <p>{text}</p>
          </div>
        </button>
      </div>
    </>
  );
};
