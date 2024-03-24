import React, { FC } from "react";

interface IPhotosItem {
  photos: string[];
}

export const ScrollGalary: FC<IPhotosItem> = ({ photos }) => {
  return (
    <>
      <div className="w-full mt-4 overflow-x-auto rounded-md">
        <div className="flex space-x-8 rounded-md">
          {photos.map((element: string, index: number) => (
            <div key={index} className="flex-shrink-0">
              <img
                className="rounded-md shadow-sm max-h-[200px]"
                src={element}
                alt="Screenshot"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
