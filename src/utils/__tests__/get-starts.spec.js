import { getStars } from '../get-stars';

describe('get-stars', () => {
    it('should return five empty stars', () => {
        const result = getStars();
        expect(result).toBe('☆☆☆☆☆');
    });

    it('should return stars (N empty / M full)', () => {
        const result = getStars(4, 5);
        expect(result).toBe('★★★★☆');
    });

    it('should return five filled stars', () => {
        const result = getStars(5);
        expect(result).toBe('★★★★★');
    });
});
