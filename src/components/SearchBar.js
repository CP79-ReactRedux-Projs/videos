import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };
	static defaultProps = { onSearchSubmit: null };

	onChange(term, call = false)
	{
		this.setState({ term: term });
		if(call) this.props.onSearchSubmit(term);
	}

	render()
	{
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={(e) => { e.preventDefault(); this.onChange(this.state.term, true); } } >
					<div className="field">
						<label>Video Search : </label>
						<input type="text" value={this.state.term} onChange={(e) => this.onChange(e.target.value)} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
