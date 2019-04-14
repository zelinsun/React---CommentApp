import React, {Component} from 'react';

class CommentInput extends Component{
	constructor(){
		super();
		this.state = {
			userName:'',
			content: '',
			createdTime: ''
		}
	}

	componentWillMount(){
		this._loadName();
	}

	componentDidMount(){
		this.textarea.focus();
	}

	nameChange(event){
		this.setState({
			userName: event.target.value
		})
	}

	_loadName(){
		const name = localStorage.getItem('name');
		if(name){
			this.setState({userName: name});
		}
	}

	nameBlur(event){
		const name = event.target.value;
		localStorage.setItem('name', name);
	}

	contentChange(event){
		this.setState({
			content: event.target.value
			})
	}

handleSubmit(){
	const time = new Date();
	this.setState({createdTime: time.toString()});
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
						<input value = {this.state.userName} onChange = {(this.nameChange.bind(this))} onBlur = {this.nameBlur.bind(this)}/>
					</div>
				</div>
				<div className='comment'>
					<span>Comments</span>
					<div className='commentInput'> 
						<textarea ref = {(textarea)=> this.textarea = textarea} value = {this.state.content} onChange = {(this.contentChange.bind(this))}/> 
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