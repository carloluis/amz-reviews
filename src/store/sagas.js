import createSagaMiddleware from 'redux-saga';
import reviewsSaga from '../components/reviews/reviews.sagas';

export const sagaMiddleware = createSagaMiddleware();

export const runSagas = () => {
    sagaMiddleware.run(reviewsSaga);
};
