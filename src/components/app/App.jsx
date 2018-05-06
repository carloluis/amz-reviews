import React from 'react';
import Reviews from '../reviews';
import Search from '../search';
import styles from './App.scss';

// TODO: filters

const App = () => (
    <div className={styles.container}>
        <header>
            <Search />
        </header>
        <Reviews />
    </div>
);

export default App;
