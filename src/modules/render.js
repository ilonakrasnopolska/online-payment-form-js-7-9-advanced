import { setChildren } from 'redom'
import { main, section, container } from './helpers/createDOM-elements.js'
import { buildForm } from './formBuilder.js'

export default function render(form) {
    //append main to body
    setChildren(window.document.body, [main])
    //append all elements
    setChildren(main, [section])
    setChildren(section, [container])
    //create form
    form = buildForm(container)
    console.log(form)
    return form
}
