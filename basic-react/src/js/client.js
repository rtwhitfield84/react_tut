import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {

	constructor() {
		super();
		this.name = "Richard";
	}
	render() {
		return (
			<h1>It Worked, {this.name}!</h1>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);