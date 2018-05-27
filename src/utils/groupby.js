export function groupBy(items, selector) {
    return items.reduce((res, item) => {
        const group = selector(item);
        const groupItem = res.find(item => item.key === group);
        if (groupItem) {
            groupItem.values.push(item);
        } else {
            res.push({ key: group, values: [item] });
        }
        return res;
    }, []);
}
