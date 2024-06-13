import { FC } from "react";

// import Rectangle1 from "../../app/img/Rectangle1.png";
// import Rectangle2 from "../../app/img/Rectangle2.png";
import { SelectionButton } from "../../components/slection-button/selection-button";
import sign2_1 from "../../app/img/sign2_1.png";
import { MiniBackBtn } from "../../components/btn/mini-back-btn";
export const SelectionLanguage: FC = () => {
  return (
    <>
      <div className="flex h-screen ">
        <MiniBackBtn />

        <div className="flex flex-col pb-8 mx-auto my-auto">
          <h1 className="mb-16 text-[70px] font-circe font-extrabold text-center ">
            Как бы вы хотели общаться?
          </h1>
          <div className="flex justify-center gap-28">
            <SelectionButton
              img="https://storage.yandexcloud.net/akhidov-ivr/9.1.mp4"
              text={"На простом языке"}
              route={"/easy"}
            />
            <SelectionButton
              img="https://storage.yandexcloud.net/akhidov-ivr/10.1.mp4"
              text={"На языке жестов"}
              route={"/test"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
