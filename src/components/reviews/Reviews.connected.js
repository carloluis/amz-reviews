import { connect } from 'react-redux';
import { getReviewsInfo, getSearchFilter, getGroupFilter, getOrderFilter, getStarFilter } from '../../store/reducers';
import { refreshReviews, fetchReviewsStart as fetchReviews } from './reviews.actions';
import Reviews from './Reviews';

const mapStateToProps = state => {
    const { data, loading, hasMore, page, error } = getReviewsInfo(state);

    const reviews = getGroupFilter(state, getOrderFilter(state, getStarFilter(state, getSearchFilter(state, data))));

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
