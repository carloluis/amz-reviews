import { TOGGLE_STAR, toggleStar } from '../stars.actions';

describe('stars.actions', () => {
    it('should return TOGGLE_STAR action', () => {
        const star = 1;
        const action = toggleStar(star);
        expect(action).toMatchObject({
            type: TOGGLE_STAR,
            star
        });
    });
});
