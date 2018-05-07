export function classes(...classnames) {
    return classnames.filter(classname => !!classname).join(' ');
}
