import React, { FC } from "react";

interface IPhotosItem {
  photos: string[];
}

export const ScrollGalary: FC<IPhotosItem> = ({ photos }) => {
  return (
    <>
      <div className="w-full overflow-x-auto rounded-md">
        <div className="flex space-x-8 rounded-md">
          {photos.map((element: string, index: number) => (
            <div key={index} className="flex-shrink-0 w-96">
              <img
                className="w-full rounded-md shadow-sm"
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
