import { orderBy } from '../order-by.actions';
import reducer, { getOrder, getOrderFilter } from '../order-by.reducer';

describe('order-by.reducer', () => {
    describe('reducer', () => {
        it('should return default state', () => {
            const result = reducer(undefined, {});
            expect(result).toBe('');
        });
        it('should return state when updating', () => {
            const state = 'Desc';
            const action = orderBy('Asc');
            const result = reducer(state, action);
            expect(result).toBe('Asc');
        });
        it('should return previous state otherwise', () => {
            const state = 'Asc';
            const result = reducer(state, {});
            expect(result).toBe(state);
        });
    });

    describe('getOrder', () => {
        it('return orderBy state', () => {
            const state = reducer(undefined, orderBy('Asc'));
            const result = getOrder(state);
            expect(result).toBe(state);
        });
    });

    describe('getOrderFilter', () => {
        it('return reviews ordered by...', () => {
            const value = 'Asc';
            const reviews = [{ created: 1528940971610 }, { created: 1526180400000 }];
            const state = reducer(undefined, orderBy(value));
            const result = getOrderFilter(state, reviews);
            expect(result).toMatchObject([{ created: 1526180400000 }, { created: 1528940971610 }]);
        });
    });
});
