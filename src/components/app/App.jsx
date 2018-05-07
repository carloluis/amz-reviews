import React from 'react';
import Reviews from '../reviews';
import SearchFilter from '../search';
import StarsFilter from '../stars';
import Select from '../select/Select';
import styles from './App.scss';

// TODO: filters

const App = () => (
    <div className={styles.container}>
        <header>
            <h1>Reviews Demo</h1>
        </header>
        <section className={styles.filters}>
            <SearchFilter />
            <div className={styles.grouping}>
                <Select onSelect={console.info} title="Group by" values={['', 'Day', 'Week', 'Month']} disabled />
                <Select onSelect={console.info} title="Order by" values={['', 'Asc', 'Desc']} />
            </div>
            <StarsFilter />
        </section>
        <Reviews />
    </div>
);

export default App;
