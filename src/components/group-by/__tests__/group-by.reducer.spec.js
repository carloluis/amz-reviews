import { groupBy } from '../group-by.actions';
import reducer, { getGroup, getGroupFilter } from '../group-by.reducer';

describe('group-by.reducer', () => {
    describe('reducer', () => {
        it('should return default state', () => {
            const result = reducer(undefined, {});
            expect(result).toBe('');
        });
        it('should return state when updating', () => {
            const state = 'Month';
            const action = groupBy('Day');
            const result = reducer(state, action);
            expect(result).toBe('Day');
        });
        it('should return previous state otherwise', () => {
            const state = 'Year';
            const result = reducer(state, {});
            expect(result).toBe(state);
        });
    });

    describe('getGroup', () => {
        it('return groupBy state', () => {
            const state = reducer(undefined, groupBy('Day'));
            const result = getGroup(state);
            expect(result).toBe(state);
        });
    });

    describe('getGroupFilter', () => {
        it('return reviews grouped by...', () => {
            const value = 'Month';
            const reviews = [{ created: 1528940971610 }, { created: 1526180400000 }];
            const state = reducer(undefined, groupBy(value));
            const result = getGroupFilter(state, reviews);
            expect(result).toMatchObject([
                { key: 'June 2018', values: [{ created: 1528940971610 }] },
                { key: 'May 2018', values: [{ created: 1526180400000 }] }
            ]);
        });
    });
});
