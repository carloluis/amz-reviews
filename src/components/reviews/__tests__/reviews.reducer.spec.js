import { fetchReviewsStart, fetchReviewsSuccess, fetchReviewsError, refreshReviews } from '../reviews.actions';
import reducer, { DEFAULT_STATE, getReviewsInfo } from '../reviews.reducer';

describe('reviews.reducer', () => {
    describe('reducer', () => {
        it('should return default state', () => {
            const result = reducer(undefined, {});
            expect(result).toMatchObject({
                data: [],
                hasMore: false,
                loading: false,
                page: 0,
                error: false
            });
        });
        it('should handle FETCH_REVIEWS_START action', () => {
            const page = 10;
            const action = fetchReviewsStart(page);
            const result = reducer(DEFAULT_STATE, action);
            expect(result).toMatchObject({
                ...DEFAULT_STATE,
                loading: true,
                page
            });
        });
        it('should handle FETCH_REVIEWS_SUCCESS action', () => {
            const payload = { reviews: [], hasMore: true };
            const action = fetchReviewsSuccess(payload);
            const result = reducer(DEFAULT_STATE, action);
            expect(result).toMatchObject({
                ...DEFAULT_STATE,
                loading: false,
                data: [...DEFAULT_STATE.data, ...payload.reviews],
                hasMore: payload.hasMore
            });
        });
        it('should handle FETCH_REVIEWS_ERROR action', () => {
            const error = { code: 500 };
            const action = fetchReviewsError(error);
            const result = reducer(DEFAULT_STATE, action);
            expect(result).toMatchObject({
                ...DEFAULT_STATE,
                loading: false,
                error: true
            });
        });
        it('should handle REFRESH_REVIEWS action', () => {
            const action = refreshReviews();
            const result = reducer(DEFAULT_STATE, action);
            expect(result).toMatchObject({
                ...DEFAULT_STATE,
                loading: true,
                page: 1
            });
        });
    });

    describe('getReviewsInfo', () => {
        it('return reviews state', () => {
            const state = reducer(undefined, fetchReviewsStart());
            const result = getReviewsInfo(state);
            expect(result).toMatchObject(state);
        });
    });
});
