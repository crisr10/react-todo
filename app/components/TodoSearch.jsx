import React from 'react';
import createReactClass from 'create-react-class';

var TodoSearch = createReactClass({
	handleSearch: function () {
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},
	render: function ()
 {
 	return (
 		<div>
 			<div>
 				<input type='search' ref='searchText' placeholder='Search todos' onChange={this.handleSearch}/>
 			</div>
 			<div>
 				<label htmlFor="">
 					<input type='checkbox' ref='showCompleted' onChange={this.handleSearch}/>
 					Show completed todos
 				</label>
 			</div>
 		</div>
 	)
 }});

module.exports = TodoSearch;