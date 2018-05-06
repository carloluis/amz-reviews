import { FETCH_REVIEWS_START, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_ERROR, REFRESH_REVIEWS } from './reviews.actions';

const DEFAULT_STATE = {
    data: [],
    hasMore: false,
    loading: false,
    page: 0,
    error: false
};

function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_REVIEWS_START:
            return {
                ...state,
                page: action.page,
                loading: true
            };
        case FETCH_REVIEWS_SUCCESS: {
            const { reviews, hasMore } = action.payload;
            return {
                ...state,
                loading: false,
                data: [...state.data, ...reviews],
                hasMore
            };
        }
        case FETCH_REVIEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case REFRESH_REVIEWS:
            return {
                ...DEFAULT_STATE,
                loading: true,
                page: 1
            };
        default:
            return state;
    }
}

export default reducer;
