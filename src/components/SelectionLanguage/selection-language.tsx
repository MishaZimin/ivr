import { FC } from "react";
// import { Button } from "../UI/button-link";
import { Link } from "react-router-dom";

import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle2 from "../../assets/Rectangle2.png";

export const SelectionLanguage: FC = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className="flex flex-col mx-auto pt-[8%]">
          <h1 className="mb-16 text-[60px] font-circe font-extrabold text-center ">
            Как бы вы хотели общаться?
          </h1>
          <div className="flex justify-center gap-20">
            <div className="text-center transition duration-200 transform hover:scale-105">
              <Link className="bg-white  text-[25px] font-normal" to="/easy">
                <img src={Rectangle2} alt="Rectangle1" className="mb-4 h-80" />

                <p>На простом языке</p>
              </Link>
            </div>
            <div className="text-center transition duration-200 transform hover:scale-105">
              <Link className="bg-white  text-[25px] font-normal" to="/test">
                <img src={Rectangle1} alt="Rectangle2" className="mb-4 h-80 " />
                <p>На языке жестов</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
