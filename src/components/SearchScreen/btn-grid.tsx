import React from "react";
// import portrait1 from "../../assets/portrait1.png";

type IBtn = {
  img: string;
  text: string;
  count: number;
};

export const ButtonGrid = ({ buttons }: { buttons: IBtn[] }) => {
  const handleSubcatalog = () => {
    
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8 ">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={handleSubcatalog}
            className="flex flex-col items-center px-4 pt-4 font-bold text-black transition duration-200 transform rounded-[40px] bg-gradient-to-b from-starlite to-white hover:scale-[1.025] shadow-xl">
            <div className="flex flex-col justify-between pb-8 mt-6 ml-4 text-3xl text-left">
              <p>{button.text}</p>
            </div>
            <img
              src={button.img}
              alt={button.text}
              className="w-3/4 my-auto "
            />
          </button>
        ))}
      </div>
    </div>
  );
};
