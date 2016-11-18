import React from 'react';

class Hello extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "From State"
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

handleChange(event) {
	this.state.name = event.target.value;
}

handleClick(event) {
	this.setState({name: this.state.name});
}

    render() {
        return (
        	<div>
        		<div>Hello {this.state.name}!</div>
        		<input type="text" onChange={this.handleChange}/>
        		<button type="button" onClick={this.handleClick}>Greet</button>
        	</div>
    	);
    }
}

export default Hello;
