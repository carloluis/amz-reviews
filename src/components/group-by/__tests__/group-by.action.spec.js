import { GROUP_BY, groupBy } from '../group-by.actions';

describe('group-by.actions', () => {
    it('should return GROUP_BY action', () => {
        const value = 'Day';
        const action = groupBy(value);
        expect(action).toMatchObject({
            type: GROUP_BY,
            value
        });
    });
});
