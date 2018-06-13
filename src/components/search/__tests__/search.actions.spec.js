import { UPDATE_SEARCH, updateSearch } from '../search.actions';

describe('search.actions', () => {
    it('should return UPDATE_SEARCH action', () => {
        const value = 'x';
        const action = updateSearch(value);
        expect(action).toMatchObject({
            type: UPDATE_SEARCH,
            value
        });
    });
});
