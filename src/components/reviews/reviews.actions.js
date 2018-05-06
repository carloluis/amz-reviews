export const FETCH_REVIEWS_START = 'FETCH_REVIEWS_START';
export const fetchReviewsStart = (page = 1) => ({
    type: FETCH_REVIEWS_START,
    page
});

export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const fetchReviewsSuccess = payload => ({
    type: FETCH_REVIEWS_SUCCESS,
    payload
});

export const FETCH_REVIEWS_ERROR = 'FETCH_REVIEWS_ERROR';
export const fetchReviewsError = error => ({
    type: FETCH_REVIEWS_ERROR,
    error
});

export const REFRESH_REVIEWS = 'REFRESH_REVIEWS';
export const refreshReviews = () => ({
    type: REFRESH_REVIEWS
});
