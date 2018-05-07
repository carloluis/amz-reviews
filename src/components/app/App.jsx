import React from 'react';
import Reviews from '../reviews';
import SearchFilter from '../search';
import StarsFilter from '../stars';
import styles from './App.scss';

// TODO: filters

const App = () => (
    <div className={styles.container}>
        <header>
            <h1>Reviews Demo</h1>
        </header>
        <section className={styles.filters}>
            <SearchFilter />
            <StarsFilter />
        </section>
        <Reviews />
    </div>
);

export default App;
