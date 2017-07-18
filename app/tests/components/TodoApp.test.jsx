import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

var configureStore = require('configureStore');
import TodoList from 'TodoList';
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should render TodoList', () => {
		var store = configureStore.configure();
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<TodoApp/>
			</Provider>
		);

		var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
		var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

		expect(todoList.length).toEqual(1);
	});
});