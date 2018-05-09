import { combineReducers } from 'redux';

import { orderByReducer, getOrder as getOrderSelector } from '../components/order-by';
import {
    reviewsReducer,
    getReviewsInfo as getReviewsInfoSelector,
    getReviewsBySearch as getReviewsBySearchSelector
} from '../components/reviews';
import { searchReducer, getSearch as getSearchSelector } from '../components/search';
import { starsReducer, getStars as getStarsSelector } from '../components/stars';

const reducer = combineReducers({
    order: orderByReducer,
    reviews: reviewsReducer,
    search: searchReducer,
    stars: starsReducer
});

export default reducer;

export const getOrder = ({ order }) => getOrderSelector(order);
export const getReviewsInfo = ({ reviews }) => getReviewsInfoSelector(reviews);
export const getReviewsBySearch = ({ reviews }, search) => getReviewsBySearchSelector(reviews, search);
export const getSearch = ({ search }) => getSearchSelector(search);
export const getStars = ({ stars }) => getStarsSelector(stars);
