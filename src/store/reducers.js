import { combineReducers } from 'redux';

import { orderByReducer } from '../components/order-by';
import { reviewsReducer } from '../components/reviews';
import { searchReducer } from '../components/search';
import { starsReducer } from '../components/stars';

const reducer = combineReducers({
    order: orderByReducer,
    reviews: reviewsReducer,
    search: searchReducer,
    stars: starsReducer
});

export default reducer;
