import React from 'react';
import createReactClass from 'create-react-class';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

const TodoApp = createReactClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog',
					completed: false
				}, {
					id: uuid(),
					text: 'Clean the yard',
					completed: true

				}, {
					id: uuid(),
					text: 'Study React',
					completed: true

				}, {
					id: uuid(),
					text: 'Visit my gf',
					completed: false

				}
			]
		};
	},
	handleToggle(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});

		this.setState({todos: updatedTodos});
	},
	handleAddTodo: function(text) {
		this.setState({
			todos: [
			// js spread operator
			...this.state.todos, {
				id: uuid(),
				text: text,
				completed: false
			}]
		})
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;