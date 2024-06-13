import React, { FC, useEffect, useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import { IoCloseOutline } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
interface Props {
  onWordPairsChange: (newWordPairs: string[]) => void;
  onHeight: number;
  onWidth: number;
}

export const AIWebcam: FC<Props> = ({
  onWordPairsChange,
  onHeight,
  onWidth,
}) => {
  interface IvideoConstraints {
    width: number;
    height: number;
    facingMode: string;
  }

  const videoConstraints: IvideoConstraints = {
    width: onWidth,
    height: onHeight,
    facingMode: "user",
  };

  const webcamRef = useRef<any>(null);
  const wsRef = useRef<WebSocket | null>(null);

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handlePlay = () => {
    isPlay ? setIsPlay(false) : setIsPlay(true);
    console.log(isPlay);
  };

  const capture = useCallback(() => {
    if (
      !isPlay ||
      !wsRef.current ||
      wsRef.current.readyState !== WebSocket.OPEN
    ) {
      return;
    }

    const imageSrc = webcamRef.current.getScreenshot({
      width: 224,
      height: 224,
    });

    // console.log(imageSrc);

    if (imageSrc) {
      wsRef.current.send(imageSrc.slice(23));
      // wsRef.current.send(imageSrc);
    }
  }, [isPlay]);

  useEffect(() => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      return;
    }

    // const url = "ws://localhost:8001";
    const url = "wss://pincode-dev.ru/new_api/";
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("Connected to server");
    };

    ws.onmessage = (event) => {
      let receivedMessage = JSON.parse(event.data);

      const word1 = receivedMessage[0];
      const word2 = receivedMessage[1];
      console.log(word1, "|", word2);

      const newWordPairs = [word1, word2];

      onWordPairsChange(newWordPairs);
    };

    ws.onerror = (error) => {
      console.log("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("Connection closed");
    };

    // return () => {
    //   ws.close();
    // };
  }, [onWordPairsChange]);

  useEffect(() => {
    const captureInterval = setInterval(() => {
      capture();
    }, 31);

    return () => {
      clearInterval(captureInterval);
    };
  }, [capture]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`relative ${isLoading ? "scale-100 opacity-0" : "transition-all duration-100"}`}>
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-75">
            {/* <div className="w-12 h-12 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader"></div>
            <p className="mt-2 text-gray-700">Загрузка видео...</p> */}
          </div>
        )}

        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          mirrored={true}
          videoConstraints={videoConstraints}
          onLoadedData={() => setIsLoading(false)}
          className="rounded-[30px] border-4 border-redd"
        />

        <button
          onClick={handlePlay}
          className="absolute flex opacity-100 bottom-6 left-[46%]">
          {isPlay ? (
            <FaPauseCircle className="w-[50px] h-[50px]" />
          ) : (
            <FaCirclePlay className="w-[50px] h-[50px]" />
          )}
        </button>
      </div>
    </>
  );
};
