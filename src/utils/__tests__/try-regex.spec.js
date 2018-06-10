import { tryRegExp } from '../try-regex';

describe('try-regex', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    beforeEach(() => {
        consoleErrorSpy.mockReset();
    });

    it('should return false when provided invalid regexp', () => {
        const result = tryRegExp('\\');
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(result).toBeFalsy();
    });

    it('should return corresponding regexp', () => {
        const result = tryRegExp('\\w');
        expect(consoleErrorSpy).not.toHaveBeenCalled();
        expect(result).toMatchObject(/\w/i);
    });
});
