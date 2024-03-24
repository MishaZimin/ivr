import React, { FC } from "react";
import sber2 from "../../../assets/sber2.png";

export const PageHeader: FC = () => {
  return (
    <div className="flex justify-between gap-10 shadow-lg lg:gap-20">
      <div className="flex items-center flex-shrink-0 gap-0">
        <a href="/" className="">
          <img src={sber2} alt="logo" className="h-12" />
        </a>
      </div>
      <div>
        {/* <ul className="flex items-center justify-end h-full gap-10 ">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul> */}
      </div>
      <div></div>
    </div>
  );
};
