import React from 'react';
import ErrorBoundary from '../error-boundary';
import Reviews from '../reviews';
import SearchFilter from '../search';
import StarsFilter from '../stars';
import OrderBy from '../order-by';
import GroupBy from '../group-by';
import styles from './App.scss';

// TODO: filters

const App = () => (
    <div className={styles.container}>
        <header>
            <h1>
                Reviews Demo{' '}
                <a href="https://github.com/carloluis/amz-reviews" title="GitHub Project">
                    📃
                </a>
            </h1>
        </header>
        <section className={styles.filters}>
            <ErrorBoundary>
                <SearchFilter />
                <div className={styles.grouping}>
                    <GroupBy />
                    <OrderBy />
                </div>
                <StarsFilter />
            </ErrorBoundary>
        </section>
        <ErrorBoundary>
            <Reviews />
        </ErrorBoundary>
    </div>
);

export default App;
