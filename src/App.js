import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class App extends Component{
	constructor(){
		super();
		this.state = {
			comments: [],
			userName: '',
			content: '',
			createdTime: ''
		}
	}
componentWillMount(){
	this._loadContent();
}

_loadContent(){
	const comments = JSON.parse(localStorage.getItem('content'));
	this.setState({comments});
}

	handleDelete(deleteIndex){
		const comments = this.state.comments;
		comments.splice(deleteIndex, 1);
		this.setState({comments});
	}



	handleSubmit(comment){
		this.setState({comment});
		this.state.comments.push(comment);
		localStorage.setItem('content', JSON.stringify(this.state.comments));
	}

	render(){
		return(
			<div className='wrapper'>
				<CommentInput onSubmit = {this.handleSubmit.bind(this)}/>
				<CommentList comments = {this.state.comments} deleteIndex = {this.handleDelete.bind(this)}/>
			</div>
			)
	}
}


export default App;