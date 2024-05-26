import { FC } from "react";
import { useNavigate } from "react-router-dom";

import sign_2_1 from "../../app/img/sign_2_1.svg";
import Rectangle_3 from "../../app/img/Rectangle_3.png";
import return1 from "../../app/img/return1.png";
import { useLocation } from "react-router-dom";
import { Search } from "../../components/search/search";
// import { AdditionalInf } from "../../widgets/additional-inf/additional-inf";
import { BackBtn } from "../../components/btn/back-btn";

export const AdditionalPage: FC = () => {
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location.state);

  const subcatalog = {
    img: "https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4",
    text: "Дополнительная информация",
    count: 10,
  };

  const discription = [
    "Госпошлина",
    "",
    "За выдачу российского национального водительского удостоверения размер государственной пошлины составляет 2000 рублей.",
    "",
    "За выдачу международного водительского удостоверения составляет 1600 рублей",
  ];

  const handleSubcatalog = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col bg-white font-circe">
        <Search />

        <div className="mb-20">
          <BackBtn
            state={location.state}
            video={subcatalog.img}
            text={subcatalog.text}
          />
        </div>
        <div className="h-[1px] w-[78%] mx-auto bg-black mb-12"></div>

        {location.state === "sign" ? (
          <div className="mx-auto max-w-[75%] mb-12">
            <img src={Rectangle_3} alt="Rectangle_3" />
          </div>
        ) : null}

        <div className="mx-auto w-[83%] text-2xl mb-20 ">
          {discription.map((text, index) => (
            <div key={index}>{text ? <p>{text}</p> : <br />}</div>
          ))}
        </div>
      </div>
    </>
  );
};
