import React from 'react';
import PropTypes from 'prop-types';
import { classes } from '../../../utils';
import styles from './Star.scss';

class Star extends React.PureComponent {
    render() {
        const { checked, number, onToggle } = this.props;

        return (
            <span className={classes(styles.container, checked && styles.checked)} onClick={() => onToggle(number)}>
                <i className={styles.square} />
                <span>{number} ★</span>
            </span>
        );
    }
}

Star.propTypes = {
    checked: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default Star;
