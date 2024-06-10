import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { moc } from "../../store/moc";
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

  const handleNext = () => {
    console.log(route);
    switch (route) {
      case "/easy":
        console.log("sl");

        fetchData("/get-sl-sections");
        localStorage.setItem("language", "text");
        navigate("/catalog");
        break;
      case "/test":
        console.log("rsl");

        fetchData("/get-rsl-sections");
        localStorage.setItem("language", "sign");

        navigate(route);
        break;
      default:
        fetchData("/get-rsl-sections");
        localStorage.setItem("language", "sign");

        navigate(route);
        break;
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
