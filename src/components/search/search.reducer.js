import { UPDATE_SEARCH } from './search.actions';
import { tryRegExp } from '../../utils';

function reducer(state = '', action) {
    return action.type === UPDATE_SEARCH ? action.value : state;
}

export default reducer;

export const getSearch = state => state;

export const getSearchFilter = (state, reviews) => {
    const regex = tryRegExp(state);

    if (regex && state) {
        return reviews.filter(
            ({ title, content, productTitle, childAsin }) =>
                regex.test(title) || regex.test(content) || regex.test(productTitle) || regex.test(childAsin)
        );
    }

    if (state) {
        const pattern = state.toLowerCase();
        return reviews.filter(
            ({ title, content, productTitle, childAsin }) =>
                title.toLowerCase().includes(pattern) ||
                content.toLowerCase().includes(pattern) ||
                productTitle.toLowerCase().includes(pattern) ||
                childAsin.toLowerCase().includes(pattern)
        );
    }

    return [...reviews];
};
