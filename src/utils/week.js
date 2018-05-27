// https://weeknumber.net/how-to/javascript

const DAY_MS = 24 * 60 * 60 * 1000;

export function getWeek(ms) {
    const date = new Date(ms);
    date.setHours(0, 0, 0, 0);

    // thursday in current week decides the year
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // january 4 is always in week 1
    const firstWeek = new Date(date.getFullYear(), 0, 4);
    // count the number of weeks from first week to date
    // adjust to thursday in first week
    return 1 + Math.round(((ms - firstWeek.getTime()) / DAY_MS - 3 + (firstWeek.getDay() + 6) % 7) / 7);
}
