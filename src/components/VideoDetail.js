import React from 'react';

class VideoDetail extends React.Component {
	static defaultProps = { video: null };

	render()
	{
		let ret = null;
		const video = this.props.video;
		if (!video)
		{
			ret = (
				<div className="video-detail">Video Loading...</div>
			);
		}
		else
		{
			const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
			const {title, description} = video.snippet;
			ret = (
				<div className="video-detail">
					<div className="ui embed">
						<iframe src={vidSrc} title="video player" frameBorder="0"></iframe>
					</div>
					<div className="ui segment">
						<h5 className="ui header">{title}</h5>
						<hr />
						<p>{description}</p>
					</div>
				</div>
			);
		}

		return ret;
	}
}

export default VideoDetail;
