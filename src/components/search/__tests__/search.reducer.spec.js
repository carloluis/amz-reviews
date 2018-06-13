import { updateSearch } from '../search.actions';
import reducer, { getSearch, getSearchFilter } from '../search.reducer';

describe('search.reducer', () => {
    describe('reducer', () => {
        it('should return default state', () => {
            const result = reducer(undefined, {});
            expect(result).toBe('');
        });
        it('should return state when updating', () => {
            const state = 'prev value';
            const action = updateSearch('new');
            const result = reducer(state, action);
            expect(result).toBe('new');
        });
        it('should return previous state otherwise', () => {
            const state = 'prev value';
            const action = {};
            const result = reducer(state, action);
            expect(result).toBe('prev value');
        });
    });

    describe('getSearch', () => {
        it('return search state', () => {
            const state = reducer(undefined, updateSearch('some'));
            const result = getSearch(state);
            expect(result).toBe(state);
        });
    });

    describe('getSearchFilter', () => {
        it('return only reviews filtered by search value', () => {
            const value = 'rst';
            const reviews = [
                { title: 'first', content: 'lorem ipsum', productTitle: '', childAsin: '' },
                { title: 'second', content: 'dolor sit amet', productTitle: '', childAsin: '' }
            ];
            const state = reducer(undefined, updateSearch(value));
            const result = getSearchFilter(state, reviews);
            expect(result).toMatchObject([{ title: 'first', content: 'lorem ipsum', productTitle: '', childAsin: '' }]);
        });
    });
});
