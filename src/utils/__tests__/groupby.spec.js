import { groupBy } from '../groupby';

describe('groupby', () => {
    it('should return items grouped by the selector', () => {
        const items = [1, 2, 3, 4];
        const selector = item => item % 2;
        const result = groupBy(items, selector);
        expect(result).toMatchObject([{ key: 1, values: [1, 3] }, { key: 0, values: [2, 4] }]);
    });
});
