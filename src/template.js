import { row } from "./utils"
import { col } from "./utils"
import { img } from "./utils"

function title(block) {
    const {tag, styles} = block.options
    return row(col(
        `
            <${tag}>${block.value}</${tag}>
        `
    ), styles)
}
function text(block) {
    const styles = block.options.styles
    return row(col(
        `
            <p>${block.value}</p>
        `
    ), styles)
}

function textColumns(block) {
    const styles = block.options.styles
    const content = block.value.map(item => col(item))
    return row(content.join(''), styles)
}

function image(block) {
    const styles = block.options.styles
    const alt = block.options.alt
    return row(col(img(block.value, styles, alt)))
}

export const template = {
    title,
    text,
    textColumns,
    image,
}