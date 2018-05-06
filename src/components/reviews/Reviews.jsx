import React from 'react';
import Review from './review/Review';
import styles from './Reviews.scss';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            hasMore: false
        };
    }
    componentDidMount() {
        fetch('/reviews/1')
            .then(response => response.json())
            .then(({ reviews, hasMore }) => this.setState({ reviews, hasMore }))
            .catch(err => console.error(err));
    }
    render() {
        return (
            <div className={styles.container}>
                <button>Refresh</button>
                {this.state.reviews.map(review => <Review key={review.reviewId} {...review} />)}
            </div>
        );
    }
}

export default Reviews;
