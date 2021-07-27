import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

class Show extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "",
			img: "",
			title: "",
			createdAt: "",
			content: "",
		};
	}

	async componentDidMount() {
		// console.log(this.props);
		let blog = await axios.get(`/blogs/${this.props.match.params.id}`);
		console.log(blog);
		this.setState(blog.data);
	}

	deleteBlogHandler = async () => {
		await axios.delete(`/blogs/${this.props.match.params.id}`);
		this.props.history.push("/blogs");
	};

	render() {
		return (
			<div className="blog">
				<Card style={{ width: "50rem", padding: "30px" }}>
					<Card.Img variant="top" src={this.state.img} />
					<blockquote className="blockquote mb-0 card-body">
						<p>{this.state.title}</p>

						<footer className="blockquote-footer">
							<small className="text-muted">
								<cite title="Source Title">{this.state.author}</cite>
							</small>
						</footer>
					</blockquote>
					<Card.Body>
						<Card.Text>
							{this.state.content}
							<br />
							<Link to={`/blogs/${this.props.match.params.id}/edit`}>
								<Button style={{ margin: "5px" }} variant="info">
									Edit
								</Button>
							</Link>
							<Link to={`/blogs/${this.props.match.params.id}`}>
								<Button
									style={{ margin: "5px" }}
									variant="danger"
									onClick={this.deleteBlogHandler}>
									Delete
								</Button>
							</Link>
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">
							<Moment fromNow>{this.state.createdAt}</Moment>
						</small>
					</Card.Footer>
				</Card>
			</div>
		);
	}
}
export default Show;
