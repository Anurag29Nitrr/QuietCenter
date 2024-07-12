import React, { useRef, useEffect } from 'react';

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoId) {
      // Load the YouTube Iframe Player API script
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Initialize the YouTube player when the API script is loaded
      window.onYouTubeIframeAPIReady = () => {
        playerRef.current = new window.YT.Player('youtube-player', {
          height: '360',
          width: '640',
          videoId,
        });
      };
    }

    // Clean up when the component unmounts
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return (
    <div>
      {videoId && (
        <div id="youtube-player">
          {/* The YouTube player will be rendered here */}
        </div>
      )}
    </div>
  );
};

export default YouTubePlayer;
