import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { moc } from "../../store/moc";
import { AutoPlayVideo } from "../sign-video/sign-video";
interface ISelectionButton {
  img: string;
  text: string;
  route: string;
}

export const SelectionButton: FC<ISelectionButton> = ({ img, text, route }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch("https://pincode-dev.ru/ivr-unt" + url, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`err: ${response.status}`);
      }
      const result = await response.json();

      console.log("!result!", result);

      localStorage.setItem("data", JSON.stringify(result));
      dispatch(setData(moc));
    } catch (err) {
      setError(err);
    }
  };

  const handleNext = async () => {
    console.log(route);
    switch (route) {
      case "/easy":
        console.log("sl");

        await fetchData("/get-sl-sections");
        localStorage.setItem("language", "text");
        navigate("/catalog");
        break;
      case "/test":
        console.log("rsl");

        await fetchData("/get-rsl-sections");
        localStorage.setItem("language", "sign");

        navigate(route);
        break;
      default:
        await fetchData("/get-rsl-sections");
        localStorage.setItem("language", "sign");

        navigate(route);
        break;
    }
  };

  return (
    <>
      <div className="text-center transition duration-200 transform hover:scale-[1.02]">
        <button
          className="font-normal bg-white text-[25px]"
          onClick={handleNext}>
          {/* <img src={img} alt="Rectangle1" className="mb-4 h-80" /> */}
          <div className="mb-4 h-80 w-[400px]">
            <AutoPlayVideo video={img} />
          </div>
          <p className="text-[30px] font-circe">{text}</p>
        </button>
      </div>
    </>
  );
};
