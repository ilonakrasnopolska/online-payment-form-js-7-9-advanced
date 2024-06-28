import {Form} from "@forms.js/core"
import {options} from "./form-options.js"
import {setFormStyleSettings} from "./form-style-settings.js"
import {addEventListenersToInputs} from "./helpers/inputHandler.js"

export function createForm(container) {
  //create and append form
  new Form(container, options)
  //add some styles to form
  setFormStyleSettings()
  //add event listener's to input
  addEventListenersToInputs()
}
