export function getDate(ms, locale = 'de-DE') {
    return new Date(ms).toLocaleDateString(locale);
}
