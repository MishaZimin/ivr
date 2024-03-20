import { FC } from "react";
import { Link } from "react-router-dom";

export const Welcome: FC = () => {
    return (
        <>
            <div className="flex justify-center mt-10">
                <div>
                    <h1 className=" flex justify-center mb-5">welcome</h1>
                    <Link
                        className="bg-white text-black px-5 py-2 rounded-md shadow-lg"
                        to="/selection"
                    >
                        начать
                    </Link>
                </div>
            </div>
        </>
    );
};
