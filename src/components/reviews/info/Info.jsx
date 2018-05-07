import React from 'react';
import PropTypes from 'prop-types';
import styles from './Info.scss';

const Info = ({ title, text }) => (
    <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
    </div>
);

Info.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Info;
