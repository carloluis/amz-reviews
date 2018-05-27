import { GROUP_BY } from './group-by.actions';
import { groupBy } from '../../utils/groupby';

function reducer(state = '', action) {
    return action.type === GROUP_BY ? action.value : state;
}

export default reducer;

export const getGroup = state => state;
export const getGroupFilter = (state, reviews) => (state ? groupBy(reviews, selector(state)) : reviews);

const selector = group => review => {
    const date = new Date(review.created);
    const [year, month] = [date.getFullYear(), date.getMonth()];

    switch (group) {
        case 'Month':
            return `${year}.${month}`;
        case 'Week':
            throw new Error('Week functionality not implemented yet');
        case 'Day':
            return `${year}.${month}.${date.getDate()}`;
    }
};
