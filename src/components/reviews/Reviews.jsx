import React from 'react';
import Review from './review/Review';
import Button from './button/Button';
import styles from './Reviews.scss';

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.fetchReviews = this.fetchReviews.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            reviews: [],
            hasMore: false,
            page: 1
        };
    }
    componentDidMount() {
        this.fetchReviews();
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    fetchReviews(page = 1) {
        this.setState({ loading: true, page });

        fetch(`/reviews/${page}`)
            .then(response => response.json())
            .then(({ reviews, hasMore }) => {
                this.setState(state => ({ reviews: [...state.reviews, ...reviews], hasMore, loading: false }));
                if (!hasMore) {
                    this.componentWillUnmount();
                }
            })
            .catch(err => console.error(err))
            .finally(() => this.setState({ loading: false }));
    }
    handleScroll() {
        const { loading, page } = this.state;
        const { documentElement } = document;
        if (!loading && documentElement.scrollHeight - documentElement.scrollTop === documentElement.clientHeight) {
            this.fetchReviews(page + 1);
        }
    }
    handleRefresh() {
        this.setState({ loading: true, reviews: [] });
        this.fetchReviews(1);
    }
    render() {
        const { loading, reviews } = this.state;

        return (
            <div className={styles.container}>
                <Button text="REFRESH" onClick={this.handleRefresh} />
                <div>{reviews.map(review => <Review key={review.reviewId} {...review} />)}</div>
                {loading && <div className={styles.loading}>Loading...</div>}
            </div>
        );
    }
}

export default Reviews;
