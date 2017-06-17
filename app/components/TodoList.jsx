import React from 'react';
import createReactClass from 'create-react-class';
import Todo from 'Todo';

var TodoList = createReactClass({
	render: function () {
		var {todos} = this.props;
		var renderTodos = () => {
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo}/>
				);
			});
		};
		return (
			<div>
				{renderTodos()}
			</div>
		)
	}
});

module.exports = TodoList;