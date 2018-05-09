import { connect } from 'react-redux';

import { tryRegExp } from '../../utils';
import { refreshReviews, fetchReviewsStart as fetchReviews } from './reviews.actions';
import Reviews from './Reviews';

const mapStateToProps = ({ reviews: { data, loading, hasMore, page, error }, search, stars, order }) => {
    const regex = tryRegExp(search);
    let reviews = [...data];

    if (regex && search) {
        reviews = data.filter(
            ({ title, content, productTitle, childAsin }) =>
                regex.test(title) || regex.test(content) || regex.test(productTitle) || regex.test(childAsin)
        );
    } else if (search) {
        const pattern = search.toLowerCase();
        reviews = data.filter(
            ({ title, content, productTitle, childAsin }) =>
                title.toLowerCase().includes(pattern) ||
                content.toLowerCase().includes(pattern) ||
                productTitle.toLowerCase().includes(pattern) ||
                childAsin.toLowerCase().includes(pattern)
        );
    }

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
