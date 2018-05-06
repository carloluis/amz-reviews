import React from 'react';
import Reviews from '../reviews/Reviews';
import styles from './App.scss';

// TODO: search, filters

const App = () => (
    <div className={styles.container}>
        <Reviews />
    </div>
);

export default App;