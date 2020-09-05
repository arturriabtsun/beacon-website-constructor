export function row(content, styles) {
    return `<div class="row" style="${styles}">${content}</div>`
}
export function col(content) {
    return `<div class="col-sm">${content}</div>`
}
export function img(path, styles, alt) {
    return `<img src="${path}" class="img-fluid" alt="${alt}" style="${styles}">`
}

export function css(styles = {}) {
    const toString = key => `${key}: ${styles[key]}`
    Object.keys(styles).map(toString).join(';')
}