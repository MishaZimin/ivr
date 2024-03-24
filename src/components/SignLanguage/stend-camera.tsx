import React, { useRef, useState, useCallback, FC } from "react";
import Webcam from "react-webcam";
import { ScrollGalary } from "./scroll-gallery";

type IVideoConstraints = {
  width: number;
  height: number;
  facingMode: string;
};

const videoConstraints: IVideoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export const StendCamera: FC = () => {
  const webcamRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [url, setUrl] = useState<string | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);

  const capturePhoto = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setUrl(imageSrc);

      setPhotos((prevNames) => [imageSrc, ...prevNames]);
    }
  }, [webcamRef]);

  return (
    <>
      <div className="flex items-center justify-center min-h-full">
        <div className="w-1/2 p-4 my-8 bg-white rounded-lg shadow-lg min-w-80">
          <Webcam
            className="mb-4 rounded-md shadow-sm max-h-[500px]"
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            mirrored={true}
            // onUserMedia={onUserMedia}
          />
          <div className="w-1/2">
            <button
              onClick={capturePhoto}
              className="w-5/12 h-full px-1 py-1 mr-2 text-black bg-white shadow-lg rounded-xl max-w-12">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_gMleXQ-082cZXv130AZcfwg1nwT4aL6RvFLUFQDZpr7euSarRDVOKLJJiDSzeB7nas&usqp=CAU"
                }
                alt="camera"
              />
            </button>
            <button
              onClick={() => setPhotos([])}
              className="w-5/12 h-full px-1 py-1 text-black bg-white rounded-md shadow-lg max-w-12">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2AefZSiAdqlUdu-WJEJPoDNFsKnfA1YN0Q&usqp=CAU"
                }
                alt="delete"
              />
            </button>
          </div>
          {/* <button onClick={() => saveFile(url)}> save file </button> */}

          {photos.length > 0 ? <ScrollGalary photos={photos} /> : null}
        </div>
      </div>
    </>
  );
};
