import React, { Component } from "react";

export default class Example extends Component {
	onClick = () => {
		console.log("clicked");
	}

	renderHeading = (heading) => heading;

	render() {
		return (
			<div className="div" name={this.props.name}>
				<h1 className="heading">{this.renderHeading("Heading")}</h1>
				<span className="span1">span1</span>
				<span className="span2">span2</span>
				<button className="button" onClick={this.onClick}>This is example component</button>
			</div>
		);
	}
}
