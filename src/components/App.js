import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YouTube from '../api/YouTube';

class App extends React.Component {
	state = { videos: [], video: null };
	static defaultProps = { };

	async onSearched(term)
	{
		const res = await YouTube.get('/search', { params: { q: term } });
		this.setState({ videos: res.data.items, video: res.data.items[0] });
	}

	componentDidMount()
	{
		this.onSearched('');
	}

	render()
	{
		return (
			<div className="app ui container">
				<br />
				<SearchBar onSearchSubmit={(term) => this.onSearched(term)} />
				<div className="ui grid">
					<div className="row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.video} />
						</div>
						<div className="five wide column">
							<VideoList videos={this.state.videos} onVideoSelect={(video) => this.setState({ video })} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
