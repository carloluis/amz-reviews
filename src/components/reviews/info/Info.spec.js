import React from 'react';
import renderer from 'react-test-renderer';
import Info from './Info';

describe('<Info/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<Info title="Info Title" text="Info Description" />);
        expect(result).toMatchSnapshot();
    });
});
