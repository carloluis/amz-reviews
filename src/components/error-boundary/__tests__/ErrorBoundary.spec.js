import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from '../ErrorBoundary';

const PROPS = {
    children: 'some text'
};

describe('<Search/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<ErrorBoundary {...PROPS} />).toJSON();
        expect(result).toMatchSnapshot();
    });
});
