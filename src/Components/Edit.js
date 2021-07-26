import axios from "axios";
import React, { Component } from "react";

class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "",
			title: "",
			img: "",
			content: "",
		};
	}

	async componentDidMount() {
		let blog = await axios.get(`/blogs/${this.props.match.params.id}/edit`);
		console.log(blog);
		this.setState(blog.data);
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = async (e) => {
		e.preventDefault();
		console.log(this.state);
		await axios.patch(`/blogs/${this.props.match.params.id}`, this.state);
		this.props.history.push(`/blogs/${this.props.match.params.id}`);
	};
	render() {
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<label htmlFor="author">Author</label>
					<br />
					<input
						type="text"
						name="author"
						onChange={this.changeHandler}
						value={this.state.author}
					/>
					<br />
					<label htmlFor="title">Title</label>
					<br />
					<input
						type="text"
						name="title"
						onChange={this.changeHandler}
						value={this.state.title}
					/>
					<br />
					<label htmlFor="img">Image URL :</label>
					<br />
					<input
						type="text"
						name="img"
						onChange={this.changeHandler}
						value={this.state.img}
					/>
					<br />
					<label htmlFor="content">Content</label>
					<br />
					<textarea
						type="text"
						name="content"
						cols="30"
						row="5"
						onChange={this.changeHandler}
						value={this.state.content}
					/>
					<br />
					<br />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
export default Edit;
