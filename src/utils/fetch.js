import 'whatwg-fetch';

export function fetchJSON(url, options) {
    return fetch(process.env.API_URL + url, options).then(response => response.json());
}
