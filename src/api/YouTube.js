import Axios from 'axios';

const YTKEY = 'AIzaSyB-eCQfFewQwXuWhZWqC5pNdMnAUrlsEi8';

export default Axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		key: YTKEY,
		part: 'snippet',
		type: 'video',
		maxResults: 5
	}
});
