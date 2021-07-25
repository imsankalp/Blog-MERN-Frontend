import React, { Component } from "react";
import "./Blog.css";
import { Card } from "react-bootstrap";
class Blog extends Component {
	render() {
		return (
			<div className="blog">
				<Card style={{ width: "40rem", padding: "30px" }}>
					<Card.Img variant="top" src={this.props.img} />
					<blockquote className="blockquote mb-0 card-body">
						<p>{this.props.title}</p>

						<footer className="blockquote-footer">
							<small className="text-muted">
								<cite title="Source Title">{this.props.author}</cite>
							</small>
						</footer>
					</blockquote>
					<Card.Body>
						<Card.Text>{this.props.content}</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">{this.props.createdAt}</small>
					</Card.Footer>
				</Card>
			</div>
		);
	}
}
export default Blog;
