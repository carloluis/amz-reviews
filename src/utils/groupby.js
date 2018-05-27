export function groupBy(items, selector) {
    return items.reduce((res, item) => {
        const group = selector(item);
        const currentGroup = res[group] || [];
        res[group] = [...currentGroup, item];
        return res;
    }, {});
}
