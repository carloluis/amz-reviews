import { combineReducers } from 'redux';

import { reviewsReducer } from '../components/reviews';
import { searchReducer } from '../components/search';
import { starsReducer } from '../components/stars';

const reducer = combineReducers({
    reviews: reviewsReducer,
    search: searchReducer,
    stars: starsReducer
});

export default reducer;
