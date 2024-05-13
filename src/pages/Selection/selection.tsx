import { FC } from "react";

// import Rectangle1 from "../../app/img/Rectangle1.png";
// import Rectangle2 from "../../app/img/Rectangle2.png";
import { SelectionButton } from "../../widgets/slection-button/selection-button";
import sign2_1 from "../../app/img/sign2_1.png";

export const SelectionLanguage: FC = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className="flex flex-col mx-auto pt-[8%]">
          <h1 className="mb-16 text-[60px] font-circe font-extrabold text-center ">
            Как бы вы хотели общаться?
          </h1>
          <div className="flex justify-center gap-20">
            <SelectionButton
              img={sign2_1}
              text={"На простом языке"}
              route={"/easy"}
            />
            <SelectionButton
              img={sign2_1}
              text={"На языке жестов"}
              route={"/test"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
