import React from 'react';
import createReactClass from 'create-react-class';

var Todo = createReactClass ({
	render: function () {
		var {id, text, completed} = this.props;

		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type='checkbox' checked={completed}/>
				{text}
			</div>
		)
	}
});

module.exports = Todo;