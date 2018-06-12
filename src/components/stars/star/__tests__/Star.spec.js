import React from 'react';
import renderer from 'react-test-renderer';
import Star from '../Star';

describe('<Star/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<Star number={1} checked onToggle={jest.fn()} />).toJSON();
        expect(result).toMatchSnapshot();
    });
});
