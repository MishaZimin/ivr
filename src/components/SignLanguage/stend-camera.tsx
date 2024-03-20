import React, { useRef, useState, useCallback, FC } from "react";
import Webcam from "react-webcam";
import { ScrollGalary } from "./scroll-galary";

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

            // console.log(photos[0]);
        }
    }, [webcamRef]);

    // const saveFile = async (blob: any) => {
    //     const a = document.createElement("a");
    //     a.download = "my-file.txt";
    //     a.href = URL.createObjectURL(blob);
    //     a.addEventListener("click", (e) => {
    //         setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    //     });
    //     a.click();
    // };

    return (
        <>
            <div className="min-h-full flex items-center justify-center">
                <div className="min-w-80 my-8 p-4 w-1/2 bg-white shadow-lg rounded-lg">
                    <Webcam
                        className="w-full rounded-md shadow-sm"
                        ref={webcamRef}
                        audio={false}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        mirrored={true}
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
                            onClick={() => setPhotos([])}
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
                    {/* <button onClick={() => saveFile(url)}> save file </button> */}

                    <ScrollGalary photos={photos} />
                </div>
            </div>
        </>
    );
};
