import { connect } from 'react-redux';

import { refreshReviews, fetchReviewsStart as fetchReviews } from './reviews.actions';
import Reviews from './Reviews';

const mapStateToProps = ({ reviews: { data, loading, hasMore, page, error }, search }) => {
    const reviews = search
        ? data.filter(review => review.title.includes(search) || review.content.includes(search))
        : data;
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
