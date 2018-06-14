import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import OrderBy from '../OrderBy';

const PROPS = {
    orderBy: jest.fn(),
    value: ''
};

describe('<OrderBy/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<OrderBy {...PROPS} />).toJSON();
        expect(result).toMatchSnapshot();
    });
});

describe('OrderBy', () => {
    it('should call the orderBy callback when selecting new value', () => {
        const wrapper = shallow(<OrderBy {...PROPS} />);
        const value = 'Asc';
        wrapper.simulate('select', value);
        expect(PROPS.orderBy).toHaveBeenCalledWith(value);
    });
});
