import { useEffect, useState } from "react";
import { VideoSkeleton } from "./VideoSkeleton";

export default function VideoComponent({videoTitle,videoSrc}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className=" flex-col w-full h-full flex bg-[#00000073] animate-[anima_1s_cubic-bezier(0.250,_0.460,_0.450,_0.940)_both] ">
      <p className="text-[20px] text-white font-[600] text-center p-4 ">
       {videoTitle}
      </p>

      {isLoading ? (
        <VideoSkeleton />
      ) : (
        <video
          autoPlay
          width="100%"
          height="100%"
          controls
          preload="none"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
