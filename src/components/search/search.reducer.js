import { UPDATE_SEARCH } from './search.actions';

function reducer(state = '', action) {
    return action.type === UPDATE_SEARCH ? action.value : state;
}

export default reducer;
