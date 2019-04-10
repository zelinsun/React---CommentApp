import React, {Component} from 'react';

class Comment extends Component{
	render(){
		return(
			<div>
				<div className = 'userName'>
					{this.props.comment.userName}
				</div>
				<div className = 'content'>
					{this.props.comment.content}
				</div>
				<hr/>
			</div>
			)
	}
}

export default Comment;