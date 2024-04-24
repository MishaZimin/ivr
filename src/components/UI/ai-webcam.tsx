import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import Webcam from "react-webcam";

export const AIWebcam: FC = () => {
  interface IvideoConstraints {
    width: number;
    height: number;
    facingMode: string;
  }

  const videoConstraints: IvideoConstraints = {
    width: 720,
    height: 720,
    facingMode: "user",
  };

  const webcamRef = useRef<any>(null);
  const wsRef = useRef<WebSocket | null>(null);

  const [sign, setSign] = useState<string[]>([]);

  const capture = useCallback(() => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      // console.log("server no open");
      return;
    }

    const imageSrc = webcamRef.current.getScreenshot({
      width: 224,
      height: 224,
    });
    if (imageSrc) {
      // console.log(imageSrc);
      wsRef.current.send(imageSrc.slice(23));
    }
  }, []);

  useEffect(() => {
    const url = "ws://localhost:8001";
    const ws = new WebSocket(url);
    wsRef.current = ws;

    // interface ReceivedMessage {
    //   labels: { [key: number]: string };
    //   confidence: { [key: number]: number };
    // }

    // const testReceivedMessage: ReceivedMessage = {
    //   labels: { 0: "всё", 1: "быть" },
    //   confidence: { 0: 0.85897374, 1: 0.06595782 },
    // };
    // console.log(testReceivedMessage.labels[0]);

    ws.onopen = () => {
      console.log("Connected to server");
    };

    ws.onmessage = (event) => {
      let receivedMessage = JSON.parse(event.data);

      const word1 = receivedMessage[0];
      const word2 = receivedMessage[1];
      console.log(word1, "|", word2);
    };

    ws.onerror = (error) => {
      console.log("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("Connection closed");
    };

    return () => {
      ws.close();
    };
  }, []);

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
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        mirrored={true}
        videoConstraints={videoConstraints}
        className="absolute w-1/4 bottom-1.5 left-1.5"></Webcam>
    </>
  );
};
