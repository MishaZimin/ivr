import { FC } from "react";
import { useNavigate } from "react-router-dom";

import sign2_1 from "../../app/img/sign2_1.png";

type IBtn = {
  img: string;
  text: string;
  count: number;
};

interface ISelection {
  route: string;
  select: string;
  buttons: IBtn[];
}

export const SignCatalogButton: FC<ISelection> = ({
  route,
  select,
  buttons,
}) => {
  const navigate = useNavigate();

  const handleSubcatalog = () => {
    navigate(route, { state: select });
  };

  return (
    <>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={handleSubcatalog}
          style={{ boxShadow: "4px 4px 24px 0px rgba(0, 0, 0, 0.25)" }}
          className="flex flex-col items-center px-4 pt-4 font-bold text-black transition duration-200 transform rounded-[28px] bg-gradient-to-b from-white to-white hover:scale-[1.025]">
          <div className="flex flex-col justify-between pt-6 pb-8 text-3xl text-center font-circe">
            <p>{button.text}</p>
          </div>
          {select === "sign" ? (
            <img
              src={button.img}
              alt={button.text}
              className="w-3/4 my-auto "
            />
          ) : null}
        </button>
      ))}
    </>
  );
};
