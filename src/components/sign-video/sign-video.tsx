import React, { useRef, useEffect } from "react";
import "./style.css";

interface VideoPlayerProps {
  video: string;
}

export const AutoPlayVideo: React.FC<VideoPlayerProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (videoElement) {
          if (entry.isIntersecting) {
            if (videoElement.paused) {
              videoElement.play().catch((error) => {
                // console.error("Failed to play video:", error);
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
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="">
      {video ? (
        <video
          ref={videoRef}
          className=" rounded-2xl video-player"
          autoPlay
          muted
          loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}
    </div>
  );
};
