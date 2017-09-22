
/** Video List
 *
 *  Description: [TBD]
 *
 *  Author: Jose Fernando Lopez Fernandez
 *  Date:   22-September-2017
 *
 */

import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
          onVideoSelect={ props.onVideoSelect }
          key={ video.etag }
          video={ video }
      />
    );
  });

  return (
      <ul className="col-md-4 list-group">
        { videoItems }
      </ul>
  );
};


export default VideoList;

