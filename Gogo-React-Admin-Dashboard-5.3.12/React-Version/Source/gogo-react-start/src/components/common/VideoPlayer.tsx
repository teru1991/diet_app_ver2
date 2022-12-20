/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'vide... Remove this comment to see the full error message
import videojs from 'video.js';

const VideoPlayer = (props: any) => {
  const playerRef = useRef();

  useEffect(() => {
    const player = videojs(
      playerRef.current,
      props,
      function onPlayerReady() {}
    );
    return () => {
      player.dispose();
    };
  }, []);

  const { className } = props;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div data-vjs-player>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <video
          // @ts-expect-error TS(2322): Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message
          ref={playerRef}
          poster="/assets/img/video/poster.jpg"
          className={className || ''}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
