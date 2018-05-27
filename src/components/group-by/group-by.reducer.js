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

const selector = group => review => {
    switch (group) {
        case 'Month': {
            const date = new Date(review.created);
            const [year, month] = [date.getFullYear(), date.getMonth()];
            return `${getMonthName(month)} ${year}`;
        }
        case 'Week': {
            const date = new Date(review.created);
            return `Week ${getWeek(review.created)} (${date.getFullYear()})`;
        }
        case 'Day':
            return getDate(review.created);
        default:
            return '';
    }
};
