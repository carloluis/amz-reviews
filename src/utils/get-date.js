export function getDate(ms, locale = 'de-DE') {
    return new Date(ms).toLocaleDateString(locale);
}

export function getMonthName(month) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return months[month];
}
