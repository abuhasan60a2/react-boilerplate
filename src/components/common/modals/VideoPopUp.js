import React from "react";
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css';

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId 
}) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
