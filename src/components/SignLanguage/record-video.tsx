import { FC } from "react";
// import { ReactMediaRecorder } from "react-media-recorder";
import { useReactMediaRecorder } from "react-media-recorder";

import Webcam from "react-webcam";

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

export const RecordView: FC = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  return (
    <>
      <div className="w-5/12 p-4 m-8 bg-white rounded-lg shadow-lg min-w-80">
        <div>
          <div>
            <p>{status}</p>

            {mediaBlobUrl ? (
              <>
                <video
                  className="mb-4 rounded-md shadow-sm max-h-[500px]"
                  src={mediaBlobUrl}
                  controls
                  autoPlay
                />
                <a href={mediaBlobUrl}>video</a>
              </>
            ) : (
              <>
                <Webcam
                  className="mb-4 rounded-md shadow-sm max-h-[500px]"
                  audio={false}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                  mirrored={true}
                  // onUserMedia={onUserMedia}
                />
              </>
            )}

            <div className="w-full">
              <button
                className="h-full px-3 py-3 mr-2 text-black transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105 "
                onClick={startRecording}>
                Start Rec
              </button>
              <button
                className="h-full px-3 py-3 mr-2 text-black transition duration-200 transform bg-white rounded-md shadow-lg hover:scale-105 "
                onClick={stopRecording}>
                Stop Rec
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
