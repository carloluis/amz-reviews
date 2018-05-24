import { ORDER_BY } from './order-by.actions';

function reducer(state = '', action) {
    return action.type === ORDER_BY ? action.order : state;
}

export default reducer;

export const getOrder = state => state;
export const getOrderFilter = (state, reviews) =>
    state ? reviews.sort((r1, r2) => (r2.created - r1.created) * (state === 'Desc' ? 1 : -1)) : reviews;
