import React, { Component } from "react";
import "./App.css";
import BlogList from "./Components/BlogList";
import { Route, Switch } from "react-router-dom";
import Show from "./Components/Show";
import New from "./Components/New";
import Edit from "./Components/Edit";

class App extends Component {
	render() {
		console.log("Inside App");
		return (
			<div className="App">
				<Switch>
					<Route exact path="/blogs" component={BlogList} />
					<Route exact path="/blogs/new" component={New} />
					<Route exact path="/blogs/:id" component={Show} />
					<Route exact path="/blogs/:id/edit" component={Edit} />
				</Switch>
			</div>
		);
	}
}
export default App;
