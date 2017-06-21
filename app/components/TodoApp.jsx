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
					text: 'Walk the dog'
				}, {
					id: uuid(),
					text: 'Clean the yard'
				}, {
					id: uuid(),
					text: 'Study React'
				}, {
					id: uuid(),
					text: 'Visit my gf'
				}
			]
		};
	},
	handleAddTodo: function(text) {
		this.setState({
			todos: [
			...this.state.todos, {
				id: uuid(),
				text: text
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
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;