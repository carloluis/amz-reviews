import { ORDER_BY } from './order-by.actions';

function reducer(state = '', action) {
    return action.type === ORDER_BY ? action.order : state;
}

export default reducer;
