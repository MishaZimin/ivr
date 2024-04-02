import React, { useRef, useState, useCallback, FC } from "react";
import Webcam from "react-webcam";
import { ScrollGalary } from "./scroll-gallery";
import { useReactMediaRecorder } from "react-media-recorder";

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

const CAMERA_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_gMleXQ-082cZXv130AZcfwg1nwT4aL6RvFLUFQDZpr7euSarRDVOKLJJiDSzeB7nas&usqp=CAU";
const DELETE_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2AefZSiAdqlUdu-WJEJPoDNFsKnfA1YN0Q&usqp=CAU";

export const StendCamera: FC = () => {
  const webcamRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [video, setVideo] = useState<boolean>(false);
  const [photos, setPhotos] = useState<string[]>([]);

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true, audio: false });

  const capturePhoto = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      setPhotos((prevNames) => [imageSrc, ...prevNames]);
    }

    console.log(photos);
  }, [photos]);

  return (
    <>
      <div className="w-full p-4 bg-white rounded-lg shadow-lg min-w-80 ">
        <p>status: {status}</p>
        <Webcam
          className="mb-4 rounded-md shadow-sm max-h-[500px]"
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          mirrored={true}
        />

        {/* {mediaBlobUrl ? <a href={mediaBlobUrl}> link </a> : null} */}

        <div className="flex items-center w-3/4">
          <button
            className="h-full px-3 py-3 mr-2 text-black transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105 "
            onClick={() => {
              startRecording();
            }}>
            Start Rec
          </button>
          <button
            className="h-full px-3 py-3 mr-2 text-black transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105 "
            onClick={() => {
              stopRecording();
              setVideo(true);
            }}>
            Stop Rec
          </button>
          <button
            onClick={capturePhoto}
            className="w-5/12 h-full px-1 py-1 mr-2 text-black transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105 max-w-12">
            <img src={CAMERA_ICON} alt="camera" />
          </button>
          <button
            onClick={() => {
              setPhotos([]);
              setVideo(false);

              console.log(photos);
            }}
            className="w-5/12 h-full px-1 py-1 text-black transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105 max-w-12">
            <img src={DELETE_ICON} alt="delete" />
          </button>
        </div>

        {video ? (
          <div className="flex-shrink-0 mt-5 ">
            <div className="mb-4">
              <a href={mediaBlobUrl ?? undefined}>video</a>
            </div>
            <video
              className="mb-4 rounded-md shadow-sm max-h-[500px] max-w-[355px]"
              src={mediaBlobUrl ?? undefined}
              controls
              autoPlay
            />
          </div>
        ) : null}

        {photos.length > 0 ? (
          <div className="mt-2 ">
            <p className="">photos</p>
            <ScrollGalary photos={photos} />
          </div>
        ) : null}
      </div>
    </>
  );
};
