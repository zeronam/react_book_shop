import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controller from '../reducers/updownpoint';

class AppCount extends Component{

	render(){
    const color = this.props.myHighLight ? 'yellow' : 'black';
		return(
			<div>
			<h1 style={{color}}>{this.props.myValue}</h1>
			<Controller />
			</div>
		);
	}
}

function mapStateToProps(state) {
		return {
      myValue: state.value,
      myHighLight: state.highlight
    };
}
export default connect(mapStateToProps)(AppCount);
