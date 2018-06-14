import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<Button text="Some Text" onClick={jest.fn()} />);
        expect(result).toMatchSnapshot();
    });
});

describe('Button', () => {
    it('should call the callback when click', () => {
        const onClickMock = jest.fn();
        const wrapper = shallow(<Button text="" onClick={onClickMock} />);
        wrapper.simulate('click');
        expect(onClickMock).toBeCalled();
    });
});
