import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_REVIEWS_START, REFRESH_REVIEWS, fetchReviewsSuccess, fetchReviewsError } from './reviews.actions';
import { fetchJSON } from '../../utils/fetch';

export function* fetchReviews({ page = 1 }) {
    try {
        const result = yield call(fetchJSON, `/reviews/${page}`);
        yield put(fetchReviewsSuccess(result));
    } catch (err) {
        yield put(fetchReviewsError(err));
    }
}

export default function* watch() {
    yield takeLatest(FETCH_REVIEWS_START, fetchReviews);
    yield takeLatest(REFRESH_REVIEWS, fetchReviews);
}
