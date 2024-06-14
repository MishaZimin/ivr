import React, { useRef, useState, useEffect } from "react";
import "./style.css";

interface VideoPlayerProps {
  video: string;
}

export const AutoPlayVideo: React.FC<VideoPlayerProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleCanPlay = () => {
      setLoading(false);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (videoElement) {
          if (entry.isIntersecting) {
            if (videoElement.paused) {
              videoElement.play().catch((error) => {
                // console.error("error", error);
              });
            }
          } else {
            if (!videoElement.paused) {
              videoElement.currentTime = 0;
              videoElement.pause();
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
      videoElement.addEventListener("canplay", handleCanPlay);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
        videoElement.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, []);

  return (
    <div className="relative mt-2">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center text-lg text-white bg-white gradient-loader bg-opacity-20 ">
          <img
            className="justify-center h-2/3"
            src="https://media.tenor.com/-NoKc-auITEAAAAM/loading-buffering.gif"
            alt="loader"
          />
        </div>
      )}
      {video !== "default_image_url" ? (
        <video ref={videoRef} className="rounded-2xl" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}
    </div>
  );
};
