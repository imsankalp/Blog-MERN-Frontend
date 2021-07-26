import React, { Component } from "react";
import Blog from "./Blog";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
class BlogList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [],
		};
	}
	async componentDidMount() {
		const fetchedBlogs = await axios.get("/blogs");
		console.log(fetchedBlogs);
		this.setState({ blogs: fetchedBlogs.data });
	}
	render() {
		let blogList = this.state.blogs.map((blog) => {
			return (
				<Blog
					key={blog._id}
					id={blog._id}
					title={blog.title}
					img={blog.img}
					content={blog.content}
					author={blog.author}
					createdAt={blog.createdAt}
				/>
			);
		});
		return <div className="BlogList">{blogList}</div>;
	}
}
export default BlogList;
