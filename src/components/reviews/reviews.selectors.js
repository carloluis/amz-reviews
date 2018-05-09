import { tryRegExp } from '../../utils';

export const getReviewsInfo = state => ({
    data: state.data,
    hasMore: state.hasMore,
    loading: state.loading,
    page: state.page,
    error: state.error
});

export const getReviewsBySearch = ({ data }, search) => {
    const regex = tryRegExp(search);

    if (regex && search) {
        return data.filter(
            ({ title, content, productTitle, childAsin }) =>
                regex.test(title) || regex.test(content) || regex.test(productTitle) || regex.test(childAsin)
        );
    }
    if (search) {
        const pattern = search.toLowerCase();
        return data.filter(
            ({ title, content, productTitle, childAsin }) =>
                title.toLowerCase().includes(pattern) ||
                content.toLowerCase().includes(pattern) ||
                productTitle.toLowerCase().includes(pattern) ||
                childAsin.toLowerCase().includes(pattern)
        );
    }

    return [...data];
};
