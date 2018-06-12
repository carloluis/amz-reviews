import { getDate, getMonthName } from '../get-date';

describe('get-date', () => {
    describe('getDate', () => {
        it('should return the date using the de-DE locale', () => {
            const date = new Date(2018, 4, 6, 14, 35, 2, 112);
            const result = getDate(date);
            expect(result).toBe('6.5.2018');
        });

        it('should return the date using custom locale', () => {
            const date = new Date(2018, 4, 6, 14, 35, 2, 112);
            const result = getDate(date, 'en-US');
            expect(result).toBe('5/6/2018');
        });
    });

    describe('getMonthName', () => {
        it('should return first month (0)', () => {
            const result = getMonthName(0);
            expect(result).toBe('January');
        });

        it('should return month by zero based index (4)', () => {
            const result = getMonthName(4);
            expect(result).toBe('May');
        });
    });
});
