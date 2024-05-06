import { FC } from "react";
import { useNavigate } from "react-router-dom";

import sign2_1 from "../../app/img/sign2_1.png";

type IBtn = {
  img: string;
  text: string;
  count: number;
};

export const CatalogButton: FC = () => {
  const navigate = useNavigate();

  const buttons: IBtn[] = [
    { img: sign2_1, text: "Консультация по паспорту РФ", count: 5 },
    { img: sign2_1, text: "Консультация по ИНН", count: 10 },
    { img: sign2_1, text: "Консультация по паспорту РФ", count: 10 },
    { img: sign2_1, text: "Консультация по паспорту РФ", count: 10 },
    { img: sign2_1, text: "Консультация по паспорту РФ", count: 10 },
    { img: sign2_1, text: "Консультация по паспорту РФ", count: 10 },
    { img: sign2_1, text: "Консультация по паспорту РФ", count: 10 },
    { img: sign2_1, text: "Консультация по паспорту РФ", count: 10 },
    { img: sign2_1, text: "Консультация по паспорту РФ", count: 10 },
  ];

  const handleSubcatalog = () => {
    navigate("/subcatalog");
  };

  return (
    <>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={handleSubcatalog}
          className="flex flex-col items-center px-4 pt-4 font-bold text-black transition duration-200 transform rounded-[40px] bg-gradient-to-b from-orange to-white hover:scale-[1.025] shadow-xl">
          <div className="flex flex-col justify-between pb-8 mt-6 ml-4 text-3xl text-left font-circe">
            <p>{button.text}</p>
          </div>
          <img src={button.img} alt={button.text} className="w-3/4 my-auto " />
        </button>
      ))}
    </>
  );
};
