import React, {Component} from 'react';
import { connect } from 'react-redux';

import Filter from '../actions/filter_eng.js'

class MainEng extends Component {
	memorizedWord(){
		this.props.dispatch({
			type: 'TOGGLE_MEMORIZED',
			id: this.props.myArrWords.id
		});
	}
	getWordList(){
		const {myFilter, myArrWords} = this.props;		
		if (myFilter === 'MEMORIZED'){ return myArrWords.filter(e => e.memorized);};
		if (myFilter === 'NEED_PRACTICE'){ return myArrWords.filter(e => !e.memorized);};
		return myArrWords;
	}
	renderListEng(){
			return this.getWordList().map( (item) => {

				const textDecoration = item.memorized? 'line-through' : 'none';
				const memorizedTextButton = item.memorized? 'forget' : 'memorized';
				console.log(memorizedTextButton);
				return (
					<li key={item.id} className="list-group-item">
						<p style={{ textDecoration }}>{item.eng}</p>
						<p>{item.vn}</p>
						<div><button onClick={this.memorizedWord.bind(this)}>{memorizedTextButton}</button><button>Show</button></div>
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