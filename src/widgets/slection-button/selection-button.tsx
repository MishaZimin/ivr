import { FC } from "react";
import { Link } from "react-router-dom";

interface ISelectionButton {
  img: string;
  text: string;
  route: string;
}

export const SelectionButton: FC<ISelectionButton> = ({ img, text, route }) => {
  return (
    <>
      <div className="text-center transition duration-200 transform hover:scale-105">
        <Link className="font-normal bg-white text-[25px]" to={route}>
          <img src={img} alt="Rectangle1" className="mb-4 h-80" />
          <p className="text-[30px] font-circe">{text}</p>
        </Link>
      </div>
    </>
  );
};
