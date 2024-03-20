import { FC } from "react";
import { Link } from "react-router-dom";

export const SelectionLanguage: FC = () => {
    return (
        <>
            <div className="flex justify-center mt-10">
                <div>
                    <p className=" text-center mb-5">
                        Выберите способ взыимодействия
                    </p>
                    <div className="flex gap-5">
                        <Link
                            to="/easy"
                            className="bg-white text-black px-5 py-2 rounded-md shadow-lg"
                        >
                            Ясный язык
                        </Link>
                        <Link
                            to="/sign"
                            className="bg-white text-black px-5 py-2 rounded-md shadow-lg"
                        >
                            Жестовый язык
                        </Link>
                        <Link
                            to="/text"
                            className="bg-white text-black px-5 py-2 rounded-md shadow-lg"
                        >
                            Текст
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
