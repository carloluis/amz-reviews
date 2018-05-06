import 'whatwg-fetch';

export function fetchJSON(url, options) {
    return fetch(url, options).then(response => response.json());
}
