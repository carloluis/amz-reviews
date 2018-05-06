import React from 'react';
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
        return <div className={styles.container}>{this.state.reviews.length}</div>;
    }
}

export default Reviews;
