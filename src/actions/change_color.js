import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChangeColor extends Component {
  render(){
    const color = this.props.myHighLight ? 'blue' : 'black';
    return (
      <button style={{color}} onClick={ () => this.props.dispatch({ type: 'CHANGE_COLOR' }) }>Change Color</button>
    )
  }
}
 export default connect(
   function(state){
    return {myHighLight: state.highlight}
   }
 )(ChangeColor);
