import {
    FETCH_REVIEWS_START,
    fetchReviewsStart,
    FETCH_REVIEWS_SUCCESS,
    fetchReviewsSuccess,
    FETCH_REVIEWS_ERROR,
    fetchReviewsError,
    REFRESH_REVIEWS,
    refreshReviews
} from '../reviews.actions';

describe('reviews.actions', () => {
    it('should return FETCH_REVIEWS_START action with initial page', () => {
        const action = fetchReviewsStart();
        expect(action).toMatchObject({
            type: FETCH_REVIEWS_START,
            page: 1
        });
    });
    it('should return FETCH_REVIEWS_SUCCESS action', () => {
        const payload = [];
        const action = fetchReviewsSuccess(payload);
        expect(action).toMatchObject({
            type: FETCH_REVIEWS_SUCCESS,
            payload
        });
    });
    it('should return FETCH_REVIEWS_ERROR action', () => {
        const error = { code: 500 };
        const action = fetchReviewsError(error);
        expect(action).toMatchObject({
            type: FETCH_REVIEWS_ERROR,
            error
        });
    });
    it('should return REFRESH_REVIEWS action', () => {
        const action = refreshReviews();
        expect(action).toMatchObject({
            type: REFRESH_REVIEWS
        });
    });
});
