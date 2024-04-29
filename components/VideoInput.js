import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";

function VideoInput({ file }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused || video.ended) {
      video.play().catch(error => {
        // Handle the promise rejection
        console.error('Failed to start playback:', error);
      });
      setIsPlaying(false);
    } else {
      video.pause();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(error => {
        // Handle the promise rejection
        console.error('Failed to start playback:', error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <div className="relative h-full ">
        {isPlaying && (
          <FaPlay
            className={`text-5xl  ${isPlaying ? "animate-[anima_0.5s_ease-in-out_alternate]":"animate-[animaout_0.5s_ease-in-out_alternate]"}  bg-[#ffffff7a] rounded-full p-2 text-purple-900  z-10 absolute top-[50%] right-0 left-0 ml-auto mr-auto `}
            onClick={togglePlay}
          />
        )}
        <video
          ref={videoRef}
          onClick={handleVideoClick}
          className="w-full h-full object-contain shadow-2xl shadow-black rounded-t-2xl"
          controls
          onEnded={()=>{setIsPlaying(true)}}
        >
          <source src={file} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoInput;
