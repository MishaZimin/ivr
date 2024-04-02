import { FC } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  to: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { text, to } = props;

  return (
    <>
      <Link
        className="px-6 py-4 text-center transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105"
        to={to}>
        {text}
      </Link>
    </>
  );
};
