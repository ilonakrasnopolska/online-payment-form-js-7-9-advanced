import {Form} from "@forms.js/core"
import {options} from "./form-options.js"
import {setFormStyleSettings} from "./form-style-settings.js"
import {validateCardInput} from "./helpers/inputsEvents.js"

export function createForm(container) {
  //create and append form
  new Form(container, options)
  //add some styles to form
  setFormStyleSettings()
  validateCardInput()
}
