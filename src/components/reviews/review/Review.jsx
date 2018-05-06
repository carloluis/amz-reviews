import React from 'react';
import PropTypes from 'prop-types';
import Info from '../info/Info';
import styles from './Review.scss';

const Review = ({ childAsin, content, created, productTitle, stars, title }) => (
    <div className={styles.container}>
        <div className={styles.header}>
            <i className={styles.image} />
            <Info title="DATE" text={created} />
            <Info title="STARS" text={stars} />
            <Info title={childAsin} text={productTitle} />
        </div>
        <div className={styles.content}>
            <span>{title}</span>
            <p>{content}</p>
        </div>
    </div>
);

Review.propTypes = {
    childAsin: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    productImg: PropTypes.string.isRequired,
    reviewId: PropTypes.string.isRequired,
    reviewCreated: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Review;
