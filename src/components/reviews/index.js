import Reviews from './Reviews.connected';
import reviewsReducer from './reviews.reducer';
import { getReviewsInfo, getReviewsBySearch } from './reviews.selectors';

export { reviewsReducer, getReviewsInfo, getReviewsBySearch };

export default Reviews;
