import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{

	handleDelete(deleteIndex){
		this.props.deleteIndex(deleteIndex);
	}

	render(){
		return(
			<div>
				{this.props.comments.map((comment, i)=> <Comment key={i} index={i} comment = {comment} deleteIndex={this.handleDelete.bind(this)}/>)}
			</div>
			)
	}
}

export default CommentList;