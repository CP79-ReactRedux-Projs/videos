import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
	static defaultProps = { videos: [], onVideoSelect: null };

	render()
	{
		let ret = null;
		if (this.props.videos.length <= 0)
		{
			ret = (
				<div className="video-list">List Loading...</div>
			);
		}
		else
		{
			const vids = this.props.videos.map(vid => <VideoItem key={vid.id.videoId} video={vid} onVideoSelect={(vid) => this.props.onVideoSelect(vid)} />);
			ret = (
				<div className="video-list ui relaxed divided list">{vids}</div>
			);
		}
		return ret;
	}
}

export default VideoList;
