import { FC } from "react";
import { useNavigate } from "react-router-dom";

import sign_2_1 from "../../app/img/sign_2_1.svg";
import Rectangle_3 from "../../app/img/Rectangle_3.png";
import return1 from "../../app/img/return1.png";
import { useLocation } from "react-router-dom";
import { Search } from "../../widgets/search/search";
import { AdditionalInf } from "../../widgets/additional-inf/additional-inf";

export const AdditionalPage: FC = () => {
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location.state);

  const subcatalog = {
    img: sign_2_1,
    text: "Дополнительная информация",
    count: 10,
  };

  const discription = [
    "Госпошлина",
    "",
    "За выдачу российского национального водительского удостоверения размер государственной пошлины составляет 2000 рублей.",
    "За выдачу международного водительского удостоверения составляет 1600 рублей",
    "",
    "",

    "Сроки предоставления",
    "",
    "Срок предоставления государственной услуги не превышает 15 рабочих дней.",
  ];

  const handleSubcatalog = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col bg-white font-circe">
        <Search></Search>
        <button
          onClick={handleSubcatalog}
          style={{ boxShadow: "4px 4px 24px 0px rgba(0, 0, 0, 0.25)" }}
          className="flex flex-row relative w-[85%] mt-16 mb-20 mx-auto items-center px-4 pt-4 font-bold text-black transition duration-200 transform rounded-[40px] bg-white hover:scale-[1.025] shadow-xl">
          <img
            className="absolute w-8 top-14 left-8"
            src={return1}
            alt="return1"
          />
          {location.state === "sign" ? (
            <img
              src={subcatalog.img}
              alt={subcatalog.text}
              className="w-1/2 pl-12 my-auto"
            />
          ) : null}
          <div className="flex flex-col justify-between pb-8 pl-12 mt-6 ml-4 text-[45px] text-left">
            <p>{subcatalog.text}</p>
          </div>
        </button>

        {location.state === "sign" ? (
          <div className="mx-auto max-w-[75%] mb-12">
            <img src={Rectangle_3} alt="Rectangle_3" />
          </div>
        ) : null}

        <div className="h-[1px] w-[78%] mx-auto bg-black mb-8"></div>

        <div className="mx-auto w-[83%] text-2xl mb-20 ">
          {discription.map((text, index) => (
            <div key={index}>{text ? <p>{text}</p> : <br />}</div>
          ))}
        </div>
      </div>
    </>
  );
};
