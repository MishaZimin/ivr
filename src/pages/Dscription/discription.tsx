import { FC } from "react";
import { useNavigate } from "react-router-dom";

import sign_2_1 from "../../app/img/sign_2_1.svg";
import Rectangle_3 from "../../app/img/Rectangle_3.png";
import return1 from "../../app/img/return1.png";

export const DiscriptionSubcatalog: FC = () => {
  const navigate = useNavigate();

  const subcatalog = {
    img: sign_2_1,
    text: "Достижение 14 лет",
    count: 10,
  };

  const discription = [
    "Подать заявление на оформление паспорта подостижению 14 лет можно на следующий день после наступления события.",
    "",
    "Для этого Вам потребуется:",
    "- 2 личные фотографии 3,5 на 4,5 см матовые на белом фоне в цветном или чёрно-беломисполнении",
    "",
    "- Свидетельство о рождении заявителя;",
    "- Документ подтверждающий наличие гражданства РФ;",
    "- Документ, подтверждающий регистрацию по месту жительства несовершеннолетнего при наличии",
    "- Госпошлина 300 р, оплачивается в МФЦНесовершеннолетний гражданин приходит лично",
    "",
    "Дополнительная информация",
  ];

  const handleSubcatalog = () => {
    navigate("/subcatalog");
  };

  return (
    <>
      <div className="flex flex-col bg-white font-circe">
        <button
          onClick={handleSubcatalog}
          className="flex flex-row relative w-[85%] mt-16 mb-20 mx-auto items-center px-4 pt-4 font-bold text-black transition duration-200 transform rounded-[40px] bg-white hover:scale-[1.025] shadow-xl">
          <img className="absolute top-14 left-8" src={return1} alt="return1" />
          <img
            src={subcatalog.img}
            alt={subcatalog.text}
            className="w-1/2 pl-40 my-auto"
          />
          <div className="flex flex-col justify-between pb-8 pl-12 mt-6 ml-4 text-5xl text-left">
            <p>{subcatalog.text}</p>
          </div>
        </button>

        <div className="mx-auto max-w-[75%] mb-12">
          <img src={Rectangle_3} alt="Rectangle_3" />
        </div>
        <div className="h-[1px] w-[78%] mx-auto bg-black mb-24"></div>

        <div className="mx-auto w-[83%] text-2xl mb-20">
          {discription.map((text) => (
            <>{text ? <p>{text}</p> : <br />}</>
          ))}
        </div>
      </div>
    </>
  );
};