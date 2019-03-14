import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";

import "@webscopeio/react-textarea-autocomplete/style.css";

import "./FocusedPost.css";

import $ from 'jquery';

class FocusedPost extends React.Component {
	match(token) {
		return this.props.posts.filter(p => p.postID.startsWith(token));
	}
	onCaretPositionChange = (position) => {
			console.log(`Caret position is equal to ${position}`);
	}
	componentDidMount() { $("#textArea").focus(function(){
			$("#textArea").height("100px");
		});
		$("#textArea").blur(function(){
			var prev = $("#textArea").text();
			setTimeout(() => {
				var curr = $("#textArea").text();
				if (prev === curr) {
					$("#textAreaDiv").removeClass("sticky");
					$("#textArea").height("24px");
				}
			}, 250);
		});
		$(document).ready(function () {
			var textArea = $("#textArea");
			var textAreaDiv = $("#textAreaDiv");
			var originalLocation = null;
			$(window).scroll(function (event) {
				if(textArea.is(":focus") && window.scrollY + $(window).height() < textArea.offset().top) {
					originalLocation = textArea.offset().top;
					textAreaDiv.addClass("sticky");
				}
				if(textArea.is(":focus") && window.scrollY + $(window).height() > originalLocation - 50) {
					originalLocation = null;
					textAreaDiv.removeClass("sticky");
				}
			});
		});
	}
	render() {
		var followups = this.props.focusedPost.followups.map((f)=><div style={{backgroundColor: "#f6f7f6", fontSize: "13px", marginBottom: "10px"}}>{f.body}</div>)
		const Item = ({ entity: { postID, title } }) => <div>{`${postID}: ${title}`}</div>;
		const rta = (
			<div>
			<ReactTextareaAutocomplete
				id="textArea"
				className="textArea"
				loadingComponent={() => <span>Loading</span>}
				trigger={{
					"@": {
						dataProvider: token => {
							return this.match(token)
								.slice(0, 10)
								.map(({ postID, title }) => ({ postID, title }));
						},
						component: Item,
						output: (item, trigger) => "@" + item.postID,
					}
				}}
				onCaretPositionChange={this.onCaretPositionChange}
				boundariesElement="div"
			/>
			</div>
		)
		return (
			<Container>
				<Container className="subContainer">
					<div className="subHeader">note</div>
					<h4 style={{fontSize:"20px"}}>@{this.props.focusedPost.postID}: {this.props.focusedPost.title}</h4>
					<p style={{fontSize:"13px"}}>{this.props.focusedPost.body}</p>
				</Container>
				<Container className="subContainer">
					<div className="subHeader">followup discussions</div>
						{followups}
						<div id="textAreaDiv" className="textAreaContainer">
							<div className="subHeader">start a new followup discussion</div>
							{rta}
						</div>
				</Container>
			</Container>
		);
	}
}

export default FocusedPost
