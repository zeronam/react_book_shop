import React, {Component} from 'react';
import { connect } from 'react-redux';

import Filter from '../actions/filter_eng.js'

class MainEng extends Component {
	renderListEng(){

			return this.props.myArrWords.map( (item) => {
				const textDecoration = item.memorized? 'line-through' : 'none';
				return (
					<li key={item.id} className="list-group-item">
						<p style={{ textDecoration }}>{item.eng}</p>
						<p>{item.vn}</p>
					</li>
					
				)
			})
		}
  render(){
    return(
    	<div className="appEng">
	    	<h1>{this.props.myFilter}</h1>
	    	<ul className="listbox">
	    		{this.renderListEng()}
	    	</ul>
	    	<Filter />
    	</div>
    )
  }
}
function mapStateToProps(state) {
	return {
		myFilter: state.filterStatus,
		myArrWords: state.arrWords,
		textDecoration: state.memorized
	}
}

export default connect(mapStateToProps)(MainEng);