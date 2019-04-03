import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from './Post';
import FocusedPost from './FocusedPost';
import Header from './Header';
import Search from './Search';

import './App.css';

import allPosts from './Posts';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focusedPost: allPosts[0],
			posts: allPosts,
		}
		this.handleToggle = this.handleToggle.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleResetSearch = this.handleResetSearch.bind(this);
		this.handlePost = this.handlePost.bind(this);
	}
	handleToggle(idx) {
		this.setState({focusedPost: this.state.posts[idx]});
	}
	handleResetSearch() {
		this.setState({posts: allPosts});
	}
	handlePost(followup) {
		var fp = this.state.focusedPost;
		fp.followups.push({body: followup});
		console.log(fp);
		this.setState({focusedPost: fp});
	}
	handleSearch(query) {
		if (query.length === 0) {
			return;
		}
		if (query[0] === '@') {
			var postID = query.substring(1, query.length);
			var newFocusedPost = allPosts.filter((p) => p.postID === postID)[0];
			if (newFocusedPost) {
				this.setState({focusedPost: newFocusedPost});
			}
		} else {
			this.setState({posts: allPosts.filter((p) => p.body.includes(query) || p.title.includes(query))});
		}
	}
	render() {
		var renderPosts = this.state.posts.map(function(post, idx) {
			return <Post
				key={post.postID}
				idx={idx}
				post={post}
				active={post.postID === this.state.focusedPost.postID}
				onToggle={this.handleToggle}/>
		}, this);
		return (
			<div>
			<Header/>
			<Row noGutters={true}>
				<Col xs={3}>
					<Search handleSearch={this.handleSearch} handleResetSearch={this.handleResetSearch}/>
					<div style={{overflowY: "scroll", height: "84vh"}}>
					{renderPosts}
					</div>
				</Col>
				<Col>
					<FocusedPost
						posts={allPosts}
						focusedPost={this.state.focusedPost}
						handlePost={this.handlePost}
					/>
				</Col>
			</Row>
			</div>
		);
	}
}

export default App;
