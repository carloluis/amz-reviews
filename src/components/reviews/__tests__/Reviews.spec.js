import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from '../Reviews';

const PROPS = {
    refreshReviews: jest.fn(),
    fetchReviews: jest.fn(),
    reviews: [],
    loading: false,
    hasMore: false,
    page: 0,
    error: false
};

describe('<Reviews/>', () => {
    beforeEach(() => {
        PROPS.refreshReviews.mockClear();
        PROPS.fetchReviews.mockClear();
    });
    afterEach(() => {
        expect(PROPS.refreshReviews).toHaveBeenCalled();
    });
    it('snapshot', () => {
        const result = renderer.create(<Reviews {...PROPS} />);
        expect(result).toMatchSnapshot();
    });
    it('snapshot - loading', () => {
        const result = renderer.create(<Reviews {...PROPS} loading />);
        expect(result).toMatchSnapshot();
    });
    it('snapshot - with reviews', () => {
        const reviews = [
            {
                key: '',
                values: [
                    {
                        childAsin: 'childAsin?',
                        content: 'Lorem ipsum',
                        created: 1528940971610,
                        productTitle: 'Product Title',
                        productImg: 'Image',
                        reviewId: 'Review Id',
                        reviewCreated: 1528940971610,
                        stars: 5,
                        title: 'Title'
                    }
                ]
            }
        ];
        const result = renderer.create(<Reviews {...PROPS} reviews={reviews} page={1} hasMore />);
        expect(result).toMatchSnapshot();
    });
});
