/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

export const MiniBackBtn: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        className="absolute opacity-25 top-20 left-8"
        onClick={handleBack}>
        <IoChevronBackOutline className="w-16 h-16" />
      </button>
    </>
  );
};
