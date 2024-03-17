import React, { useRef, useState, useCallback, FC } from "react";
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

export const StendCamera: FC = () => {
    const webcamRef = useRef<any>(null);
    const [url, setUrl] = useState<string | null>(null);

    const capturePhoto = useCallback(async () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setUrl(imageSrc);
        }
    }, [webcamRef]);

    // const onUserMedia: any = (e: any) => {
    //     console.log(e.mediaStream);
    // };

    return (
        <>
            <div className="min-h-full flex items-center justify-center">
                <div className="min-w-80 my-10 p-4 w-1/2 bg-white shadow-lg rounded-lg">
                    <Webcam
                        className="w-full rounded-md shadow-sm"
                        ref={webcamRef}
                        audio={false}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        // onUserMedia={onUserMedia}
                    />
                    <div className="mt-4 w-1/2">
                        <button
                            onClick={capturePhoto}
                            className="w-5/12 h-full max-w-12 mr-2 bg-white text-black px-1 py-1 rounded-md shadow-lg"
                        >
                            <img
                                src={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_gMleXQ-082cZXv130AZcfwg1nwT4aL6RvFLUFQDZpr7euSarRDVOKLJJiDSzeB7nas&usqp=CAU"
                                }
                                alt="camera"
                            />
                        </button>
                        <button
                            onClick={() => setUrl(null)}
                            className="w-5/12 h-full max-w-12 bg-white text-black px-1 py-1 rounded-md shadow-lg"
                        >
                            <img
                                src={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2AefZSiAdqlUdu-WJEJPoDNFsKnfA1YN0Q&usqp=CAU"
                                }
                                alt="delete"
                            />
                        </button>
                    </div>
                    {url && (
                        <div className="mt-10">
                            <img
                                className="w-full rounded-md shadow-sm"
                                src={url}
                                alt="Screenshot"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
