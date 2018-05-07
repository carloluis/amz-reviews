import { connect } from 'react-redux';

import { refreshReviews, fetchReviewsStart as fetchReviews } from './reviews.actions';
import Reviews from './Reviews';

const mapStateToProps = ({ reviews: { data, loading, hasMore, page, error }, search }) => {
    const regex = new RegExp(search, 'i');
    const reviews = search
        ? data.filter(
              ({ title, content, productTitle, childAsin }) =>
                  regex.test(title) || regex.test(content) || regex.test(productTitle) || regex.test(childAsin)
          )
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
