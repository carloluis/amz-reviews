import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ onClick, text }) => (
    <a className={styles.button} onClick={onClick}>
        {text}
    </a>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.node.isRequired
};

export default Button;
