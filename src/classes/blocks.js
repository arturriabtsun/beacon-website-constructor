import { row } from "../utils"
import { col } from "../utils"
import { img } from "../utils"

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML() {
        throw new Error('Method toHTML() should be initialized in extended class')
    }
}
export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const {tag = 'h2', styles} = this.options
        return row(col(
            `
                <${tag}>${this.value}</${tag}>
            `
        ), styles)
    }
}
export class ImageBlock extends Block  {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const styles = this.options.styles
        const alt = this.options.alt
        return row(col(img(this.value, styles, alt)))
    }
}
export class TextBlock extends Block  {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const styles = this.options.styles
        return row(col(
            `
                <p>${this.value}</p>
            `
        ), styles)
    }
}
export class TextColumnsBlock extends Block  {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const styles = this.options.styles
        const content = this.value.map(item => col(item))
        return row(content.join(''), styles)
    }
}
// SOLID Open / Closed principle