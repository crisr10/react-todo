import expect from 'expect';

var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};
			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});
	describe('showToggleReducer', () => {
		it('should change completed status', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			};
			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});
});