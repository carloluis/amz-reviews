import { connect } from 'react-redux';
import { getReviewsInfo, getReviewsBySearch, getSearch, getStars, getOrder } from '../../store/reducers';
import { refreshReviews, fetchReviewsStart as fetchReviews } from './reviews.actions';
import Reviews from './Reviews';

const mapStateToProps = state => {
    const { loading, hasMore, page, error } = getReviewsInfo(state);
    let reviews = getReviewsBySearch(state, getSearch(state));
    const stars = getStars(state);
    const order = getOrder(state);

    if (stars.length && stars.length < 5) {
        reviews = reviews.filter(review => stars.includes(review.stars));
    }
    if (order) {
        reviews = reviews.sort((r1, r2) => (r2.created - r1.created) * (order === 'Desc' ? 1 : -1));
    }

    return {
        reviews,
        loading,
        hasMore,
        page,
        error
    };
};

const mapDispatchToProps = { refreshReviews, fetchReviews };

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
