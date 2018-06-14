import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('<Loading/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<Loading loading />);
        expect(result).toMatchSnapshot();
    });

    it('snapshot - none', () => {
        const result = renderer.create(<Loading loading={false} />);
        expect(result).toMatchSnapshot();
    });
});
