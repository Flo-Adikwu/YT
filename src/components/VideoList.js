import React from 'react';
import VideoItem from './VideoItem';


const VideoList = (props) => {
    const {videos, onVideoSelect} = props;
    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVidSelect={onVideoSelect} vid={video}/>
    })
    return(
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;