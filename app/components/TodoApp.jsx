import React from 'react';
import createReactClass from 'create-react-class';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

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
	handleAddTodo: function(text) {
		alert('new todo: ' + text);
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;