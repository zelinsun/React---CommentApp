import React, {Component} from 'react';

class CommentInput extends Component{
	constructor(){
		super();
		this.state = {
			userName:'',
			content: ''
		}
	}

	nameChange(event){
		this.setState({
			userName: event.target.value
		})
	}

	contentChange(event){
		this.setState({
			content: event.target.value
			})
	}

handleSubmit(){
	const comment = this.state;
	if(!comment.userName){
		return alert('Please enter username');
	}
	if(!comment.content){
		return alert("Please enter your comments");
	}
	this.props.onSubmit(comment);
	this.setState({content: ''});
}

	render(){
		return(
			<div className = 'commentInput'>
				<div className='name'>
					<span>User name:</span>
					<div className='nameInput'>
						<input value = {this.state.userName} onChange = {(this.nameChange.bind(this))}/>
					</div>
				</div>
				<div className='comment'>
					<span>Comments</span>
					<div className='commentInput'> 
						<textarea value = {this.state.content} onChange = {(this.contentChange.bind(this))}/> 
					</div>
				</div>
				<div>
					<button onClick = {this.handleSubmit.bind(this)}>Submit</button>
				</div>
			</div>
			)
	}
}

export default CommentInput;