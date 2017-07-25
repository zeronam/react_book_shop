import React, { Component } from 'react';

export default class Filter extends Component{
	render(){
		return(
			<ul className="list_button">
	    		<li><button type="button">Show All</button></li>
	    		<li><button type="button">Memorized</button></li>
	    		<li><button type="button">Need Practice</button></li>
	    	</ul>
		)
	}
}