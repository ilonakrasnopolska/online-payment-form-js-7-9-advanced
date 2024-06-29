import {Form} from "@forms.js/core"
import {options} from "./form-options.js"
import {setFormStyleSettings} from "./form-style-settings.js"
import {addEventListenersToInputs} from "./helpers/inputHandler.js"
import {resetFormByClick} from "./helpers/submitButton.js"

export function createForm(container) {
  //create and append form
  const form = new Form(container, options)
  //add some styles to form
  setFormStyleSettings()
  //add event listener's to input
  addEventListenersToInputs()
  //add event listener's to button and reset form by click
  resetFormByClick(form)
}
