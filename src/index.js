import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/app";
import reducers from "./reducers";





// class App extends Component {
// 	render(){
// 		return <div>Hello</div>
// 	}
// };

ReactDOM.render( 
	  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
, document.querySelector('.container') );