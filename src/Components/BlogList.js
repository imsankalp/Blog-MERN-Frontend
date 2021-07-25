import React, { Component } from "react";
import Blog from "./Blog";
import { Card, Button } from "react-bootstrap";
class BlogList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [
				{
					author: "Sankalp",
					title: "Test Blog 1",
					content:
						"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.",
					image:
						"https://images.unsplash.com/photo-1483422166412-1d8a821cd97c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
				},
				{
					author: "Sankalp",
					title: "Test Blog 2",
					content:
						"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.",
					image:
						"https://images.unsplash.com/photo-1483422166412-1d8a821cd97c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
				},
				{
					author: "Sankalp",
					title: "Test Blog 3",
					content:
						"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.",
					image:
						"https://images.unsplash.com/photo-1483422166412-1d8a821cd97c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
				},
				{
					author: "Sankalp",
					title: "Test Blog 4",
					content:
						"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.",
					image:
						"https://images.unsplash.com/photo-1483422166412-1d8a821cd97c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
				},
			],
		};
	}
	render() {
		let blogList = this.state.blogs.map((blog) => {
			return (
				<Blog
					title={blog.title}
					img={blog.image}
					content={blog.content}
					author={blog.author}
				/>
			);
		});
		return <div className="BlogList">{blogList}</div>;
	}
}
export default BlogList;
