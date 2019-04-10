import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class App extends Component{
	constructor(){
		super();
		this.state = {
			comments: [],
			userName: '',
			content: ''
		}
	}
	handleSubmit(comment){
		this.setState({userName:comment.userName, content:comment.content });
		this.state.comments.push(comment);
	}

	render(){
		return(
			<div className='wrapper'>
				<CommentInput onSubmit = {this.handleSubmit.bind(this)}/>
				<CommentList comments = {this.state.comments}/>
			</div>
			)
	}
}


export default App;