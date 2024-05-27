import { FC } from "react";
import { Link } from "react-router-dom";

export const GrayBlock: FC = () => {
  return (
    <>
      {/* <div className="z-50 w-full h-[300px] mt-50 bg-gray-40"></div> */}
      {/* <div className="absolute z-10 w-1/2 top-22 h-22 bg-darkgreyy"></div> */}
      <div className="absolute z-0 w-full h-32 top-2/3 bg-lightgray"></div>
    </>
  );
};
