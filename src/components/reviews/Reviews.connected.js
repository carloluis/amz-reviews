import { connect } from 'react-redux';

import { refreshReviews, fetchReviewsStart as fetchReviews } from './reviews.actions';
import Reviews from './Reviews';

const mapStateToProps = ({ reviews: { data, loading, hasMore, page, error }, search, stars }) => {
    // TODO: check for invalid chars inside search
    const regex = new RegExp(search, 'i');
    let reviews = search
        ? data.filter(
              ({ title, content, productTitle, childAsin }) =>
                  regex.test(title) || regex.test(content) || regex.test(productTitle) || regex.test(childAsin)
          )
        : data;

    if (stars.length && stars.length < 5) {
        reviews = reviews.filter(review => stars.includes(review.stars));
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
