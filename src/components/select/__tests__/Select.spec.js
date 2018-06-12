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

        expect(wrapper.state('open')).toBeFalsy();
    });

    it('should render the options when click on input', () => {
        wrapper.find('.input').simulate('click');
        expect(wrapper.state('open')).toBeTruthy();
    });

    it('should toggle the options by clicking on input', () => {
        for (let time = 0; time < 5; time++) {
            wrapper.find('.input').simulate('click');
            expect(wrapper.state('open'))[time % 2 === 0 ? 'toBeTruthy' : 'toBeFalsy']();
        }
    });

    it('should nnot toggle the options when disabled flag is on', () => {
        wrapper.setProps({ disabled: true });

        for (let time = 0; time < 5; time++) {
            wrapper.find('.input').simulate('click');
            expect(wrapper.state('open')).toBeFalsy();
        }
    });

    it('should call onSelect when click on .option item', () => {
        wrapper.setState({ open: true });

        const event = { target: { dataset: { value: 'one' } } };
        const option = wrapper.find('.option').first();
        option.simulate('click', event);

        expect(PROPS.onSelect).toHaveBeenCalledWith('one');
    });
});
