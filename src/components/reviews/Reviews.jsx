import React from 'react';
import PropTypes from 'prop-types';
import Review from './review/Review';
import Button from './button/Button';
import styles from './Reviews.scss';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        this.props.refreshReviews();
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        const { loading, page, fetchReviews, hasMore } = this.props;
        if (!hasMore) {
            window.removeEventListener('scroll', this.handleScroll);
        }

        const { documentElement } = document;
        if (!loading && documentElement.scrollHeight - documentElement.scrollTop === documentElement.clientHeight) {
            fetchReviews(page + 1);
        }
    }
    render() {
        const { loading, reviews, refreshReviews } = this.props;

        return (
            <div className={styles.container}>
                <Button text="REFRESH" onClick={refreshReviews} />
                <div>{reviews.map(review => <Review key={review.reviewId} {...review} />)}</div>
                {loading && <div className={styles.loading}>Loading...</div>}
            </div>
        );
    }
}

Reviews.propTypes = {
    refreshReviews: PropTypes.func.isRequired,
    fetchReviews: PropTypes.func.isRequired,
    reviews: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired
};

export default Reviews;
