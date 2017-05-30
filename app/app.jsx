var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp'

// Load foundaion
$(document).foundation();

// App scss
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);