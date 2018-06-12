import { getWeek } from '../week';

const getDatesInMs = starting =>
    Array(7)
        .fill(0)
        .map((_, i) => starting.getTime() + i * 24 * 60 * 60 * 1000);

describe('week', () => {
    it('should return the first week of 2018', () => {
        const date = new Date(2018, 0, 1);
        const dates = getDatesInMs(date);
        dates.map(getWeek).forEach(result => expect(result).toBe(1));
    });

    it('should return the 18th week of 2018', () => {
        const result = getWeek(new Date(2018, 4, 6).getTime());
        expect(result).toBe(18);
    });

    it('should return the 19th week of 2018', () => {
        const date = new Date(2018, 4, 7);
        const dates = getDatesInMs(date);
        dates.map(getWeek).forEach(result => expect(result).toBe(19));
    });
});
