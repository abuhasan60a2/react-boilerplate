import React, { useState } from "react";
import VideoPopup from "../components/common/modals/VideoPopUp";
const VideoModal = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsVideoOpen(true);
        }}
      >
        Open VideoModal
      </button>
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"mCM6QVHD08c"}
      />
    </div>
  );
};
export default VideoModal;
