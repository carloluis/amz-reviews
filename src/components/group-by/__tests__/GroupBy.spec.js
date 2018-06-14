import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GroupBy from '../GroupBy';

const PROPS = {
    groupBy: jest.fn(),
    value: 'some'
};

describe('<GroupBy/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<GroupBy {...PROPS} />).toJSON();
        expect(result).toMatchSnapshot();
    });
});

describe('GroupBy', () => {
    it('should call the groupBy callback when selecting new value', () => {
        const wrapper = shallow(<GroupBy {...PROPS} />);
        const value = 'Day';
        wrapper.simulate('select', value);
        expect(PROPS.groupBy).toHaveBeenCalledWith(value);
    });
});
