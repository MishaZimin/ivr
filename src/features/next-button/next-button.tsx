import { FC } from "react";
import { Link } from "react-router-dom";

export const NextButton: FC = () => {
  return (
    <>
      {/* <div className="flex justify-center rounded-full align-center h-[450px]">
        <Link
          className="flex flex-col justify-end w-[900px] text-[80px] rounded-tl-full rounded-tr-full  border-t-[40px] border-r-[40px] border-l-[40px] border-redd  pb-12 font-black z-10 transition duration-200 transform hover:scale-[1.025]"
          to="/selection">
          НАЧАТЬ
        </Link>
      </div> */}
      <div className="flex justify-center">
        <Link
          className="p-40 flex flex-col justify-end text-[80px] rounded-tl-full rounded-tr-full  border-t-[40px] border-r-[40px] border-l-[40px] border-redd  pb-12 font-black z-10 transition duration-200 transform hover:scale-[1.025]"
          to="/selection">
          НАЧАТЬ
        </Link>
      </div>
    </>
  );
};
