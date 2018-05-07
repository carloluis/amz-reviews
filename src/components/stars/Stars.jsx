import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star/Star';
import styles from './Stars.scss';

const options = Array(5)
    .fill(1)
    .map((x, i) => x + i);

class Stars extends React.PureComponent {
    render() {
        const { stars, toggleStar } = this.props;

        return (
            <div className={styles.container}>
                FILTER BY:
                <div className={styles.stars}>
                    {options.map(s => <Star key={s} number={s} onToggle={toggleStar} checked={stars.includes(s)} />)}
                </div>
            </div>
        );
    }
}

Stars.propTypes = {
    stars: PropTypes.arrayOf(PropTypes.number).isRequired,
    toggleStar: PropTypes.func.isRequired
};

export default Stars;
