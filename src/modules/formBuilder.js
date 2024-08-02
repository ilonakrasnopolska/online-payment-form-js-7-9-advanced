import createForm from './create-form.js'
import { inputValidationHandler } from './helpers/inputHandler.js'
import { sendFormByClick } from './helpers/submitButton.js'
import { setChildren } from 'redom'
import { title } from './helpers/createDOM-elements.js'

export function buildForm(container) {
    //create and append form
    const form = createForm()
    setChildren(container, [title, form])
    // //add event listener's to input
    inputValidationHandler()
    // //add event listener's to button and reset form by click
    sendFormByClick(form)
    return form
}
