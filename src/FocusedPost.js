import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";

import "@webscopeio/react-textarea-autocomplete/style.css";

import "./FocusedPost.css";

import $ from 'jquery';

class FocusedPost extends React.Component {
	constructor(props) {
		super(props);
		this.handlePost = this.handlePost.bind(this);
	}
	match(token) {
		return this.props.posts.filter(p => p.postID.startsWith(token));
	}
	handlePost() {
		var followup = this.rtaRef.state.value;
		this.rtaRef.setState({value: ''});
		this.props.handlePost(followup);
	}
	onCaretPositionChange = (position) => {
			console.log(`Caret position is equal to ${position}`);
	}
	componentDidUpdate() {
		var prefill = this.props.focusedPost.prefillText;
		this.rtaRef.setState({value: prefill ? prefill : ''});
	}
	componentDidMount() {
		var prefill = this.props.focusedPost.prefillText;
		this.rtaRef.setState({value: prefill ? prefill : ''});
		$("#textArea").focus(function(){
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
			var originalLocation = null;
			$('#focusedPost').scroll(function (event) {
				var textArea = $("#textArea");
				var textAreaDiv = $("#textAreaDiv");
				var fpScrollTop = $('#focusedPost').scrollTop();
				var fpHeight = $('#focusedPost').height();
				var fpTopAndHeight = fpScrollTop + fpHeight - 20;
				var offsetTop = textArea.offset().top;
				//console.log(fpTopAndHeight + ' ' + textArea.offset().top);
				if(!textAreaDiv.hasClass("sticky") && textArea.is(":focus") && fpTopAndHeight < offsetTop) {
					originalLocation = offsetTop - 20;
					textAreaDiv.addClass("sticky");
				}
				console.log(fpTopAndHeight + ' ' + originalLocation);
				if(textAreaDiv.hasClass("sticky") && fpTopAndHeight > originalLocation) {
					originalLocation = null;
					textAreaDiv.removeClass("sticky");
				}
			});
		});
	}
	render() {
		var followups = this.props.focusedPost.followups.map((f, idx)=><div key={idx} style={{backgroundColor: "#f6f7f6", fontSize: "13px", marginBottom: "10px"}}>{f.body}</div>)
		const Item = ({ entity: { postID, title } }) => <div>{`${postID}: ${title}`}</div>;
		const rta = (
			<div>
			<ReactTextareaAutocomplete
				id="textArea"
				className="textArea"
				ref={ref => { this.rtaRef = ref; }}
				loadingComponent={() => <span>Loading</span>}
				trigger={{
					"@": {
						dataProvider: token => {
							return this.match(token)
								.map(({ postID, title }) => ({ postID, title }));
						},
						component: Item,
						output: (item, trigger) => "@" + item.postID,
					}
				}}
				boundariesElement="div"
			/>
			</div>)
		return (
			<Container id="focusedPost"  style={{overflowY: "scroll", height: "88vh"}}>
				<Container className="subContainer">
					<div className="subHeader">note</div>
					<h4 style={{fontSize:"20px"}}>@{this.props.focusedPost.postID}: {this.props.focusedPost.title}</h4>
					<p style={{fontSize:"13px", whiteSpace: "pre-wrap"}}>{this.props.focusedPost.body}</p>
				</Container>
				<Container className="subContainer">
					<div className="subHeader">followup discussions</div>
						{followups}
						<div id="textAreaDiv" className="textAreaContainer">
							<div className="subHeader">start a new followup discussion</div>
							{rta}
							<a style={{color:"blue", cursor:"pointer"}} onClick={this.handlePost}>post</a>
						</div>
				</Container>
			</Container>
		);
	}
}

export default FocusedPost
