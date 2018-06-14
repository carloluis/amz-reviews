import React from 'react';
import renderer from 'react-test-renderer';
import Review from './Review';

const PROPS = {
    childAsin: 'childAsin?',
    content: 'Lorem ipsum',
    created: 1528940971610,
    productTitle: 'Product Title',
    productImg: 'Image',
    reviewId: 'Review Id',
    reviewCreated: 1528940971610,
    stars: 5,
    title: 'Title'
};

describe('<Review/>', () => {
    it('snapshot', () => {
        const result = renderer.create(<Review {...PROPS} />);
        expect(result).toMatchSnapshot();
    });
});
