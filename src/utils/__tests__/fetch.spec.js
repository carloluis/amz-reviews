import { fetchJSON } from '../fetch';

jest.mock('whatwg-fetch', () => {
    const response = { json: jest.fn(() => Promise.resolve('data')) };
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));
});

process.env.API_URL = '//api-url';

describe('fetch', () => {
    it('fetchJSON should compose the resource url and call fetch', () => {
        const options = {};
        return fetchJSON('/res', options).then(data => {
            expect(fetch).toHaveBeenCalledWith('//api-url/res', options);
            expect(data).toBe('data');
        });
    });
});
