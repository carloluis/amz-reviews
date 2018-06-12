import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Select from '../Select';

const PROPS = {
    disabled: false,
    onSelect: jest.fn(),
    selected: '',
    title: 'numbers',
    values: ['one', 'two', 'three', 'four']
};

describe('<Select/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<Select {...PROPS} />).toJSON();
        expect(result).toMatchSnapshot();
    });

    it('snapshot - open', () => {
        const result = renderer.create(<Select {...PROPS} />);
        result.getInstance().setState({ open: true });
        expect(result).toMatchSnapshot();
    });
});

describe('Select', () => {
    let wrapper;
    beforeEach(() => {
        PROPS.onSelect.mockClear();
        wrapper = shallow(<Select {...PROPS} />);
    });

    it('should call onSelect when click on .option item', () => {
        wrapper.setState({ open: true });

        const event = { target: { dataset: { value: 'one' } } };
        const option = wrapper.find('.option').first();
        option.simulate('click', event);

        expect(PROPS.onSelect).toHaveBeenCalledWith('one');
    });
});
