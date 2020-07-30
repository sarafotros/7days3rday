import React, { Component } from 'react';
import './Joke.css';

export default class Joke extends Component {
	state = {
		joke: '',
	};

	handleFetch = () => {
		fetch('https://api.chucknorris.io/jokes/random')
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					joke: data.value,
				})
			);
	};

	render() {
		const { joke } = this.state;
		return (
			<div className="joke">
				<h2>Joke</h2>
				<h3>{joke && joke}</h3>
				<button onClick={this.handleFetch}>Fetch</button>
			</div>
		);
	}
}
