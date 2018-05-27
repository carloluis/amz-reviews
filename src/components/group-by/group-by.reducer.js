import { GROUP_BY } from './group-by.actions';
import { getDate, getMonthName } from '../../utils/get-date';
import { getWeek } from '../../utils/week';
import { groupBy } from '../../utils/groupby';

function reducer(state = '', action) {
    return action.type === GROUP_BY ? action.value : state;
}

export default reducer;

export const getGroup = state => state;
export const getGroupFilter = (state, reviews) => groupBy(reviews, selector(state));

const selector = group => ({ created }) => {
    const date = new Date(created);
    const year = date.getFullYear();

    switch (group) {
        case 'Month':
            return `${getMonthName(date.getMonth())} ${year}`;
        case 'Week':
            return `Week ${getWeek(created)} (${year})`;
        case 'Day':
            return getDate(created);
        default:
            return '';
    }
};
