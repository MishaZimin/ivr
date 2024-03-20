import React, { FC } from "react";

interface IPhotosItem {
    photos: string[];
}

export const ScrollGalary: FC<IPhotosItem> = ({ photos }) => {
    return (
        <>
            {photos.map((element: string, index: number) => {
                return (
                    <div
                        key={index}
                        className="flex overflow-x-auto space-x-8 mt-4"
                    >
                        <img
                            className="flex-shrink-0 w-full rounded-md shadow-sm"
                            src={element}
                            alt="Screenshot"
                        />
                    </div>
                );
            })}
        </>
    );
};
