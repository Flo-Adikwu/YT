import axios from 'axios';
const KEY = 'AIzaSyAFaEzmx8uNvgzL7XLZY_D-1QCieT7JfHs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        TYPE: 'videos'
    }
})