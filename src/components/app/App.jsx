import React from 'react';
import Reviews from '../reviews';
import Search from '../search';
import styles from './App.scss';

// TODO: filters

const App = () => (
    <div className={styles.container}>
        <header>
            <h1>Reviews Demo</h1>
        </header>
        <section className={styles.filters}>
            <Search />
        </section>
        <Reviews />
    </div>
);

export default App;
