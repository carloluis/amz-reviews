import { UPDATE_SEARCH } from './search.actions';

function reducer(state = '', action) {
    if (action.type === UPDATE_SEARCH) {
        return action.value;
    }
    return state;
}

export default reducer;
