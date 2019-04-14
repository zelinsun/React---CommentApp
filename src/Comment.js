import React, {Component} from 'react';

class Comment extends Component{

	handleClick(){
		this.props.deleteIndex(this.props.index);
	}

	render(){
		return(
			<div>
				<div className = 'userName'>
					{this.props.comment.userName}
				</div>
				<div className = 'content'>
					{this.props.comment.content}
				</div>
				<div className = 'createdTime'>
					{this.props.comment.createdTime}
				</div>
				<button onClick = {this.handleClick.bind(this)}>Delete</button>
				<hr/>
			</div>
			)
	}
}

export default Comment;