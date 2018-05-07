export function getStars(count = 0, total = 5) {
    return '★'.repeat(count).padEnd(total, '☆');
}
