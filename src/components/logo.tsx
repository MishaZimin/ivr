import React, { FC } from "react";
import Webcam from "react-webcam";

interface IPosition {
    x: number;
    y: number;
}

interface IPositionItem {
    position: IPosition;
}

export const RandomImage: FC<IPositionItem> = ({ position }) => {
    return (
        <Webcam
            className="absolute w-32 rounded-xl shadow-lg"
            style={{ top: position.y, left: position.x }}
        />

        // <img
        //     src="data:image/png;base64,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"
        //     alt="Random"
        //     style={{ top: position.y, left: position.x }}
        //     className="absolute w-20 rounded-xl shadow-lg"
        // />
    );
};
