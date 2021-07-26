import React, { Component } from "react";
import axios from "axios";

class New extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "",
			title: "",
			img: "",
			content: "",
		};
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = async (e) => {
		e.preventDefault();
		await axios.post("/blogs", this.state);
		this.props.history.push("/blogs");
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<label htmlFor="author">Author</label>
					<br />
					<input type="text" name="author" onChange={this.changeHandler} />
					<br />
					<label htmlFor="title">Title</label>
					<br />
					<input type="text" name="title" onChange={this.changeHandler} />
					<br />
					<label htmlFor="img">Image URL :</label>
					<br />
					<input type="text" name="img" onChange={this.changeHandler} />
					<br />
					<label htmlFor="content">Content</label>
					<br />
					<textarea
						type="text"
						name="content"
						cols="30"
						row="5"
						onChange={this.changeHandler}
					/>
					<br />
					<br />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
export default New;
