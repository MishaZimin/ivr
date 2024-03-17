import React, { FC } from "react";
import Webcam from "react-webcam";

interface IPosition {
    x: number;
    y: number;
}

interface IPositionItem {
    position: IPosition;
}

export const WebCamera: FC<IPositionItem> = ({ position }) => {
    return (
        <Webcam
            className="absolute w-48 rounded-xl shadow-lg"
            style={{ top: position.y, left: position.x }}
        />
    );
};
