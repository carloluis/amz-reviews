import { combineReducers } from 'redux';

import { reviewsReducer } from '../components/reviews';

const reducer = combineReducers({
    reviews: reviewsReducer
});

export default reducer;
