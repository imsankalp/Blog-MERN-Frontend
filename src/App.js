import React, { Component } from "react";
import "./App.css";
import BlogList from "./Components/BlogList";

class App extends Component {
	render() {
		console.log("Inside App");
		return (
			<div className="App">
				<BlogList />
			</div>
		);
	}
}
export default App;
