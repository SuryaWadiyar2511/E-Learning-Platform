import React from "react";

const VideoPlayer = ( {vedioUrl}) => {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7CqJlxBYj-M"
        title="YouTube video player"
        allowFullScreen></iframe>
    </div>
  );
};
export default VideoPlayer;