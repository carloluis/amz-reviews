import React from 'react';
import PropTypes from 'prop-types';
import styles from './loading.scss';

const Loading = ({ loading }) => loading && <div className={styles.dots} />;

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Loading;
