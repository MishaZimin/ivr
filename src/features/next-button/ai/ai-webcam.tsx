import React, { FC, useEffect, useRef, useCallback } from "react";
import Webcam from "react-webcam";

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

  const capture = useCallback(() => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      return;
    }

    const imageSrc = webcamRef.current.getScreenshot({
      width: 224,
      height: 224,
    });

    if (imageSrc) {
      wsRef.current.send(imageSrc.slice(23));
    }
  }, []);

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
  }, [onWordPairsChange]);

  useEffect(() => {
    const captureInterval = setInterval(() => {
      capture();
    }, 31);

    return () => {
      clearInterval(captureInterval);
    };
  }, [capture]);

  return (
    <>
      <div>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          mirrored={true}
          videoConstraints={videoConstraints}
          className="rounded-[30px] border-4 border-redd"></Webcam>
      </div>
    </>
  );
};
