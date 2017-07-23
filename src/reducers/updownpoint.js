import React, {Component} from 'react';
import { connect } from 'react-redux';

import ChangeColor from '../actions/change_color';
class Controller extends Component {
  onDownKey(){
    this.props.dispatch({type: 'DOWN'})
  }
  render(){
    return(
      <div>
        <button onClick={ () => {
            this.props.dispatch({type: 'UP'})
        }}>Up</button>
        <button onClick={this.onDownKey.bind(this)}>Down</button>
        <ChangeColor />
      </div>
    )
  }
}

export default connect()(Controller)
