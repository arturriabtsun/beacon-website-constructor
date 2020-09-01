import {TitleBlock, ImageBlock, TextColumnsBlock, TextBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Site title', {tag: 'h2',styles: 'background: green; color: #fff; text-align: center;',} ),
    new ImageBlock('../assets/intro.png',{styles: '',alt: 'My image',} ),
    new TextBlock('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nihil nostrum consequatur accusantium, sequi ducimus libero deleniti vero dolore autem.',{tag: '',styles: 'background: blue; color: #fff;',} ),
    new TextColumnsBlock(['1 paragraph', '2 paragraph', '3 paragraph'],{tag: '',styles: 'background: red; color: #fff; padding: 1rem;',} ),
]