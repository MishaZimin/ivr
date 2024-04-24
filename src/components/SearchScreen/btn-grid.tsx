import React from "react";
// import portrait1 from "../../assets/portrait1.png";

type IBtn = {
  img: string;
  text: string;
  count: number;
};

export const ButtonGrid = ({ buttons }: { buttons: IBtn[] }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="flex flex-row items-center px-4 py-4 font-bold text-black transition duration-200 transform rounded-md bg-starlite hover:scale-[1.025]">
            <img
              src={button.img}
              alt={button.text}
              className="w-16 h-16 my-auto"
            />
            <div className="flex flex-col justify-between ml-4 text-left">
              <p>{button.text}</p>
              <p>{button.count} услуг</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
