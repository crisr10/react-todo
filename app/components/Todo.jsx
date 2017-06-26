import React from 'react';
import createReactClass from 'create-react-class';
import moment from 'moment';

var Todo = createReactClass ({
	render: function () {
		var {id, text, completed, createdAt, completedAt} = this.props;
		var renderDate = () => {
			var message = 'Created';
			var timestamp = createdAt;

			if(completed) {
				message = 'Completed';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
		};

		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type='checkbox' checked={completed}/>
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		)
	}
});

module.exports = Todo;