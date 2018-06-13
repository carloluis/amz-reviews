import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Search from '../Search';

const PROPS = {
    onUpdateSearch: jest.fn(),
    value: 'some'
};

describe('<Search/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<Search {...PROPS} />).toJSON();
        expect(result).toMatchSnapshot();
    });
});

describe('Search', () => {
    it('should call the onUpdateSearch prop when change input value', () => {
        const wrapper = shallow(<Search {...PROPS} />);
        const event = { target: { value: 'x' } };
        wrapper.find('input.search').simulate('change', event);
        expect(PROPS.onUpdateSearch).toHaveBeenCalled();
    });
});
