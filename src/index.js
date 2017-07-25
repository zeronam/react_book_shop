import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/app";
import reducers from "./reducers";

import AppCount from "./components/app_count";

import MainEng from "./components/app_english";

// App Count Number
const defaultStateCount = {value: 0, highlight: false};
const reducerCount = (state = defaultStateCount, action) => {
	if (action.type === 'UP' ){ return {value: state.value + 1, highlight: state.highlight}};
	if (action.type === 'DOWN' ){ return {value: state.value - 1, highlight: state.highlight}};
	if (action.type === 'CHANGE_COLOR' ){ return {value: state.value, highlight: !state.highlight}};
	return state;
}

const defaultStateEng = {
	arrWords: [
		{id:1, eng: 'action', vn: 'hành động', memorized: true, iShow: false},
		{id:2, eng: 'hello', vn: 'xin chào', memorized: true, iShow: true},
		{id:3, eng: 'work', vn: 'công việc', memorized: false, iShow: false},
		{id:4, eng: 'server', vn: 'máy chủ', memorized: true, iShow: true},
		{id:5, eng: 'component', vn: 'thành phần', memorized: false, iShow: false},
		{id:6, eng: 'value', vn: 'giá trị', memorized: false, iShow: false},
		{id:7, eng: 'property', vn: 'thuộc tính', memorized: true, iShow: true},
		{id:8, eng: 'state', vn: 'trạng thái', memorized: false, iShow: true},
		{id:9, eng: 'connect', vn: 'kết nối', memorized: true, iShow: false},
		{id:10, eng: 'package', vn: 'đóng gói', memorized: true, iShow: true},
		{id:11, eng: 'config', vn: 'cấu hình', memorized: true, iShow: false}
	],
	filterStatus: 'SHOW_ALL',
	isAdding: false
};

const reducerEng = (state = defaultStateEng, action) => {
	switch(action.type){
			case 'FILTER_SHOW_ALL':
			return {...state, filterStatus: 'SHOW_ALL'};
			case 'FILTER_MEMORIZED':
			return {...state, filterStatus: 'MEMORIZED'};
			case 'FILTER_NEED_PRACTICE':
			return {...state, filterStatus: 'NEED_PRACTICE'};
	}
	return state;

}

ReactDOM.render(
	<div>
	<Provider store={createStore(reducers)}>
    <App />
  </Provider>
	<Provider store={createStore(reducerCount)}>
	<AppCount />
	</Provider>
	<Provider store={createStore(reducerEng)}>
	<MainEng />
	</Provider>
</div>
, document.querySelector('.container') );
