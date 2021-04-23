import React from 'react';
import './VideoItem.css'
import moment from 'moment';


const VideoItem = (props) => {
    const {vid, onVidSelect} = props;
    return(
        <div onClick={() => onVidSelect(vid)} className="video-item item">
            <img className="ui image" alt={vid.snippet.title} src={vid.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                {vid.snippet.title}
                </div>
                <small>Posted at {moment(vid.snippet.publishedAt).format("lll")}</small>
            </div>
            
        </div>
    )
}

export default VideoItem;