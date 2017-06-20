import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	// Make sure the spi gets called when valid text in entered
	it('should call onAddTodo if valid text entered', () => {

		var todoText = 'Finish React tutorial';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		// We are passing the jQuery selector that has the form element, we want to pul out the actual DOM node without jQuery which is the first element
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});

	it('should not call onAddTodo if invalid text entered', () => {

		var todoText = ''
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});


});