import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

// Load foundaion
$(document).foundation();

// App scss
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('app')
);