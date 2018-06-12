import React from 'react';
import renderer from 'react-test-renderer';
import Stars from '../Stars';

const PROPS = {
    stars: [1, 5],
    toggleStar: jest.fn()
};

describe('<Stars/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<Stars {...PROPS} />).toJSON();
        expect(result).toMatchSnapshot();
    });
});
