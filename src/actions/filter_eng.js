import React, { Component } from 'react';
import {connect} from 'react-redux'

class Filter extends Component{
	getTextStyle(statusName){
		const {myFilterStatus} = this.props;
		if (statusName === myFilterStatus){
			return {color: 'red', fontWeight: 'bold'}
		} else {
			return {color: 'black', fontWeight: 'normal'}
		}
	}
	setFilterStatus(actionType){
		this.props.dispatch({type: actionType})
	}
	render(){
		return(
			<ul className="list_button">
	    		<li><button type="button" onClick={ () => this.setFilterStatus('FILTER_SHOW_ALL')} style={this.getTextStyle("SHOW_ALL")}>Show All</button></li>
	    		<li><button type="button" onClick={ () => this.setFilterStatus('FILTER_MEMORIZED')} style={this.getTextStyle("MEMORIZED")}>Memorized</button></li>
	    		<li><button type="button" onClick={ () => this.setFilterStatus('FILTER_NEED_PRACTICE')} style={this.getTextStyle("NEED_PRACTICE")}>Need Practice</button></li>
	    	</ul>
		)
	}
}
function mapStateToProps(state){
	return {
		myFilterStatus: state.filterStatus
	}
}

export default connect(mapStateToProps)(Filter);
