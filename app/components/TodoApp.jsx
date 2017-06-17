import React from 'react';
import createReactClass from 'create-react-class';
import TodoList from 'TodoList';

const TodoApp = createReactClass({
	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				}, {
					id: 2,
					text: 'Clean the yard'
				}, {
					id: 3,
					text: 'Study React'
				}, {
					id: 4,
					text: 'Visit my gf'
				}
			]
		};
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}
});

module.exports = TodoApp;