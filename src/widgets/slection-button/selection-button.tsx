import { FC } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface ISelectionButton {
  img: string;
  text: string;
  route: string;
}

export const SelectionButton: FC<ISelectionButton> = ({ img, text, route }) => {
  const navigate = useNavigate();

  // const handleNext = () => {
  //   navigate("/search", { state: "sign" });
  // };

  const handleNext = () => {
    if (route === "/easy") {
      navigate("/catalog", { state: "text" });
    } else if (route === "test") {
      navigate(route, { state: "sign" });
    } else {
      navigate(route, { state: "sign" });
    }
  };

  return (
    <>
      <div className="text-center transition duration-200 transform hover:scale-105">
        <button
          className="font-normal bg-white text-[25px]"
          onClick={handleNext}>
          <img src={img} alt="Rectangle1" className="mb-4 h-80" />
          <p className="text-[30px] font-circe">{text}</p>
        </button>
      </div>
    </>
  );
};
