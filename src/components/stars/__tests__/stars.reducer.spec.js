import { toggleStar } from '../stars.actions';
import reducer, { getStars, getStarFilter } from '../stars.reducer';

describe('stars.reducer', () => {
    describe('reducer', () => {
        it('should return default state', () => {
            const result = reducer(undefined, {});
            expect(result).toMatchObject([5]);
        });
        it('should return state with new star number', () => {
            const state = [5];
            const action = toggleStar(2);
            const result = reducer(state, action);
            expect(result).toMatchObject([5, 2]);
        });
        it('should return state without the star number', () => {
            const state = [2, 5];
            const action = toggleStar(2);
            const result = reducer(state, action);
            expect(result).toMatchObject([5]);
        });
    });

    describe('getStars', () => {
        it('return stars state', () => {
            const state = reducer(undefined, toggleStar(4));
            const result = getStars(state);
            expect(result).toBe(state);
        });
    });

    describe('getStarFilter', () => {
        it('return only reviews with stars included in the state', () => {
            const reviews = [{ stars: 5 }, { stars: 4 }, { stars: 3 }, { stars: 2 }, { stars: 1 }];
            const state = reducer(reducer(undefined, toggleStar(1)), toggleStar(4));
            const result = getStarFilter(state, reviews);
            expect(result).toMatchObject([{ stars: 5 }, { stars: 4 }, { stars: 1 }]);
        });
    });
});
