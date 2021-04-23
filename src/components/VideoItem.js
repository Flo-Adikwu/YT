import React from 'react';
import './VideoItem.css'


const VideoItem = (props) => {
    const {vid, onVidSelect} = props;
    return(
        <div onClick={() => onVidSelect(vid)} className="video-item item">
            <img className="ui image" src={vid.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                {vid.snippet.title}
                </div>
            </div>
            
        </div>
    )
}

export default VideoItem;