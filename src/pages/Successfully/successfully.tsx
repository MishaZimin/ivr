import { FC } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Successfully: FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/catalog", { state: "sign" });
  };

  return (
    <>
      <div className="flex h-full font-circe">
        <div className="mx-auto mt-[16%] bg-greyy px-8 py-12 rounded-[25px] text-center w-[30%] ">
          <h1 className="font-extrabold text-[30px] mb-1">Успешно!</h1>
          <p className=" font-normal text-[25px] mb-6">
            Теперь вы можете использовать поиск жестами
          </p>
          <div className=" transition duration-200 transform hover:scale-[1.025]">
            <button
              className="px-7 py-1 font-extrabold rounded-full bottom-1/2 right-12 font-circe bg-orange2 text-[25px]"
              onClick={handleNext}>
              Далее
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
