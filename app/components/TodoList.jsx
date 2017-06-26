import React from 'react';
import createReactClass from 'create-react-class';
import Todo from 'Todo';

var TodoList = createReactClass({
	render: function () {
		var {todos} = this.props;
		var renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className='container__message'>Nothing to do</p>
				)
			}
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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