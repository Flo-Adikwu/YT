import React from 'react';
import SearchBar from './SearchBar';
import youtoob from '../api/youtoob';
import VideoList from './VideoList';

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null,
    }

     onTermSubmit = async (term) => {
        const response = await youtoob.get('/search', {
            params:{
                q: term
            }
        })
        this.setState({videos: response.data.items})
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }


    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <p>Showing {this.state.videos.length} videos</p>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;