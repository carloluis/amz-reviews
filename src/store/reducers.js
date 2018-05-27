import { combineReducers } from 'redux';

import {
    groupByReducer,
    getGroup as getGroupSelector,
    getGroupFilter as getGroupFilterSelector
} from '../components/group-by';
import {
    orderByReducer,
    getOrder as getOrderSelector,
    getOrderFilter as getOrderFilterSelector
} from '../components/order-by';
import { reviewsReducer, getReviewsInfo as getReviewsInfoSelector } from '../components/reviews';
import {
    searchReducer,
    getSearch as getSearchSelector,
    getSearchFilter as getSearchFilterSelector
} from '../components/search';
import {
    starsReducer,
    getStars as getStarsSelector,
    getStarFilter as getStarFilterSelector
} from '../components/stars';

const reducer = combineReducers({
    group: groupByReducer,
    order: orderByReducer,
    reviews: reviewsReducer,
    search: searchReducer,
    stars: starsReducer
});

export default reducer;

export const getGroup = ({ group }) => getGroupSelector(group);
export const getGroupFilter = ({ group }, reviews) => getGroupFilterSelector(group, reviews);
export const getOrder = ({ order }) => getOrderSelector(order);
export const getOrderFilter = ({ order }, reviews) => getOrderFilterSelector(order, reviews);
export const getReviewsInfo = ({ reviews }) => getReviewsInfoSelector(reviews);
export const getSearch = ({ search }) => getSearchSelector(search);
export const getSearchFilter = ({ search }, reviews) => getSearchFilterSelector(search, reviews);
export const getStars = ({ stars }) => getStarsSelector(stars);
export const getStarFilter = ({ stars }, reviews) => getStarFilterSelector(stars, reviews);
