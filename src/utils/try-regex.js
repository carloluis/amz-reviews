export function tryRegExp(pattern, flags = 'i') {
    try {
        return new RegExp(pattern, flags);
    } catch (err) {
        console.error('invalid pattern', err);
        return false;
    }
}
