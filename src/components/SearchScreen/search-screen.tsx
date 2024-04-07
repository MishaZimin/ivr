import { FC } from "react";
import { Search } from "../UI/search";
import { Button } from "../UI/button-link";
import { ButtonGrid } from "./btn-grid";

import SearchSymbol from "../../assets/search-symbol.png";
import portrait1 from "../../assets/portrait1.png";

export const SearchScreen: FC = () => {
  type IBtn = {
    img: string;
    text: string;
    count: number;
  };

  const buttons: IBtn[] = [
    { img: portrait1, text: "text text text text text ", count: 5 },
    { img: portrait1, text: "text text text", count: 10 },
    { img: portrait1, text: "text text texttext text texttext", count: 10 },
    { img: portrait1, text: "text text", count: 10 },
    { img: portrait1, text: "text text text text", count: 10 },
    { img: portrait1, text: "texttexttext", count: 10 },
    { img: portrait1, text: "text text", count: 10 },
    { img: portrait1, text: "text", count: 10 },
    { img: portrait1, text: "text text text", count: 10 },
  ];

  return (
    <>
      <div className="flex flex-col h-screen bg-starlite">
        <div className="w-full h-32 bg-white"></div>
        <div className="absolute flex flex-row justify-between w-[80%] h-16 bg-greyy rounded-full left-[10%] top-24">
          <input
            className=" w-[80%] pl-8 text-3xl rounded-full bg-greyy focus:border-redd"
            placeholder="Как оформить социальную стипендию..."></input>
          <div className="flex flex-row w-[20%] justify-end">
            <button className="pr-4 transition duration-200 transform hover:scale-105">
              <img className="h-8" src={SearchSymbol} alt="SearchSymbol" />
            </button>

            <button className="flex justify-center m-2 bg-white rounded-full hover:scale-105 w-[40%] transition duration-200 transform">
              <img
                className="h-8 p-1 my-auto"
                src={portrait1}
                alt="SearchSymbol"
              />
            </button>
          </div>
        </div>
        <div>
          <div className="w-[90%] mx-auto mt-28 h-20 mb-12 flex justify-center font-extrabold text-[45px] ">
            <h1>Какая у вас жизненная ситуация?</h1>
          </div>
          <div>
            <ButtonGrid buttons={buttons}></ButtonGrid>
          </div>
        </div>
        {/* <div className="w-full overflow-visible h-4/5 bg-redd"></div> */}

        {/* <div className="">
          <div className="pt-[50px] w-1/2 mx-auto">
            <Search />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button text="Закончить" to="/" />
        </div> */}
      </div>
    </>
  );
};
