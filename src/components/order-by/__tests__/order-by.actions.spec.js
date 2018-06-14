import { ORDER_BY, orderBy } from '../order-by.actions';

describe('order-by.actions', () => {
    it('should return ORDER_BY action', () => {
        const order = 'Asc';
        const action = orderBy(order);
        expect(action).toMatchObject({
            type: ORDER_BY,
            order
        });
    });
});
