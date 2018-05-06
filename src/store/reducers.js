import { combineReducers } from 'redux';

import { reviewsReducer } from '../components/reviews';
import { searchReducer } from '../components/search';

const reducer = combineReducers({
    reviews: reviewsReducer,
    search: searchReducer
});

export default reducer;
