import { classes } from '../classes';

describe('classes', () => {
    it('should return only truthy classnames', () => {
        const result = classes('container', '', 'extra', false && 'not-applicable');
        expect(result).toBe('container extra');
    });
});
