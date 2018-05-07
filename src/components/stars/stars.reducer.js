import { TOGGLE_STAR } from './stars.actions';

const DEFAULT_STATE = [5];

function reducer(state = DEFAULT_STATE, action) {
    if (action.type === TOGGLE_STAR) {
        const { star } = action;
        return state.includes(star) ? state.filter(item => item !== star) : [...state, star];
    }
    return state;
}

export default reducer;
