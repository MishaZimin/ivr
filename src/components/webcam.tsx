import React, { FC } from "react";
import Webcam from "react-webcam";

export const WebcamComponent: FC = () => {
    return (
        <div className="flex items-center justify-center p-10 rounded-xl">
            <Webcam className=" rounded-lg shadow-lg" />
        </div>
    );
};
