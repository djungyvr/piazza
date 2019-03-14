import React from 'react';
import './Post.css';

const aStyle = {
	backgroundColor: "#fff7ce"
}

const iStyle = {
	backgroundColor: "white"
}

class Post extends React.Component {
	render() {
		return (
			<div className="previewPost" key={this.props.post.postID} style={this.props.active ? aStyle : iStyle} onClick={(e) => this.props.onToggle(this.props.idx)}>
				<div>
					<div className="previewHeader">{this.props.post.title}</div>
					<div className="previewHeader" style={{float:"right"}}>{this.props.post.dow}</div>
				</div>
				<div>
					<div className="previewBody">{this.props.post.body.substring(0,32)} ...</div>
					<div className="previewBody" style={{float:"right", color:"blue"}}>@{this.props.post.postID}</div>
				</div>
			</div>
		);
	}
}

export default Post
