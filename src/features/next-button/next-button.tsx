import { FC } from "react";
import { Link } from "react-router-dom";

export const NextButton: FC = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <Link
          className="p-40 flex flex-col text-[80px] rounded-t-full border-t-[35px] border-x-[35px] border-redd pb-8 font-black z-10 transition duration-200 transform hover:scale-[1.025] bg-white"
          to="/selection">
          НАЧАТЬ
        </Link>
      </div>
    </>
  );
};
