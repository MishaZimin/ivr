import React, { useState, FC } from "react";
import { RandomImage } from "./logo";

interface IPosition {
    x: number;
    y: number;
}

export const Button: FC = () => {
    const [count, setCount] = useState<number>(0);
    const [imagePosition, setImagePosition] = useState<IPosition>({
        x: 0,
        y: 0,
    });

    const handleClick = () => {
        const newX: number = Math.random() * (window.innerWidth - 200);
        const newY: number = Math.random() * (window.innerHeight - 400);

        setCount(count + 1);
        setImagePosition({ x: newX, y: newY });
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <button
                className="bg-white text-black px-5 py-3 rounded-xl min-w-28 shadow-lg"
                onClick={handleClick}
            >
                click {count}
            </button>

            {count > 0 && <RandomImage position={imagePosition} />}
        </div>
    );
};
