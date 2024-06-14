import { FC } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export const AdditionalInf = ({ topic }: { topic: any }) => {
  const navigate = useNavigate();

  const language = localStorage.getItem("language");

  const handleNext = () => {
    // catalog or description
    navigate("/addcat", { state: { topic: topic } });
  };

  return (
    <>
      <div className="w-full pl-16 mt-24 pt-14 pb-14 bg-darkgreyy">
        <button
          className="font-normal bg-white text-[25px] rounded-xl flex flex-row shadow-lg transition duration-200 transform hover:scale-[1.025]"
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
