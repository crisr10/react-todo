import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());
// Load foundaion
$(document).foundation();

// App scss
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);