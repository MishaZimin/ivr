import React, { FC, useEffect, useRef, useCallback } from "react";
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
  const wsRef = useRef<WebSocket | null>(null); // Добавляем реф для хранения WebSocket соединения

  const capture = useCallback(() => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      // console.log("server noopen");
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
    wsRef.current = ws; // Сохраняем соединение в рефе при его создании

    ws.onopen = () => {
      console.log("Connected to server");
    };

    ws.onmessage = (event) => {
      console.log("Received message:", event.data);
    };

    ws.onerror = (error) => {
      console.log("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("Connection closed");
    };

    return () => {
      ws.close(); // Закрываем соединение при размонтировании компонента
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
        className="absolute w-1/4 bottom-1.5 left-1.5 "></Webcam>
    </>
  );
};
