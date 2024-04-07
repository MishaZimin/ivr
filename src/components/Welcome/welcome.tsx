import { FC } from "react";
// import { Button } from "../UI/button-link";
import { Link } from "react-router-dom";

export const Welcome: FC = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden ">
        <div className="flex flex-col w-7/12 mx-auto text-center animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
          <div className="pt-20 h-1/2">
            <h1 className="mb-6 text-[50px] font-circe font-extrabold">
              Здесь
            </h1>
            <h2 className="mb-6 text-[50px] font-circe font-normal">
              Ты можешь обратиться на языке жестов
            </h2>
          </div>

          {/* <div className="absolute bottom-0 flex justify-center w-full border-2 align-center h-1/2align-bottom">
            <Link
              className="w-[1000px] h-[500px] max-h-[600px] border-2 
              rounded-tl-full rounded-tr-full border-t-[40px] 
              border-r-[40px] border-l-[40px] border-redd text-[80px] justify-end z-10"
              to="/selection">
              НАЧАТЬ
            </Link>
          </div> */}

          <div className="flex justify-center w-full rounded-full align-center h-1/2 ">
            <Link
              className="flex flex-col justify-end  w-10/12 text-[80px] 
                rounded-tl-full rounded-tr-full border-t-[40px] border-r-[40px] border-l-[40px] 
              border-redd  pb-12 font-extrabold z-10 transition duration-200 transform hover:scale-[1.025]"
              to="/selection">
              НАЧАТЬ
            </Link>
          </div>
        </div>
        {/* <div className="inset-0 m-auto absolute bottom-[-850px] w-[800px] h-[800px] border-[50px] border-redd rounded-full"></div> */}
      </div>
    </>
  );
};
