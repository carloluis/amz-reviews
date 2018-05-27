import { GROUP_BY } from './group-by.actions';
import { getDate, getMonthName } from '../../utils/get-date';
import { groupBy } from '../../utils/groupby';

function reducer(state = '', action) {
    return action.type === GROUP_BY ? action.value : state;
}

export default reducer;

export const getGroup = state => state;
export const getGroupFilter = (state, reviews) => groupBy(reviews, selector(state));

const selector = group => review => {
    const date = new Date(review.created);

    switch (group) {
        case 'Month': {
            const [year, month] = [date.getFullYear(), date.getMonth()];
            return `${getMonthName(month)} of ${year}`;
        }
        case 'Week':
            throw new Error('Week grouping not implemented yet');
        case 'Day':
            return getDate(date.getTime());
        default:
            return '';
    }
};
