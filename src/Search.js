import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		this._handleKeyPress = this._handleKeyPress.bind(this);
		this._onBlur = this._onBlur.bind(this);
		this.updateInputValue = this.updateInputValue.bind(this);
	}
	_handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.props.handleSearch(this.state.inputValue);
		}
	}
	_onBlur(e) {
		setTimeout(() => {
			this.props.handleResetSearch();
			this.setState({
				inputValue: ''
			})
		}, 500);
	}
	updateInputValue(e) {
		this.setState({
			inputValue: e.target.value
		});
	}
	render() {
		return (
			<div style={{height: "37px", backgroundColor: "#707d8d", padding: "2px"}}>
				<Button style={{fontSize: "12px"}}>New Post</Button>
				<input
					value={this.state.inputValue}
					style={{width: "220px", height: "100%", float: "right", fontSize: "12px"}}
					placeholder="search post by text or @PostNumber"
					type="text"
					onKeyPress={this._handleKeyPress}
					onChange={e => this.updateInputValue(e)}
					onBlur={this._onBlur}
				/>
			</div>
		);
	}
}

export default Search;
