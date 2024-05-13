import { FC } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

interface IAdditional {
  language: string;
}

export const AdditionalInf: FC<IAdditional> = ({ language }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/additional", { state: language });
  };

  return (
    <>
      <div className="w-full pb-10 pl-16 pt-14 bg-darkgreyy">
        <button
          className="font-normal bg-white text-[25px] rounded-md flex flex-row shadow-lg transition duration-200 transform hover:scale-[1.025]"
          onClick={handleNext}>
          <p className="text-[25px] font-bold font-circe px-4 py-2 bg white">
            Дополнительная информация
          </p>
          <div className="pr-2 my-auto">
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </>
  );
};
