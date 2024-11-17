import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
	static defaultProps = { video: {}, onVideoSelect: null };

	render()
	{
		const {title, thumbnails} = this.props.video.snippet;
		return (
			<div className="video-item item" onClick={() => this.props.onVideoSelect(this.props.video)}>
				<img className="ui image" src={thumbnails.medium.url} alt="Thumbnail" />
				<div className="content">
					<div className="header">{title}</div>
				</div>
			</div>
		);
	}
}

export default VideoItem;
